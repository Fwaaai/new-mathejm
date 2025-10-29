import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Section4(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>

        <p>On considère une équation du type :</p>
        <BlockMath math="ax^2 + bx + c = 0" />
        <p>
          où <InlineMath math="a" />, <InlineMath math="b" />, et{" "}
          <InlineMath math="c" /> dépendent d’un paramètre, souvent noté{" "}
          <InlineMath math="m" />.
        </p>

        <p>
          On calcule alors le discriminant <InlineMath math="\Delta" /> en
          fonction de <InlineMath math="m" />, soit{" "}
          <InlineMath math="\Delta(m)" />.
        </p>

        <p>On discute ensuite les cas suivants :</p>

        <ul className="list">
          <li>
            <strong>Cas 1 :</strong> <InlineMath math="\Delta(m) > 0" /> <br />
            L'équation admet deux solutions réelles distinctes : <br />
            <BlockMath
              math={String.raw`x_1 = \frac{-b - \sqrt{\Delta}}{2a}, \quad x_2 = \frac{-b + \sqrt{\Delta}}{2a}`}
            />
          </li>

          <li>
            <strong>Cas 2 :</strong> <InlineMath math="\Delta(m) = 0" /> <br />
            L'équation admet une solution réelle double : <br />
            <BlockMath math={String.raw`x = \frac{-b}{2a}`} />
          </li>

          <li>
            <strong>Cas 3 :</strong> <InlineMath math="\Delta(m) < 0" /> <br />
            L'équation n'admet pas de solution réelle.
          </li>
        </ul>

        <h3 className="text-xl font-semibold p-2">Exemple</h3>

        <p>Soit l'équation suivante :</p>
        <BlockMath math="x^2 - mx + 1 = 0" />

        <p>On calcule le discriminant :</p>
        <BlockMath math="\Delta(m) = (-m)^2 - 4(1)(1) = m^2 - 4" />

        <p>On étudie les cas :</p>

        <BlockMath
          math={String.raw`
            \begin{aligned}
              &\text{Si } \Delta(m) > 0 \iff m^2 - 4 > 0 \iff |m| > 2 : && \text{deux racines réelles distinctes} \\
              & && x_{1,2} = \frac{m \pm \sqrt{m^2 - 4}}{2} \\[6pt]
              &\text{Si } \Delta(m) = 0 \iff m = \pm 2 : && \text{une racine double} \\
              & && x = \frac{m}{2} \\[6pt]
              &\text{Si } \Delta(m) < 0 \iff -2 < m < 2 : && \text{pas de solution réelle}
            \end{aligned}
          `}
        />
      </section>
    </div>
  );
}
