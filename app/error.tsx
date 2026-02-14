'use client'; // Obsługa błędów musi być po stronie klienta

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Tu mógłbyś wysyłać błędy do systemu logowania (np. Sentry)
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl font-serif italic text-nature-dark mb-4">
        Coś poszło nie tak...
      </h2>
      <p className="text-stone-500 mb-8 max-w-md">
        Nie udało się załadować produktów. Może to chwilowy problem z połączeniem lub ryby po prostu nie biorą.
      </p>
      <button
        onClick={() => reset()}
        className="bg-nature-dark text-white px-6 py-3 rounded-xl hover:bg-nature-accent transition-colors font-bold uppercase tracking-widest text-xs"
      >
        Spróbuj ponownie
      </button>
    </div>
  );
}