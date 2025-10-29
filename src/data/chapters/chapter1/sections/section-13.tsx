import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Section4(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>
        <ol className="list">
          <li>
            <h3 className="text-xl font-semibold p-2">
              À partir d’un graphique
            </h3>
            <p>
              Si le graphique d’une fonction coupe l’axe des abscisses en deux
              points, on peut en déduire les racines de la fonction.
            </p>
            <p>
              Une fonction qui admet deux racines peut être écrite sous forme
              factorisée :
            </p>
            <BlockMath math="f(x) = a(x - r_1)(x - r_2)" />
            <p>
              Par exemple, si les racines sont <InlineMath math="r_1 = -1" /> et{" "}
              <InlineMath math="r_2 = 5" />, on peut écrire :
            </p>
            <BlockMath
              math={String.raw`
                \begin{aligned}
                  f(x) &= a(x - (-1))(x - 5) \\
                  f(x) &= a(x + 1)(x - 5)
                \end{aligned}
              `}
            />
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">À partir d’un calcul</h3>
            <p>
              On peut également justifier l’existence de la forme factorisée en
              résolvant l’équation <InlineMath math="f(x) = 0" />.
            </p>
            <p>Par exemple :</p>
            <BlockMath math="f(x) = -x^2 + 4x + 5" />
            <p>
              On résout <InlineMath math="f(x) = 0" /> et on trouve les racines{" "}
              <InlineMath math="r_1 = -1" /> et <InlineMath math="r_2 = 5" />.
            </p>
            <p>On peut alors écrire :</p>
            <BlockMath
              math={String.raw`
                \begin{aligned}
                  f(x) &= a(x - r_1)(x - r_2) \\
                  f(x) &= a(x + 1)(x - 5)
                \end{aligned}
              `}
            />
          </li>
        </ol>
      </section>
    </div>
  );
}
