export const sections = [
  {
    id: "1",
    slug: "section-01",
    number: "Section 1",
    title: "Notion de limite: tableau/graphique",
  },
  {
    id: "2",
    slug: "section-02",
    number: "Section 2",
    title: "Dérivabilité: interprétation graphique",
  },
  {
    id: "3",
    slug: "section-03",
    number: "Section 3",
    title: "Tester la dérivabilité en a par calcul",
  },
  {
    id: "4",
    slug: "section-04",
    number: "Section 4",
    title: "Non‑dérivabilité en a par calcul",
  },
  {
    id: "5",
    slug: "section-05",
    number: "Section 5",
    title: "Points non dérivables: lecture graphique",
  },
  {
    id: "6",
    slug: "section-06",
    number: "Section 6",
    title: "Approcher le nombre dérivé en a",
  },
  {
    id: "7",
    slug: "section-07",
    number: "Section 7",
    title: "Notion de tangente en un point",
  },
  {
    id: "8",
    slug: "section-08",
    number: "Section 8",
    title: "Équation de la tangente en un point",
  },
  {
    id: "9",
    slug: "section-09",
    number: "Section 9",
    title: "Nombre dérivé: graphique et calcul",
  },
  {
    id: "10",
    slug: "section-10",
    number: "Section 10",
    title: "Intersections de la tangente avec les axes",
  },
  {
    id: "11",
    slug: "section-11",
    number: "Section 11",
    title: "Approximation affine via taux d’accroissement",
  },
  {
    id: "12",
    slug: "section-12",
    number: "Section 12",
    title: "Tangentes parallèles: résoudre f'(x) = f'(a)",
  },
  {
    id: "13",
    slug: "section-13",
    number: "Section 13",
    title: "Résoudre f'(x) = 0 et interpréter",
  },
  {
    id: "14",
    slug: "section-14",
    number: "Section 14",
    title: "Tangente passant par l’origine: équation",
  },
];

export function getSectionBySlug(slug: string) {
  return sections.find((section) => section.slug === slug);
}

