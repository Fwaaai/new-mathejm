import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Section(): React.JSX.Element {
  const { sectionId } = useParams();
  
  // Find the section details from the sections data
  const sectionDetails = React.useMemo(() => {
    const sections = [
      { id: 'section-01', number: 'Section 1', title: 'Forme développée' },
      { id: 'section-02', number: 'Section 2', title: 'Coordonnées du sommet (forme développée)' },
      // ... add all sections
    ];
    return sections.find(s => s.id === sectionId);
  }, [sectionId]);
  
  if (!sectionDetails) {
    return <div>Section non trouvée</div>;
  }

  return (
    <main>
      <header className="intro">
        <nav className="breadcrumb" aria-label="Fil d'Ariane">
          <Link to="/">Accueil</Link>
          <span className="breadcrumb__separator" aria-hidden="true">›</span>
          <Link to="/chapitres/chapitre-1">Chapitre 1</Link>
          <span className="breadcrumb__separator" aria-hidden="true">›</span>
          <span className="breadcrumb__current">{sectionDetails.number}</span>
        </nav>
        <h1 className="intro-title">{sectionDetails.title}</h1>
        <p className="intro-lead">Section {sectionDetails.number} du Chapitre 1</p>
      </header>

      <div className="mt-10 bg-white p-9 rounded-2xl shadow-[0_18px_60px_rgba(31,35,53,0.08)]">
        {/* Section content will go here */}
      </div>
    </main>
  );
}