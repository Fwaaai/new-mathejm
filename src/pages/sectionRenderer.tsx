import React from "react";
import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { getChapterBySlug } from "../data/chapters";
import { getSectionBySlug } from "../data/chapters/chapter1/sections";

const sectionModules = import.meta.glob("../data/chapters/chapter*/sections/section-*.tsx");

export default function SectionRenderer(): React.JSX.Element {
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
    <div>
      <h1>Chapitre 1</h1>
      <p>
        Retrouvez ici les 19 sections pour le premier chapitre.
      </p>
      
    </div>
  );
}