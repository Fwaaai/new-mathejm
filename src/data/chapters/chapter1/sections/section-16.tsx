import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Section4(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>
        <p>Soit un polynôme :</p>
        <BlockMath math="p(x) = ax^3 + bx^2 + cx + d" />
        <p>
          Si l’on connaît une racine <InlineMath math="r" />, alors{" "}
          <InlineMath math="(x - r)" /> est un facteur de{" "}
          <InlineMath math="p(x)" />.
        </p>
        <p>
          On peut diviser <InlineMath math="p(x)" /> par{" "}
          <InlineMath math="(x - r)" />, ce qui donne un quotient{" "}
          <InlineMath math="q(x)" /> de degré 2. On factorise ensuite{" "}
          <InlineMath math="q(x)" /> pour obtenir la factorisation complète de{" "}
          <InlineMath math="p(x)" />.
        </p>

        <h3 className="text-xl font-semibold p-2">Exemple</h3>
        <p>Soit :</p>
        <BlockMath math="p(x) = 2x^3 - 3x^2 - 11x + 6" />
        <p>
          On connaît une racine : <InlineMath math="r = 3" />, donc{" "}
          <InlineMath math="(x - 3)" /> est un facteur de{" "}
          <InlineMath math="p(x)" />.
        </p>
        <p>
          On divise alors <InlineMath math="p(x)" /> par{" "}
          <InlineMath math="(x - 3)" /> :
        </p>
        <BlockMath
          math={String.raw`q(x) = \frac{2x^3 - 3x^2 - 11x + 6}{x - 3}`}
        />
        <p>On obtient :</p>
        <BlockMath math="q(x) = 2x^2 + 3x - 2" />
        <p>
          On factorise <InlineMath math="q(x)" /> :
        </p>
        <BlockMath math="q(x) = 2(x - \frac{1}{2})(x + 2) = (2x - 1)(x + 2)" />
        <p>
          On peut alors écrire la forme factorisée complète de{" "}
          <InlineMath math="p(x)" /> :
        </p>
        <BlockMath math="p(x) = (2x - 1)(x + 2)(x - 3)" />
      </section>
    </div>
  );
}
