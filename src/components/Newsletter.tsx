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
      <p className="text-sm uppercase tracking-[0.1em]">
        Gracias. Te mantendremos al tanto.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex border-b-2 border-[#1a1a1a]">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu email"
          required
          className="flex-1 py-3 bg-transparent text-sm placeholder:text-stone-400 focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-3 text-[0.6875rem] uppercase tracking-[0.15em] font-medium hover:text-stone-600 transition-colors cursor-pointer"
        >
          Suscribirme &rarr;
        </button>
      </div>
      <p className="text-[0.75rem] text-stone-500">
        Recibí novedades sobre el lanzamiento y contenido exclusivo.
      </p>
    </form>
  );
}
