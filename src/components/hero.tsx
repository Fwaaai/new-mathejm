import React from "react";

export default function Hero():React.JSX.Element {
  return (
    <header className="bg-white rounded-2xl p-10 shadow-[0_18px_60px_rgba(31,35,53,0.12)] flex flex-col gap-4">
      <p className="m-0 uppercase text-[0.75rem] tracking-[0.16em] text-[#2f3cbe]">
        Bienvenue
      </p>
      <h1 className="m-0 text-[clamp(2rem,4vw,2.8rem)] leading-tight font-semibold">
        Révisions pour spé mathématiques
      </h1>
      <p className="m-0 text-[1.05rem] leading-8 text-[#616174]">
        Ce site accompagne les élèves à atteindre les objectifs pédagogiques
        pour les chapitres.
      </p>
      <div className="mt-2 flex flex-wrap gap-3">
        <a
          className="self-start inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#2f3cbe] text-white font-semibold no-underline shadow-[0_16px_32px_rgba(47,60,190,0.35)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(47,60,190,0.4)] focus:-translate-y-0.5 focus:shadow-[0_22px_44px_rgba(47,60,190,0.4)]"
          href="/chapters/chapitre-1"
        >
          Accéder au chapitre 1
        </a>
        <a
          className="self-start inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-[rgba(47,60,190,0.4)] text-[#2f3cbe] font-semibold no-underline hover:bg-[rgba(47,60,190,0.08)] focus:bg-[rgba(47,60,190,0.08)]"
          href="/chapters/chapitre-2"
        >
          Découvrir le chapitre 2
        </a>
      </div>
    </header>
  );
}
