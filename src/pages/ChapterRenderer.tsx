import React from "react";
import { Link, useParams } from "react-router-dom";
import { chaptersMeta }  from "../data/chapters.ts";
import  NotFound  from "./NotFound.tsx";
type ChapterModule = { default: React.ComponentType };

const chapterModules = import.meta.glob<ChapterModule>("/src/data/chapters/chapter*/index.tsx", { eager: true });


const chapterById: Record<string, React.ComponentType> = Object.fromEntries(
  Object.entries(chapterModules).map(([path, mod]) => {
    const id = path.match(/chapter(\d+)\/index\.tsx$/)?.[1] ?? "";
    return [id, mod.default];
  })
);

export default function ChapterRenderer(): React.JSX.Element {
  const { chapterId } = useParams();
  const chapterMeta = chaptersMeta.find((chapter) => chapter.slug === chapterId);
  if (!chapterMeta) {
    return <NotFound />;
  }

  const ChapterComponent = chapterById[chapterMeta.id];
  if (!ChapterComponent) {
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
          <Link to="/">Accueil</Link>
          <span className="breadcrumb-separator" aria-hidden="true">
            ›
          </span>
          <span className="breadcrumb-current">Chapitre {chapterMeta?.id}</span>
        </nav>
      </header>

      <ChapterComponent />
    </main>
  );
}
