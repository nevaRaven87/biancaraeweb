"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl border-2 border-sage bg-sage/10 p-6 text-center"
      >
        <p className="font-display text-lg font-bold text-espresso">
          Thanks so much!
        </p>
        <p className="mt-2 text-espresso/70">
          I&apos;ll add you to the list!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          className="w-full rounded-full border-2 border-espresso/15 bg-white px-5 py-3 text-espresso placeholder:text-espresso/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/30"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-espresso px-6 py-3 font-semibold text-cream transition-transform hover:scale-[1.02] hover:bg-espresso/90"
      >
        Sign Up
      </button>
      <p className="text-center text-sm text-espresso/60">
        I respect your privacy. (I&apos;m also too busy chasing toddlers to
        spam you).
      </p>
    </form>
  );
}
