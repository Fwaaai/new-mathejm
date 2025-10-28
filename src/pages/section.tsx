import React from "react";
import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { type SectionContent } from "../content/chapitre-1/section01";

// Import all section content
import section01 from "../content/chapitre-1/section01";

const sections = [section01]; // Add other sections as you create them

export default function Section(): React.JSX.Element {
  const { sectionId } = useParams();

  // Find the section details from the sections data
  const sectionDetails = React.useMemo(() => {
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
    return sections.find((s) => s.id === sectionId);
  }, [sectionId]);

  if (!sectionDetails) {
    return <NotFound />;
  }

  return (
    <main>
      <header className="intro">
        <nav className="breadcrumb" aria-label="Fil d'Ariane">
          <Link to="/">Accueil</Link>
          <span className="breadcrumb__separator" aria-hidden="true">
            ›
          </span>
          <Link to="/chapitres/chapitre-1">Chapitre 1</Link>
          <span className="breadcrumb__separator" aria-hidden="true">
            ›
          </span>
          <span className="breadcrumb__current">{sectionDetails.number}</span>
        </nav>
        <h1 className="intro-title">{sectionDetails.title}</h1>
        <p className="intro-lead">{sectionDetails.number} du Chapitre 1</p>
      </header>

      <div className="mt-10 bg-white p-9 rounded-2xl shadow-[0_18px_60px_rgba(31,35,53,0.08)]">
        {/* Théorie */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Théorie</h2>
          <div className="prose max-w-none">
            {section01.content.theory.split('\n').map((line, i) => (
              <p key={i} className="mb-2">{line}</p>
            ))}
          </div>
        </section>

        {/* Exemples */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Exemples</h2>
          <div className="space-y-6">
            {section01.content.examples.map((example, i) => (
              <div key={i} className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Exemple {i + 1}: {example.problem}</h3>
                <div className="prose max-w-none">
                  {example.solution.split('\n').map((line, j) => (
                    <p key={j} className="mb-2">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Exercices */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Exercices</h2>
          <div className="space-y-6">
            {section01.content.exercises.map((exercise, i) => (
              <div key={i} className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Exercice {i + 1}: {exercise.problem}</h3>
                <button 
                  className="mt-2 text-accent hover:underline"
                  onClick={() => alert(exercise.solution)}
                >
                  Voir la solution
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
