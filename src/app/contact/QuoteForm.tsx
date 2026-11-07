"use client";

import { useState } from "react";

const SERVICE_OPTIONS = [
  "Layout / Plan Review",
  "Concrete Scanning",
  "Core Drilling",
  "Concrete Openings",
  "Other",
];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: connect to Web3Forms/Formspree once PSPE confirms which service to use.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-green-800">
        Thank you for contacting PSPE Construction Solutions LLC. We have received
        your request and will follow up as soon as possible.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
        <label className="block text-sm font-medium text-neutral-700">
          Service needed
        </label>
        <select
          name="service"
          required
          className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-red-600 focus:outline-none"
        >
          {SERVICE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700">
          Brief project description
        </label>
        <textarea
          name="description"
          rows={4}
          className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-red-600 focus:outline-none"
        />
      </div>

      <Field label="Requested date or schedule" name="schedule" />

      <div>
        <label className="block text-sm font-medium text-neutral-700">
          File upload (plans, photos, or documents — optional)
        </label>
        <input
          type="file"
          name="attachment"
          className="mt-1 w-full text-sm text-neutral-600"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-red-700 transition-colors sm:w-auto"
      >
        Submit Request
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
      <label className="block text-sm font-medium text-neutral-700">
        {label}
        {required && <span className="text-red-600"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-red-600 focus:outline-none"
      />
    </div>
  );
}
