import React from "react";
import { BlockMath, } from "react-katex";
import "katex/dist/katex.min.css";  
import table9 from '/src/assets/img/tables/table9.png';

export default function Section4 (): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>
        <p>
          Résolvons l'inéquation suivante :
        </p>
        <BlockMath math="(x - 1)(x^2 + 2x + 1) \leq 0" />

        <p>On factorise <BlockMath math="x^2 + 2x + 1" /> :</p>
        <BlockMath math="(x - 1)(x + 1)^2 \leq 0" />

        <p>Les <strong>valeurs critiques</strong> sont <BlockMath math="x = -1" /> et <BlockMath math="x = 1" />.</p>

        <p>On dresse le tableau de signes :</p>
        <img src={table9} className="img" alt="Tableau de signes pour l'inéquation (x-1)(x+1)^2 <= 0" />

        <p>On cherche les valeurs de <BlockMath math="x" /> pour lesquelles l’expression est <BlockMath math="\leq 0" /> (donc négative ou nulle).</p>

        <p>
          L'inéquation est vérifiée pour :
        </p>
        <BlockMath math={String.raw`x \in ]-\infty\,;\,1]`} />
      </section>
    </div>
  );
}