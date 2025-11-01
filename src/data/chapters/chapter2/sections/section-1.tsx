import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import table10 from "/src/assets/img/tables/table10.png";
import graph15 from "/src/assets/img/graphs/graph15.png";

export default function Section1(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>

        <ol className="list list-1" type="1">
          <li>
            <h3 className="text-xl font-semibold p-2">À partir d’un tableau</h3>
            <img src={table10} className="img" alt=" tables" />
            <p>
              On observe les valeurs de <InlineMath math="x" /> se rapprochant de
              <InlineMath math="\,a" /> par la gauche et par la droite, puis on
              regarde vers quelle valeur semblent tendre les valeurs de
              <InlineMath math="\,f(x)" />.
            </p>
            <p>
              Si les tendances à gauche et à droite coïncident vers un même
              nombre <InlineMath math="L" />, on écrit :
            </p>
            <BlockMath math={String.raw`\displaystyle \lim_{x\to a} f(x) = L`} />
            <p>Exemple:</p>
            <p>
              Lorsque <InlineMath math="x" /> vaut successivement 1,9; 1,99; 1,999
              et 2,1; 2,01; 2,001, on lit dans le tableau que
              <InlineMath math="\,f(x)" /> s’approche de 4 des deux côtés. On
              conclut donc que <InlineMath math="\lim_{x\to 2} f(x) = 4" />.
            </p>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">À partir d’un graphique</h3>
            <img src={graph15} className="img" alt="" />
            <p>
              On suit la courbe lorsque <InlineMath math="x" /> s’approche de
              <InlineMath math="\,a" /> par la gauche (limite à gauche) puis par
              la droite (limite à droite). Si les deux lectures s’accordent et
              valent <InlineMath math="L" />, alors
              <InlineMath math="\,\lim_{x\to a} f(x) = L" />.
            </p>
            <p>
              Si les lectures divergent (sauts) ou s’envolent vers
              <InlineMath math="\pm\infty" />, on conclut respectivement que la
              limite n’existe pas ou qu’elle est infinie.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold p-2">Points d’attention</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>
                  La valeur <InlineMath math="f(a)" /> n’intervient pas pour la
                  limite. On peut avoir <InlineMath math="f(a) \ne L" /> (trou ou
                  point isolé) tout en ayant
                  <InlineMath math="\,\lim_{x\to a} f(x) = L" />.
                </p>
              </li>
            </ol>
          </li>
        </ol>
      </section>
    </div>
  );
}

