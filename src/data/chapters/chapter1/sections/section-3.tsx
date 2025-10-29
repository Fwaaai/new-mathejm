import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";  
import graph4 from "/src/assets/img/graphs/graph4.png";

export default function Section3 (): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>
        <ol className="list list-1" type="1">
          <li>
            <h3 className="text-xl font-semibold p-2">Graphiquement</h3>
            <p>Observons ce graphique.</p>
            <img src={graph4} className="img" alt="" />
            <p>L'axe de symétrie <i>semble</i> se trouver à <InlineMath math="x = -7" />.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold p-2">Par calcul à partir de la forme développée</h3>
            <p>On sait que l'axe de symétrie passe par la même abscisse que le sommet.</p>
            <p>
              Si l'on connaît la forme développée <InlineMath math="f(x) = ax^2 + bx + c" />, l'abscisse du sommet est <InlineMath math="x_S = \alpha = \frac{-b}{2a}" />.
            </p>
            <p>
              Par exemple, si l'on a <InlineMath math="f(x) = -x^2 + 4x + 5" /> :
            </p>
            <BlockMath
              math={String.raw`\alpha = -\frac{4}{2(-1)} = \frac{4}{2} = 2`}
            />
            <p>L'axe de symétrie est donc la droite <InlineMath math="x = 2" />.</p>
          </li>
        </ol>
      </section>
    </div>
  );
} 