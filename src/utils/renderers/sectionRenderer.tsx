import React, { useEffect, useState } from "react";
import { loadSection } from "../loaders/sectionLoader";
import NotFound from "../../pages/NotFound";
import { Link } from "react-router-dom";
import { chaptersMeta } from "../../data/chapters.ts";

interface SectionRendererProps {
  chapterNumber: number;
  sectionNumber: number;
}

export default function SectionRenderer({ chapterNumber, sectionNumber }: SectionRendererProps): React.JSX.Element {
  const [SectionComponent, setSectionComponent] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [linkTo, setLinkTo] = useState<string>("/chapitres/chapitre-1/");
  const [showText, setShowText] = useState<string>("Section Suivante")
  useEffect(() => {
    let cancelled = false;
    async function fetchSection() {
      try {
        setError(null);
        setSectionComponent(null);
        const component = await loadSection(chapterNumber, sectionNumber);
        if (!cancelled) {
          if (component) {
            setSectionComponent(() => component);
          } else {
            setError("Section introuvable");
          }
        } 
      } catch (err) {
        console.error(err);
        if (!cancelled) {
          setError("Erreur lors du chargement de la section");
        }
      }
    } 
    fetchSection();
    return () => { cancelled = true; };
  },[chapterNumber, sectionNumber]);

  useEffect(() => {
    if (sectionNumber === chaptersMeta[chapterNumber - 1]?.length)  {
      setLinkTo(`/chapitres/chapitre-${chapterNumber}/`);
      setShowText(`Retour au chapitre ${chapterNumber}`)
    }
    else {
      setLinkTo(`/chapitres/chapitre-${chapterNumber}/sections/section-${String(sectionNumber + 1).padStart(2, "0")}`);
      setShowText("Section suivante")
    }
  }, [chapterNumber, sectionNumber])
  if (error) {
    return <NotFound />;
  }
  if (!SectionComponent) {
    return <div>Chargement de la section...</div>;
  }
  return (
    <>
      <SectionComponent />
      <div className="surfaces pb-6">
        <Link to={`/chapitres/chapitre-${chapterNumber}/exercices/section-${String(sectionNumber).padStart(2, "0")}`} className="prim-btn py-3 px-4 m-4 inline-block text-lg">
          Exercices
        </Link>
        <Link to={linkTo} className={`scnd-btn py-3 px-4 m-4 inline-block text-lg`}>
          {showText}
        </Link>
      </div>
    </>
  );
}