import React from "react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import table1 from "/src/assets/img/tables/table1.png";
import table2 from "/src/assets/img/tables/table2.png";

export default function Section4(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>
        <ol className="list">
          <li>
            <h3 className="text-xl font-semibold p-2">
              <InlineMath math="a < 0" />
            </h3>
            <p>
              Considérons la fonction{" "}
              <InlineMath math="f(x) = -(x - 2)^2 + 9" />.
            </p>
            <p>
              On lit directement <InlineMath math="\alpha = 2" /> et{" "}
              <InlineMath math="\beta = 9" /> : le sommet est donc{" "}
              <InlineMath math="S(2, 9)" />.
            </p>
            <p>
              Comme <InlineMath math="a < 0" />, la courbe est ouverte vers le
              bas :
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
              Considérons la fonction <InlineMath math="f(x) = (x + 2)^2 + 1" />
              .
            </p>
            <p>
              On lit <InlineMath math="\alpha = -2" /> et{" "}
              <InlineMath math="\beta = 1" /> : le sommet est donc{" "}
              <InlineMath math="S(-2, 1)" />.
            </p>
            <p>
              Comme <InlineMath math="a > 0" />, la parabole est ouverte vers le
              haut :
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
