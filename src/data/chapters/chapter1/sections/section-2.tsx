import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";  
import graph3 from "/src/assets/img/graphs/graph3.png";

export default function Section2 (): React.JSX.Element {
return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>
        <ol className="list list-1" type="1">
          <li>
            <h3 className="text-xl font-semibold p-2">Graphiquement</h3>
            <p>Observons ce graphique.</p>
            <img src={graph3} className="img" alt="" />
            <p>On peut dire que le sommet <i>semble</i> être à <InlineMath math="S = (-6, -5)" />.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold p-2">Par calcul à partir de la forme développée</h3>
            <p>On sait que la formule pour trouver l'abscisse du sommet <InlineMath math="x_S" /> est <InlineMath math="x_S = \frac{-b}{2a}" />.</p>
            <p>Par exemple, si l'on considère la forme développée <InlineMath math="f(x) = -x^2 + 4x + 5" /> :</p>
            <BlockMath
              math={String.raw`
                \begin{aligned}
                  x_S = \alpha &= -\frac{4}{2(-1)} = \frac{4}{2} = 2
                \end{aligned}
              `}
            />
            <p>L'abscisse du sommet vaut donc <InlineMath math="x_S = 2" />.</p>
            <p>Pour déterminer l'ordonnée du sommet <InlineMath math="y_S" />, on peut procéder de deux façons :</p>
            <ol className="list list-a" type="a">
              <li>
                <h4 className="text-lg p-1 font-semibold">Par la formule de <InlineMath math="\beta" /></h4>
                <p>La formule donne <InlineMath math="y_S = \beta = -\frac{\Delta}{4a}" /> avec <InlineMath math="\Delta = b^2 - 4ac" />.</p>
                <BlockMath
                  math={String.raw`
                    \begin{aligned}
                      \Delta &= 4^2 - 4(-1)(5) = 36, \\
                      \beta &= -\frac{36}{4(-1)} = 9.
                    \end{aligned}
                  `}
                />
                <p>On obtient ainsi <InlineMath math="y_S = 9" /> et donc <InlineMath math="S = (2, 9)" />.</p>
              </li>
              <li>
                <h4 className="text-lg p-1 font-semibold">Par substitution dans <InlineMath math="f(x)" /></h4>
                <p>On peut aussi évaluer <InlineMath math="f(x_S)" />.</p>
                <p>Comme <InlineMath math="f(x) = -x^2 + 4x + 5" /> :</p>
                <BlockMath
                  math={String.raw`
                    \begin{aligned}
                      f(2) &= -(2)^2 + 4(2) + 5 \\
                           &= -4 + 8 + 5 \\
                           &= 9.
                    \end{aligned}
                  `}
                />
                <p>On retrouve <InlineMath math="y_S = 9" />, donc <InlineMath math="S = (2, 9)" />.</p>
              </li>
            </ol>
          </li>
        </ol>
      </section>
    </div>
  );
} 