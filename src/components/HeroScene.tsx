"use client";
import { useEffect, useRef } from "react";

const VERTEX_SHADER = `
  uniform float uTime;
  uniform float uMorphProgress;
  uniform int uCurrentShape;
  uniform int uTargetShape;
  attribute float aId;
  attribute vec3 aRandom;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vDepth;
  #define PI 3.14159265359
  #define TAU 6.28318530718
  float safePow(float b, float e){ return pow(max(abs(b), 0.00001), e); }

  vec3 getGridPos(vec3 rnd){
    float t = uTime * 0.3;
    if(rnd.x < 0.72){
      float gx = (floor(rnd.y * 26.0) - 13.0) * 2.0;
      float gz = (floor(rnd.z * 26.0) - 13.0) * 2.0;
      float jx = (fract(rnd.y*37.0)-0.5)*0.6;
      float jz = (fract(rnd.z*53.0)-0.5)*0.6;
      float wobble = sin(gx*0.3 + gz*0.3 - t*2.0) * 0.6;
      return vec3(gx+jx, wobble, gz+jz);
    } else {
      float corner = floor(rnd.y*4.0);
      float cx = (corner < 2.0) ? -24.0 : 24.0;
      float cz = (corner == 0.0 || corner == 2.0) ? -24.0 : 24.0;
      float h = rnd.z*34.0;
      return vec3(cx + sin(h*0.2)*0.4, h, cz + cos(h*0.2)*0.4);
    }
  }

  vec3 getScanPos(vec3 rnd){
    float t = uTime;
    float r = 27.0 * sqrt(rnd.y);
    float angle = rnd.z*TAU + t*0.25;
    float ringPhase = fract(r*0.22 - t*0.9);
    float ring = smoothstep(0.12, 0.0, ringPhase) * 2.2;
    float y = sin(r*0.4 - t*1.4)*0.8 + ring*1.4;
    return vec3(r*cos(angle), y, r*sin(angle));
  }

  vec3 getDrillPos(vec3 rnd){
    float h = (rnd.x - 0.5) * 56.0;
    float depth = (h + 28.0) / 56.0;
    float r = mix(24.0, 2.0, depth) * (0.55 + 0.45*rnd.y);
    float spin = mix(0.6, 4.0, 1.0-depth);
    float angle = rnd.z*TAU + uTime*spin;
    return vec3(r*cos(angle), h, r*sin(angle));
  }

  vec3 getPos(int s, vec3 rnd){
    if(s==0) return getGridPos(rnd);
    if(s==1) return getScanPos(rnd);
    return getDrillPos(rnd);
  }

  vec3 getColor(int s, vec3 rnd, vec3 pos){
    if(s==0){
      if(rnd.x > 0.72) return mix(vec3(0.75,0.5,0.03), vec3(1.0,0.85,0.4), rnd.z);
      return mix(vec3(0.55,0.58,0.65), vec3(0.92,0.92,0.96), rnd.z);
    }
    if(s==1){
      float r = length(pos.xz);
      float ringPhase = fract(r*0.22 - uTime*0.9);
      float hot = smoothstep(0.12,0.0,ringPhase);
      return mix(vec3(0.55,0.32,0.02), vec3(1.0,0.85,0.45), hot);
    }
    float depth = (pos.y + 28.0) / 56.0;
    return mix(vec3(0.22,0.14,0.02), vec3(1.0,0.75,0.25), 1.0-depth);
  }

  float getAlpha(int s, vec3 rnd){
    if(s==0) return rnd.x > 0.72 ? 0.9 : 0.55;
    if(s==1) return 0.8;
    return 0.85;
  }

  float cubicInOut(float t){ return t<0.5 ? 4.0*t*t*t : 1.0 - safePow(-2.0*t+2.0,3.0)/2.0; }

  void main(){
    vec3 p1 = getPos(uCurrentShape, aRandom);
    vec3 p2 = getPos(uTargetShape, aRandom);
    vec3 c1 = getColor(uCurrentShape, aRandom, p1);
    vec3 c2 = getColor(uTargetShape, aRandom, p2);
    float a1 = getAlpha(uCurrentShape, aRandom);
    float a2 = getAlpha(uTargetShape, aRandom);
    float morph = cubicInOut(uMorphProgress);

    vColor = mix(c1, c2, morph);
    vAlpha = mix(a1, a2, morph);

    vec3 fp = mix(p1, p2, morph);
    float burst = sin(uMorphProgress * PI);
    fp += normalize(fp + vec3(0.0001)) * burst * (4.0 + aRandom.x*6.0);

    float tw = 0.75 + 0.25*sin(uTime*8.0 + aId*TAU*80.0);
    vAlpha *= tw;

    vec4 mv = modelViewMatrix * vec4(fp, 1.0);
    gl_Position = projectionMatrix * mv;
    vDepth = -mv.z;
    float size = 2.6 + aRandom.y * 3.4;
    gl_PointSize = size * (60.0 / max(vDepth, 0.1));
  }
`;

const FRAGMENT_SHADER = `
  varying vec3 vColor;
  varying float vAlpha;
  varying float vDepth;
  void main(){
    vec2 uv = gl_PointCoord.xy - vec2(0.5);
    float dist = length(uv);
    if(dist > 0.5) discard;
    float core = exp(-dist*14.0);
    float halo = exp(-dist*4.0);
    vec3 col = mix(vColor, vec3(1.0), core*0.55);
    float df = smoothstep(220.0, 15.0, vDepth);
    gl_FragColor = vec4(col, vAlpha * (halo*0.5+core) * df);
  }
`;

export default function HeroScene({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let disposed = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
      if (nav.connection?.saveData) return;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const heroSection = canvas.closest("section");
      if (!heroSection) return;

      const test = document.createElement("canvas");
      const hasWebGL = !!(test.getContext("webgl") || test.getContext("experimental-webgl"));
      if (!hasWebGL) return;

      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const particleCount = isMobile ? 14000 : 45000;

      const THREE_CDN = "https://esm.sh/three@0.169.0";
      const importCdn = (specifier: string) =>
        import(/* webpackIgnore: true */ specifier);

      const THREE = await importCdn(THREE_CDN);
      const { OrbitControls } = await importCdn(`${THREE_CDN}/addons/controls/OrbitControls.js`);
      const { EffectComposer } = await importCdn(
        `${THREE_CDN}/addons/postprocessing/EffectComposer.js`
      );
      const { RenderPass } = await importCdn(`${THREE_CDN}/addons/postprocessing/RenderPass.js`);
      const { UnrealBloomPass } = await importCdn(
        `${THREE_CDN}/addons/postprocessing/UnrealBloomPass.js`
      );

      if (disposed) return;
      await new Promise((r) => requestAnimationFrame(r));
      if (disposed) return;

      function getDims() {
        const W = heroSection!.clientWidth || window.innerWidth;
        const H = heroSection!.clientHeight || window.innerHeight;
        return { W: Math.max(W, 320), H: Math.max(H, 400) };
      }
      let { W, H } = getDims();

      canvas.classList.remove("cv-fallback");

      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x000000, 0.0035);

      const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 1000);
      function updateCameraZ() {
        const aspect = W / H;
        const maxExtent = 32;
        const fovRad = (camera.fov * Math.PI) / 180;
        let z = maxExtent / Math.tan(fovRad / 2);
        if (aspect < 1) z /= aspect;
        camera.position.set(0, z * 0.28, z);
      }
      updateCameraZ();

      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: false,
        powerPreference: isMobile ? "default" : "high-performance",
        alpha: false,
      });
      renderer.setSize(W, H, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
      renderer.setClearColor(0x000000, 1);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.03;
      controls.enablePan = false;
      controls.enableZoom = false;
      controls.enableRotate = false;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.4;

      const renderScene = new RenderPass(scene, camera);
      const bloomPass = new UnrealBloomPass(new THREE.Vector2(W, H), 1.5, 0.6, 0.25);
      const composer = new EffectComposer(renderer);
      composer.addPass(renderScene);
      composer.addPass(bloomPass);

      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const ids = new Float32Array(particleCount);
      const randoms = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        ids[i] = i / particleCount;
        randoms[i * 3] = Math.random();
        randoms[i * 3 + 1] = Math.random();
        randoms[i * 3 + 2] = Math.random();
      }
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("aId", new THREE.BufferAttribute(ids, 1));
      geometry.setAttribute("aRandom", new THREE.BufferAttribute(randoms, 3));

      const material = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uMorphProgress: { value: 0 },
          uCurrentShape: { value: 0 },
          uTargetShape: { value: 0 },
        },
        vertexShader: VERTEX_SHADER,
        fragmentShader: FRAGMENT_SHADER,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

      scene.add(new THREE.Points(geometry, material));

      let currentShape = 0;
      let targetShape = 0;
      let isTransitioning = false;
      let morphProgress = 0;
      function triggerMorph() {
        if (!isTransitioning) {
          targetShape = (currentShape + 1) % 3;
          isTransitioning = true;
          morphProgress = 0;
        }
      }
      const morphTimeout = setTimeout(() => triggerMorph(), 7000);
      const morphInterval = setInterval(triggerMorph, 9000);

      let heroVisible = true;
      const observer = new IntersectionObserver(
        (entries) => {
          heroVisible = entries[0]?.isIntersecting ?? true;
        },
        { threshold: 0.01 }
      );
      observer.observe(heroSection);

      function onResize() {
        const d = getDims();
        W = d.W;
        H = d.H;
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
        updateCameraZ();
        renderer.setSize(W, H, false);
        composer.setSize(W, H);
        bloomPass.resolution.set(W, H);
      }
      window.addEventListener("resize", onResize, { passive: true });

      const clock = new THREE.Clock();
      let rafId = 0;
      function animate() {
        rafId = requestAnimationFrame(animate);
        if (document.hidden) return;
        if (!heroVisible && !isMobile) return;

        controls.update();
        if (isTransitioning) {
          morphProgress += clock.getDelta() * 0.5;
          if (morphProgress >= 1) {
            morphProgress = 0;
            currentShape = targetShape;
            isTransitioning = false;
          }
        } else {
          clock.getDelta();
        }
        material.uniforms.uTime.value = clock.getElapsedTime();
        material.uniforms.uMorphProgress.value = morphProgress;
        material.uniforms.uCurrentShape.value = currentShape;
        material.uniforms.uTargetShape.value = targetShape;
        composer.render();
      }
      animate();

      cleanup = () => {
        cancelAnimationFrame(rafId);
        clearTimeout(morphTimeout);
        clearInterval(morphInterval);
        window.removeEventListener("resize", onResize);
        observer.disconnect();
        controls.dispose();
        geometry.dispose();
        material.dispose();
        renderer.dispose();
      };
    })();

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`cv-fallback pointer-events-none ${className}`}
    />
  );
}
