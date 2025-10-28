export interface SectionContent {
  id: string;
  title: string;
  content: {
    theory: string;
    examples: Array<{
      problem: string;
      solution: string;
    }>;
    exercises: Array<{
      problem: string;
      solution?: string;  // Optional, if you want to hide solutions initially
    }>;
  };
}

export const section01: SectionContent = {
  id: "section-01",
  title: "Forme développée",
  content: {
    theory: `
      La forme développée d'un polynôme du second degré est une expression de la forme :
      
      ax² + bx + c, où :
      - a ≠ 0 (sinon ce n'est pas un polynôme du second degré)
      - b et c sont des nombres réels quelconques
      
      Exemples :
      - 2x² + 3x + 1
      - -x² + 4
      - x² - 2x
    `,
    examples: [
      {
        problem: "Développer (x + 2)²",
        solution: `
          (x + 2)² = x² + 4x + 4
          
          Méthode :
          1. On utilise l'identité remarquable (a + b)² = a² + 2ab + b²
          2. Ici, a = x et b = 2
          3. Donc : x² + 2(x)(2) + 2²
          4. Simplifie : x² + 4x + 4
        `
      },
      {
        problem: "Développer (2x - 1)(x + 3)",
        solution: `
          (2x - 1)(x + 3) = 2x² + 6x - x - 3 = 2x² + 5x - 3
          
          Méthode :
          1. On distribue le premier terme (2x) : 2x(x) + 2x(3)
          2. On distribue le second terme (-1) : -1(x) + -1(3)
          3. On regroupe les termes semblables
        `
      }
    ],
    exercises: [
      {
        problem: "Développer (x - 3)²",
        solution: "x² - 6x + 9"
      },
      {
        problem: "Développer (2x + 1)(3x - 2)",
        solution: "6x² + x - 2"
      }
    ]
  }
};