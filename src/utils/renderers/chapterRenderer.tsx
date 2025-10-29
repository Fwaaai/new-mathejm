import React, { useEffect, useState } from "react";
import { loadChapter } from "../loaders/chapterLoader";
import NotFound from "../../pages/NotFound";

interface ChapterRendererProps {
  chapterNumber: number;
} 

export default function ChapterRenderer({ chapterNumber }: ChapterRendererProps): React.JSX.Element {
  const [ChapterComponent, setChapterComponent] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    let cancelled = false;
    async function fetchChapter() {
      try {
        setError(null);
        setChapterComponent(null);
        const component = await loadChapter(chapterNumber);
        if (!cancelled) {
          if (component) {
            setChapterComponent(() => component);
          } else {
            setError("Chapitre introuvable");
          }
        } 
      } catch (err) {
        console.error(err);
        if (!cancelled) {
          setError("Erreur lors du chargement du chapitre");
        }
      }
    } 
    fetchChapter();
    return () => { cancelled = true; };
  },[chapterNumber]);

  if (error) {
    return <NotFound />;
  }
  if (!ChapterComponent) {
    return <div>Chargement du chapitre...</div>;
  }
  return <ChapterComponent />;
}