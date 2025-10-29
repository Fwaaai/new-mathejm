import React, { useEffect, useState } from "react";
import { loadSection } from "../loaders/sectionLoader";
import NotFound from "../../pages/NotFound";

interface SectionRendererProps {
  chapterNumber: number;
  sectionNumber: number;
}

export default function SectionRenderer({ chapterNumber, sectionNumber }: SectionRendererProps): React.JSX.Element {
  const [SectionComponent, setSectionComponent] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);
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

  if (error) {
    return <NotFound />;
  }
  if (!SectionComponent) {
    return <div>Chargement de la section...</div>;
  }
  return <SectionComponent />;
}