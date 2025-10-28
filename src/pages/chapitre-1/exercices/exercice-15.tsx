import React from 'react';
import { Link } from 'react-router-dom';

export default function Exercise15(): React.JSX.Element {
  return (
    <main>
      <header className="intro">
        <nav className="breadcrumb" aria-label="Fil d'Ariane">
          <Link to="/">Accueil</Link>
          <span className="breadcrumb__separator" aria-hidden="true">›</span>
          <Link to="/chapitres/chapitre-1">Chapitre 1</Link>
          <span className="breadcrumb__separator" aria-hidden="true">›</span>
          <span className="breadcrumb__current">Exercice 15 - Forme développée</span>
        </nav>
        <h1 className="intro-title">Forme développée</h1>
        <p className="intro-lead">Exercice 15 du Chapitre 1</p>
      </header>

      <div className="mt-10 bg-white p-9 rounded-2xl shadow-[0_18px_60px_rgba(31,35,53,0.08)]">
        <section className="prose max-w-none">
          <h2>Forme développée d'un polynôme du second degré</h2>
          <p>
            Un polynôme du second degré sous forme développée s'écrit :
            ax² + bx + c, où :
          </p>
          <ul>
            <li>a ≠ 0 (coefficient du terme de degré 2)</li>
            <li>b est le coefficient du terme de degré 1</li>
            <li>c est le terme constant</li>
          </ul>
        </section>
      </div>
    </main>
  );
}