import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";  

export default function Section4 (): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>
        <p>
          Lorsque la fonction est exprimée sous la forme canonique :
        </p>
        <BlockMath math="f(x) = a(x - \alpha)^2 + \beta" />
        <p>
          l’axe de symétrie de la parabole est une droite verticale passant par l’abscisse du sommet.
        </p>
        <p>
          L’axe de symétrie est donc la droite :
        </p>
        <BlockMath math="x = \alpha" />
        <p><strong>Exemple :</strong></p>
        <BlockMath math="f(x) = -(x - 2)^2 + 9" />
        <p>
          Ici, <InlineMath math="\alpha = 2" />, donc l’axe de symétrie est :
        </p>
        <BlockMath math="x = 2" />
      </section>
    </div>
  );
}