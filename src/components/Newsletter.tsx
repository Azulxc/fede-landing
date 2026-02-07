"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center">
        <p className="font-serif text-2xl text-stone-900">¡Gracias!</p>
        <p className="mt-2 text-stone-500">
          Te avisaremos cuando haya novedades.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Tu email"
        required
        className="flex-1 px-4 py-3 bg-white border border-stone-300 rounded-md text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent transition"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-stone-900 text-white text-sm font-medium rounded-md hover:bg-stone-800 transition-colors cursor-pointer"
      >
        Suscribirme
      </button>
    </form>
  );
}
