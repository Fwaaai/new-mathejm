import React , { useEffect, useState } from "react";
import { loadExercise } from "../loaders/exerciseLoader";
import NotFound from "../../pages/NotFound";
import { Link } from "react-router-dom";
import { chaptersMeta } from "../../data/chapters";

interface ExerciseRendererProps {
  chapterNumber: number;
  sectionNumber: number;
}

export default function ExerciseRenderer ({ chapterNumber, sectionNumber }: ExerciseRendererProps): React.JSX.Element {
  const [ExerciseComponent, setExerciseComponent] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [linkTo, setLinkTo] = useState<string>(`/chapitres/chapitre-1/`);
  const [showText, setShowText] = useState<string>("Exercice Suivant")
  useEffect(() => {
    let cancelled = false;
    async function fetchExercise() {
      try {
        setError(null);
        setExerciseComponent(null);
        const component = await loadExercise(chapterNumber, sectionNumber);
        if (!cancelled) {
          if (component) {
            setExerciseComponent(() => component);
          } else {
            setError("Exercice introuvable");
          }
        }
      } catch (err) {
        console.error(err);
        if (!cancelled) {
          setError("Erreur lors du chargement de l'exercice");
        }
      }
    }
    fetchExercise();
    return () => { cancelled = true; };
  },[chapterNumber, sectionNumber]);
  useEffect(() => {
      if (sectionNumber === chaptersMeta[chapterNumber - 1]?.length)  {
        setLinkTo(`/chapitres/chapitre-${chapterNumber}/`);
        setShowText(`Retour au chapitre ${chapterNumber}`)
      }
      else {
        setLinkTo(`/chapitres/chapitre-${chapterNumber}/exercices/section-${String(sectionNumber + 1).padStart(2, "0")}`);
        setShowText("Exercices de la section suivante")
      }
    }, [chapterNumber, sectionNumber])
  if (error) {
    return <NotFound />;
  }
  if (!ExerciseComponent) {
    return <div>Chargement de l'exercice...</div>;
  }
  return (
    <>
      <ExerciseComponent />
      <div className="surfaces pb-6">
        <Link to={`/chapitres/chapitre-${chapterNumber}/sections/section-${String(sectionNumber).padStart(2, "0")}`} className="prim-btn py-3 px-4 m-4 inline-block text-lg">
          Retour à la section
        </Link>
        <Link to={linkTo} className={`scnd-btn py-3 px-4 m-4 inline-block text-lg`}>
          {showText}
        </Link>
      </div>
    </>
  );
}