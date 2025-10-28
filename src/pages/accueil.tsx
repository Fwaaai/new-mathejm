import React from 'react';
export const Accueil: React.FC = () => {
  return (
    <main className="max-w-2xl mx-auto py-16 px-6 pb-20">
      <header className="bg-white rounded-2xl px-10 py-12 shadow-neutral-700 flex flex-col gap-4.5">
        <p className="my-0 mx-0 uppercase text-xs tracking-widest text-[#2f3cbe]">Bienvenue</p>
        <h1 className="my-0 mx-0 text-[clamp(2rem,4vw,2.8rem)] leading-tight">Révisions pour spé mathématiques</h1>
      </header>
    </main>
  );
};