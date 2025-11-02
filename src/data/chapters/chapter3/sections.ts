export const sections = [
  {
    id: "1",
    slug: "section-01",
    number: "Section 1",
    title: "Notion de probabilité conditionnelle",
  },
  {
    id: "2",
    slug: "section-02",
    number: "Section 2",
    title: "Formule de la probabilité conditionnelle",
  },
  {
    id: "3",
    slug: "section-03",
    number: "Section 3",
    title: "Interprétation graphique et diagrammes de Venn",
  },
  {
    id: "4",
    slug: "section-04",
    number: "Section 4",
    title: "Règle du produit : P(A ∩ B) = P(B) × P₍ᴮ₎(A)",
  },
  {
    id: "5",
    slug: "section-05",
    number: "Section 5",
    title: "Indépendance de deux événements",
  },
  {
    id: "6",
    slug: "section-06",
    number: "Section 6",
    title: "Tableaux à double entrée et arbres pondérés",
  },
  {
    id: "7",
    slug: "section-07",
    number: "Section 7",
    title: "Probabilités composées avec arbre ou tableau",
  },
  {
    id: "8",
    slug: "section-08",
    number: "Section 8",
    title: "Partition de l’univers et formule des totales",
  },
  {
    id: "9",
    slug: "section-09",
    number: "Section 9",
    title: "Application de la formule des totales",
  },
  {
    id: "10",
    slug: "section-10",
    number: "Section 10",
    title: "Épreuves successives indépendantes",
  },
  {
    id: "11",
    slug: "section-11",
    number: "Section 11",
    title: "Arbre pondéré des épreuves indépendantes",
  }
];

export function getSectionBySlug(slug: string) {
  return sections.find((section) => section.slug === slug);
}