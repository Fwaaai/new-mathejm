import React from "react";
import { Link } from "react-router-dom";

export default function Chap1(): React.JSX.Element {
  const sections = [
    { id: "section-01", number: "Section 1", title: "Forme développée" },
    {
      id: "section-02",
      number: "Section 2",
      title: "Coordonnées du sommet (forme développée)",
    },
    {
      id: "section-03",
      number: "Section 3",
      title: "Axe de symétrie (forme développée)",
    },
    {
      id: "section-04",
      number: "Section 4",
      title: "Racines (forme développée)",
    },
    {
      id: "section-05",
      number: "Section 5",
      title: "Tableau de variation (forme développée)",
    },
    {
      id: "section-06",
      number: "Section 6",
      title: "Tableau de signe (forme développée)",
    },
    { id: "section-07", number: "Section 7", title: "Forme canonique" },
    {
      id: "section-08",
      number: "Section 8",
      title: "Coordonnées du sommet (forme canonique)",
    },
    {
      id: "section-09",
      number: "Section 9",
      title: "Axe de symétrie (forme canonique)",
    },
    {
      id: "section-10",
      number: "Section 10",
      title: "Existence de racines (forme canonique)",
    },
    {
      id: "section-11",
      number: "Section 11",
      title: "Tableau de variation (forme canonique)",
    },
    {
      id: "section-12",
      number: "Section 12",
      title: "Tableau de signe (forme canonique)",
    },
    {
      id: "section-13",
      number: "Section 13",
      title: "Existence de la forme factorisée",
    },
    {
      id: "section-14",
      number: "Section 14",
      title:
        "Résolution d’équations du second degré sans changement de variable",
    },
    {
      id: "section-15",
      number: "Section 15",
      title: "Résolution avec changement de variable",
    },
    {
      id: "section-16",
      number: "Section 16",
      title: "Factorisation d’un polynôme de degré 3 connaissant une racine",
    },
    {
      id: "section-17",
      number: "Section 17",
      title: "Recherche de racines évidentes (degré ≤ 3)",
    },
    {
      id: "section-18",
      number: "Section 18",
      title: "Équation paramétrique (discussion selon les cas)",
    },
    {
      id: "section-19",
      number: "Section 19",
      title:
        "Résolution d’inéquation se ramenant à des facteurs du 1er ou 2nd degré",
    },
  ];
  return (
    <main>
      <header className="intro">
        <p className="intro-eyebrow">Chapitre 1</p>
        <h1 className="intro-title">Polynômes du second degré</h1>
        <p className="intro-lead">
          Retrouvez ici les 19 sections pour le premier chapitre.
        </p>
        <nav className="breadcrumb" aria-label="Fil d'Ariane">
          <Link to="/">Accueil</Link>
          <span className="breadcrumb__separator" aria-hidden="true">
            ›
          </span>
          <span className="breadcrumb__current">Chapitre 1</span>
        </nav>
      </header>

      <section className="mt-10 flex flex-col gap-6 bg-surface rounded-2xl p-10 shadow-[0_18px_60px_rgba(31,35,53,0.12)]">
        {sections.map((section) => (
          <div
            key={section.id}
            className="section-card text-text font-semibold transition-colors bg-background p-10 rounded-2xl hover:bg-[rgba(47,60,190,0.06)] focus:bg-[rgba(47,60,190,0.06)] focus:text-accent outline-none"
          >
            <span className="">{section.number} </span>
            <span className="">{section.title}</span>
            <br />
            <div className="mt-2 flex flex-wrap gap-3">
              <Link
                to={`/chapitres/chapitre-1/sections/${section.id}`}
                className="prim-btn px-5 py-2.5">
                Cours
              </Link>
              <Link
                to={`/chapitres/chapitre-1/exercices/${section.id}`}
                className="scnd-btn px-4 py-2"
              >
                Exercices
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
