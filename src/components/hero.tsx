import React from "react";
import { Link } from "react-router-dom";

export default function Hero(): React.JSX.Element {
  return (
    <header className="intro">
      <p className="intro-eyebrow">Bienvenue</p>
      <h1 className="intro-title">Révisions pour spé mathématiques</h1>
      <p className="intro-lead">
        Ce site accompagne les élèves à atteindre les objectifs pédagogiques
        pour les chapitres.
      </p>
      <div className="mt-2 flex flex-wrap gap-3">
        <Link
          className="self-start inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-accent text-white font-semibold no-underline shadow-[0_16px_32px_rgba(80,96,255,0.35)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(80,96,255,0.4)] focus:-translate-y-0.5 focus:shadow-[0_22px_44px_rgba(80,96,255,0.4)]"
          to="/chapitres/chapitre-1"
        >
          Accéder au chapitre 1
        </Link>
        <a
          className="self-start inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-[rgba(80,96,255,0.4)] text-accent font-semibold no-underline hover:bg-[rgba(80,96,255,0.08)] focus:bg-[rgba(80,96,255,0.08)]"
          href="/chapitres/chapitre-2"
        >
          Découvrir le chapitre 2
        </a>
      </div>
    </header>
  );
}
