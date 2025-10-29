import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import table1 from "/src/assets/img/tables/table1.png";
import table2 from "/src/assets/img/tables/table2.png";

export default function Section4(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>
        <ol className="list-1">
          <li>
            <h3 className="text-xl font-semibold p-2">
              <InlineMath math="a < 0" />
            </h3>
            <p>
              Considérons la fonction <InlineMath math="f(x) = -x^2 + 4x + 5" />
              .
            </p>
            <BlockMath
              math={String.raw`
                \begin{aligned}
                  \alpha &= -\frac{4}{2(-1)} = \frac{4}{2} = 2, \\
                  \Delta &= 4^2 - 4(-1)(5) = 36, \\
                  \beta &= -\frac{\Delta}{4a} = -\frac{36}{4(-1)} = 9.
                \end{aligned}
              `}
            />
            <p>
              Le sommet est donc <InlineMath math="S(2, 9)" />. Comme{" "}
              <InlineMath math="a < 0" />, la parabole est tournée vers le bas :
            </p>
            <img
              src={table1}
              className="img"
              alt="Tableau de variation pour a < 0"
            />
          </li>
          <li>
            <h3 className="text-xl font-semibold p-2">
              <InlineMath math="a > 0" />
            </h3>
            <p>
              Considérons la fonction <InlineMath math="f(x) = x^2 + 4x + 5" />.
            </p>
            <BlockMath
              math={String.raw`
                \begin{aligned}
                  \alpha &= -\frac{4}{2(1)} = -2, \\
                  \Delta &= 4^2 - 4(1)(5) = -4, \\
                  \beta &= -\frac{\Delta}{4a} = -\frac{-4}{4} = 1.
                \end{aligned}
              `}
            />
            <p>
              Le sommet est donc <InlineMath math="S(-2, 1)" />. Comme{" "}
              <InlineMath math="a > 0" />, la parabole est tournée vers le haut
              :
            </p>
            <img
              src={table2}
              className="img"
              alt="Tableau de variation pour a > 0"
            />
          </li>
        </ol>
      </section>
    </div>
  );
}
