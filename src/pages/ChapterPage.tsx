import React from "react";
import { Link, useParams } from "react-router-dom";
import { getChapterBySlug }  from "../data/chapters.ts";
import  NotFound  from "./NotFound.tsx";
import ChapterRenderer from "../utils/renderers/chapterRenderer.tsx";


export default function ChapterPage(): React.JSX.Element {
  const { chapterId } = useParams();
  const chapterMeta = getChapterBySlug(chapterId || "");
  if (!chapterMeta) {
    return <NotFound />;
  }


  return (
    <main className="min-h-screen bg-background text-text mx-auto max-w-[860px] ml-16 px-6 pt-16 pb-20 sm:ml-0 sm:px-4 sm:pt-8">
      <header className="intro">
        <p className="intro-eyebrow">Chapitre {chapterMeta?.id}</p>
        <h1 className="intro-title">{chapterMeta?.title}</h1>
        <p className="intro-lead">
          {chapterMeta?.lead}
        </p>
        <nav className="breadcrumb" aria-label="Fil d'Ariane">
          <Link className="hover:text-accent"to="/">Accueil</Link>
          <span className="breadcrumb-separator" aria-hidden="true">
            ›
          </span>
          <span className="breadcrumb-current">Chapitre {chapterMeta?.id}</span>
        </nav>
      </header>

      <ChapterRenderer chapterNumber={Number(chapterMeta.id)} />
    </main>
  );
}
