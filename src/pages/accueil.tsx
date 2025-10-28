import React from "react";
import Hero from "../components/hero";

export default function Accueil(): React.JSX.Element {
  return (
    <main
      id="haut-de-page"
      className="min-h-screen bg-[#f5f6fb] text-[#1b1b23] mx-auto max-w-[860px] ml-16 px-6 pt-16 pb-20 sm:ml-0 sm:px-4 sm:pt-8"
    >
      <Hero />

      <section className="mt-14 bg-white p-9 rounded-2xl shadow-[0_18px_60px_rgba(31,35,53,0.08)]">
        <h2 className="mt-0 mb-4 text-2xl font-semibold">
          Comment utiliser ce site ?
        </h2>
        <ul className="m-0 pl-5 text-[#616174] leading-8 list-disc">
          <li>Survolez l’onglet « Chapitres » pour afficher la navigation.</li>
          <li>Choisissez un chapitre pour découvrir toutes ses sections.</li>
          <li>
            Consultez chaque section et entraînez-vous avec les exercices
            proposés.
          </li>
        </ul>
      </section>

      <section className="mt-14 bg-white p-9 rounded-2xl shadow-[0_18px_60px_rgba(31,35,53,0.08)]">
        <h2 className="mt-0 mb-4 text-2xl font-semibold">
          À propos des contenus
        </h2>
        <p className="m-0 text-[#616174] leading-8">
          Les documents sont rédigés en français et adaptés au programme de la
          classe et faits à partir des documents indiquant les objectifs
          pédagogiques fournis par le professeur. Chaque chapitre est découpé en
          plusieurs sections pour chaque objectif pédagogique.
        </p>
      </section>
    </main>
  );
}
