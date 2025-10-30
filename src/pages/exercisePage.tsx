import React from "react";
import { useParams, Link } from "react-router-dom";
import NotFound from "./NotFound";
import { getChapterBySlug } from "../data/chapters";
import { getSectionBySlug } from "../data/chapters/chapter1/sections";
import ExerciseRenderer from "../utils/renderers/exerciseRenderer";

export default function ExercisePage(): React.JSX.Element {
  const { chapterId, sectionId } = useParams<{
    chapterId: string;
    sectionId: string;
  }>();
  const chapterMeta = getChapterBySlug(chapterId || "");
  if (!chapterMeta) {
    return <NotFound />;
  }
  const sectionMeta = getSectionBySlug(sectionId || "");
  if (!sectionMeta) {
    return <NotFound />;
  }

  return (
      <main className="min-h-screen bg-background text-text mx-auto max-w-[860px] ml-16 px-6 pt-16 pb-20 sm:ml-0 sm:px-4 sm:pt-8">
      <header className="intro w-full">
        <p className="intro-eyebrow">Chapitre {chapterMeta?.id}</p>
        <h1 className="intro-title">
          {sectionMeta?.number} - {sectionMeta?.title}
        </h1>
        <nav className="breadcrumb" aria-label="Fil d'Ariane">
          <Link className="hover:text-accent" to="/">
            Accueil
          </Link>
          <span className="breadcrumb-separator" aria-hidden="true">
            ›
          </span>
          <Link
            className="hover:text-accent"
            to={`/chapitres/chapitre-${chapterMeta?.id}`}
          >
            Chapitre {chapterMeta?.id}
          </Link>
          <span className="breadcrumb-separator" aria-hidden="true">
            ›
          </span>
          <span className="breadcrumb-current">Exercices {sectionMeta?.number}</span>
        </nav>
      </header>
      <ExerciseRenderer
        chapterNumber={Number(chapterMeta.id)}
        sectionNumber={Number(sectionMeta.id)}
      />
    </main>

  );
}
