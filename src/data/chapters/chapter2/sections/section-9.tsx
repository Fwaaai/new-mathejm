import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import graph22 from "/src/assets/img/graphs/graph22.png";

export default function Section9(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>

        <ol className="list list-1" type="1">
          <li>
            <h3 className="text-xl font-semibold p-2">Lecture graphique</h3>
            <img src={graph22} className="img" alt="graphique" />
            <p>
              Le nombre dérivé <InlineMath math="f'(a)" /> est le coefficient
              directeur de la tangente à la courbe de <InlineMath math="y=f(x)" />
              au point <InlineMath math="(a,f(a))" />.
            </p>
            <p>Lire la pente sur la tangente à l’aide de deux points :</p>
            <BlockMath
              math={String.raw`\displaystyle f'(a) \approx m = \frac{\Delta y}{\Delta x} = \frac{y_2-y_1}{x_2-x_1}`}
            />
            <p>
              Choisir des points suffisamment éloignés sur la tangente pour
              limiter l’erreur de lecture; vérifier le signe et l’ordre de
              grandeur.
            </p>
            <BlockMath
              math= "A = (1,1), B=(2,4)"
            />
            <BlockMath
              math={String.raw`\displaystyle m = \frac{4-1}{2-1} = \frac{3}{1} = 3`}
            />
            <p>On pourrait dire que le nombre dérivé de la fonction pour a=1 ou a=2 est environ 3.<br />
              (En réalité, ils sont 2 et 4 respectivement.)
            </p>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Par le calcul</h3>
            <p>Utiliser le taux d’accroissement:</p>
            <BlockMath
              math={String.raw`\displaystyle f'(a) = \lim_{h\to 0} \frac{f(a+h)-f(a)}{h}`}
            />
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Exemple</h3>
            <p>
              Soit <InlineMath math="f(x)=x^2" /> et
              <InlineMath math="\,a=1" />.
            </p>
            <ol className="list list-a" type="a">
              <li>
                <p>Calcul :</p>
                <BlockMath
                  math={String.raw`\begin{aligned}
                    \frac{f(1+h)-f(1)}{h} &= \frac{(1+h)^2 - 1}{h} \\
                    &= \frac{2h + h^2}{h} = 2 + h \\
                    \Rightarrow f'(1) &= \lim_{h\to 0} (2+h) = 2.
                  \end{aligned}`}
                />
              </li>
            </ol>
            <p>Le nombre dérivé de la fonction pour a=1 est 2.</p>
          </li>
        </ol>
      </section>
    </div>
  );
}
