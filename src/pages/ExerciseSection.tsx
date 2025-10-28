import React from 'react';
import { Link, useParams } from 'react-router-dom';
import NotFound from './NotFound';

export default function ExerciseSection(): React.JSX.Element {
  const { sectionId } = useParams();
  
  // Will implement content fetching later
  const sectionData = {
    id: sectionId,
    number: "Section 1",
    title: "Forme développée",
    exercises: [
      {
        id: 1,
        question: "Développer (x + 2)²",
        solution: "x² + 4x + 4"
      },
      {
        id: 2,
        question: "Développer (2x - 1)(x + 3)",
        solution: "2x² + 5x - 3"
      }
    ]
  };

  const [showSolution, setShowSolution] = React.useState<number | null>(null);

  return (
    <main>
      <header className="intro">
        <nav className="breadcrumb" aria-label="Fil d'Ariane">
          <Link to="/">Accueil</Link>
          <span className="breadcrumb__separator" aria-hidden="true">›</span>
          <Link to="/chapitres/chapitre-1">Chapitre 1</Link>
          <span className="breadcrumb__separator" aria-hidden="true">›</span>
          <span className="breadcrumb__current">{sectionData.title} - Exercices</span>
        </nav>
        <h1 className="intro-title">{sectionData.title}</h1>
        <p className="intro-lead">{sectionData.number} - Exercices</p>
      </header>

      <div className="mt-10 bg-white p-9 rounded-2xl shadow-[0_18px_60px_rgba(31,35,53,0.08)]">
        <section className="space-y-8">
          {sectionData.exercises.map((exercise) => (
            <div 
              key={exercise.id} 
              className="p-6 bg-gray-50 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4">
                Exercice {exercise.id}
              </h3>
              <p className="mb-4">{exercise.question}</p>
              
              <button
                className="prim-btn px-4 py-2"
                onClick={() => setShowSolution(
                  showSolution === exercise.id ? null : exercise.id
                )}
              >
                {showSolution === exercise.id ? 'Masquer la solution' : 'Voir la solution'}
              </button>

              {showSolution === exercise.id && (
                <div className="mt-4 p-4 bg-white rounded-lg border border-accent/20">
                  <p className="font-medium">Solution:</p>
                  <p>{exercise.solution}</p>
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}