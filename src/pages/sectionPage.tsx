import React from "react";
import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { getChapterBySlug } from "../data/chapters";
import { getSectionBySlug } from "../data/chapters/chapter1/sections";
import SectionRenderer from "../utils/renderers/sectionRenderer";


export default function SectionPage(): React.JSX.Element {
  const { chapterId, sectionId } = useParams<{ chapterId: string; sectionId: string }>();
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
      <header className="intro">
        <p className="intro-eyebrow">Chapitre {chapterMeta?.id}</p>
        <h1 className="intro-title">{sectionMeta?.number} - {sectionMeta?.title}</h1>
        <nav className="breadcrumb" aria-label="Fil d'Ariane">
          <Link className="hover:text-accent" to="/">Accueil</Link>
          <span className="breadcrumb-separator" aria-hidden="true">
            ›
          </span>
          <Link className= "hover:text-accent" to={`/chapitres/chapitre-${chapterMeta?.id}`}>Chapitre {chapterMeta?.id}</Link>
          <span className="breadcrumb-separator" aria-hidden="true">
            ›
          </span>
          <span className="breadcrumb-current">{sectionMeta?.number}</span>
        </nav>
      </header>

      <SectionRenderer chapterNumber={Number(chapterMeta.id)} sectionNumber={Number(sectionMeta.id)} />
    </main>
  );
}
