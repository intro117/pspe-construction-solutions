"use client";

import { useState } from "react";

const SERVICE_OPTIONS = [
  "Layout / Plan Review",
  "Concrete Scanning",
  "Core Drilling",
  "Concrete Openings",
  "Other",
];

const WEB3FORMS_ACCESS_KEY = "311429a1-abfb-47d9-b71d-bb29420a74b3";

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New quote request — PSPE Construction Solutions website");
    formData.append("from_name", "PSPE Construction Solutions website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg border border-green-900 bg-green-950/40 p-6 text-green-300">
        Thank you for contacting PSPE Construction Solutions LLC. We have received
        your request and will follow up as soon as possible.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && (
        <div className="rounded-lg border border-red-900 bg-red-950/40 p-4 text-sm text-red-300">
          Something went wrong sending your request. Please try again, or call us
          directly.
        </div>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Company" name="company" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone number" name="phone" type="tel" required />
        <Field label="Email address" name="email" type="email" required />
      </div>
      <Field label="Project location (city / state)" name="location" />

      <div>
        <label className="block text-sm font-medium text-neutral-300">
          Service needed
        </label>
        <select
          name="service"
          required
          className="mt-1 w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-amber-500 focus:outline-none"
        >
          {SERVICE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-300">
          Brief project description
        </label>
        <textarea
          name="description"
          rows={4}
          className="mt-1 w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-amber-500 focus:outline-none"
        />
      </div>

      <Field label="Requested date or schedule" name="schedule" />

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-neutral-950 transition-colors hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending..." : "Submit Request"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-neutral-300">
        {label}
        {required && <span className="text-amber-500"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-1 w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-amber-500 focus:outline-none"
      />
    </div>
  );
}
