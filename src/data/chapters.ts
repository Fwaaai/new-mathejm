export const chaptersMeta = [
  {
    id: "1",
    slug: "chapitre-1",
    title: "Polynômes du second degré",
    lead: "Retrouvez ici les 19 sections pour le premier chapitre.",
    length: 19
  },
  {
    id: "2",
    slug: "chapitre-2",
    title: "Notion de dérivée et équation de la tangente",
    lead: "Retrouvez ici les 14 sections pour le deuxième chapitre.",
    length: 14
  },
];

export function getChapterBySlug(slug: string) {
  return chaptersMeta.find((chapter) => chapter.slug === slug);
}
