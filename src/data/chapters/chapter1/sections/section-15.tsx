import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Section4(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>
        <p>
          Le changement de variable est une technique qui consiste à remplacer
          une expression compliquée par une variable intermédiaire pour
          simplifier l’équation, la résoudre plus facilement, puis revenir à la
          variable d’origine.
        </p>

        <p>Par exemple :</p>
        <BlockMath math="x^4 - 5x^2 + 6 = 0" />

        <p>
          Cette équation n’est pas de degré 2 en <InlineMath math="x" />, mais
          on remarque que :
        </p>
        <BlockMath math="x^4 = (x^2)^2" />

        <p>
          On pose alors : <InlineMath math="X = x^2" />, ce qui donne :
        </p>
        <BlockMath math="X^2 - 5X + 6 = 0" />

        <p>On résout cette équation du second degré :</p>
        <BlockMath math="X_1 = 2, \quad X_2 = 3" />

        <p>
          On revient ensuite à la variable d’origine, en remplaçant{" "}
          <InlineMath math="X" /> par <InlineMath math="x^2" /> :
        </p>
        <BlockMath math="x^2 = 2 \quad \text{ou} \quad x^2 = 3" />

        <p>
          On résout enfin pour <InlineMath math="x" /> :
        </p>
        <BlockMath math="x = \pm \sqrt{2} \quad \text{ou} \quad x = \pm \sqrt{3}" />

        <p>Donc les solutions sont :</p>
        <BlockMath math="x_1 = \sqrt{2}, \quad x_2 = -\sqrt{2}, \quad x_3 = \sqrt{3}, \quad x_4 = -\sqrt{3}" />
      </section>
    </div>
  );
}
