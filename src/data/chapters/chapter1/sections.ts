export const sections = [
  {
    id: "1",
    slug: "section-01",
    number: "Section 1",
    title: "Forme développée",
  },
  {
    id: "2",
    slug: "section-02",
    number: "Section 2",
    title: "Coordonnées du sommet (forme développée)",
  },
  {
    id: "3",
    slug: "section-03",
    number: "Section 3",
    title: "Axe de symétrie (forme développée)",
  },
  {
    id: "4",
    slug: "section-04",
    number: "Section 4",
    title: "Racines (forme développée)",
  },
  {
    id: "5",
    slug: "section-05",
    number: "Section 5",
    title: "Tableau de variation (forme développée)",
  },
  {
    id: "6",
    slug: "section-06",
    number: "Section 6",
    title: "Tableau de signe (forme développée)",
  },
  {
    id: "7",
    slug: "section-07",
    number: "Section 7",
    title: "Forme canonique",
  },
  {
    id: "8",
    slug: "section-08",
    number: "Section 8",
    title: "Coordonnées du sommet (forme canonique)",
  },
  {
    id: "9",
    slug: "section-09",
    number: "Section 9",
    title: "Axe de symétrie (forme canonique)",
  },
  {
    id: "10",
    slug: "section-10",
    number: "Section 10",
    title: "Existence de racines (forme canonique)",
  },
  {
    id: "11",
    slug: "section-11",
    number: "Section 11",
    title: "Tableau de variation (forme canonique)",
  },
  {
    id: "12",
    slug: "section-12",
    number: "Section 12",
    title: "Tableau de signe (forme canonique)",
  },
  {
    id: "13",
    slug: "section-13",
    number: "Section 13",
    title: "Existence de la forme factorisée",
  },
  {
    id: "14",
    slug: "section-14",
    number: "Section 14",
    title: "Résolution d’équations du second degré sans changement de variable",
  },
  {
    id: "15",
    slug: "section-15",
    number: "Section 15",
    title: "Résolution avec changement de variable",
  },
  {
    id: "16",
    slug: "section-16",
    number: "Section 16",
    title: "Factorisation d’un polynôme de degré 3 connaissant une racine",
  },
  {
    id: "17",
    slug: "section-17",
    number: "Section 17",
    title: "Recherche de racines évslugentes (degré ≤ 3)",
  },
  {
    id: "18",
    slug: "section-18",
    number: "Section 18",
    title: "Équation paramétrique (discussion selon les cas)",
  },
  {
    id: "19",
    slug: "section-19",
    number: "Section 19",
    title:
      "Résolution d’inéquation se ramenant à des facteurs du 1er ou 2nd degré",
  },
];

export function getSectionBySlug(slug: string) {
  return sections.find((section) => section.slug === slug);
}
