import React from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Section4(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>
        <p>
          Lorsqu'une fonction quadratique est donnée sous la forme canonique :
        </p>
        <BlockMath math="f(x) = a(x - \alpha)^2 + \beta" />
        <p>Les coordonnées du sommet sont directement :</p>
        <BlockMath math="S(\alpha, \beta)" />

        <br />
        <br />

        <p>Par Exemple :</p>
        <BlockMath math="f(x) = -(x - 2)^2 + 9" />
        <p>On identifie :</p>
        <BlockMath math="\alpha = 2, \quad \beta = 9" />
        <p>Le sommet de la parabole a donc pour coordonnée :</p>
        <BlockMath math="S(2, 9)" />
      </section>
    </div>
  );
}
