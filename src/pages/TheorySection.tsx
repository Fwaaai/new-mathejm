import React from 'react';
import { Link, useParams } from 'react-router-dom';
import NotFound from './NotFound';

export default function TheorySection(): React.JSX.Element {
  const { sectionId } = useParams();
  
  // Will implement content fetching later
  const sectionData = {
    id: sectionId,
    number: "Section 1",
    title: "Forme développée"
  };

  return (
    <main>
      <header className="intro">
        <nav className="breadcrumb" aria-label="Fil d'Ariane">
          <Link to="/">Accueil</Link>
          <span className="breadcrumb__separator" aria-hidden="true">›</span>
          <Link to="/chapitres/chapitre-1">Chapitre 1</Link>
          <span className="breadcrumb__separator" aria-hidden="true">›</span>
          <span className="breadcrumb__current">{sectionData.title} - Cours</span>
        </nav>
        <h1 className="intro-title">{sectionData.title}</h1>
        <p className="intro-lead">{sectionData.number} - Cours</p>
      </header>

      <div className="mt-10 bg-white p-9 rounded-2xl shadow-[0_18px_60px_rgba(31,35,53,0.08)]">
        <section className="prose max-w-none">
          {/* Theory content will go here */}
          <h2>Cours à venir</h2>
          <p>Le contenu du cours sera bientôt disponible.</p>
        </section>
      </div>
    </main>
  );
}