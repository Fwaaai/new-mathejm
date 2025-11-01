import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Section3(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>

        <ol className="list list-1" type="1">
          <li>
            <h3 className="text-xl font-semibold p-2">Principe de calcul</h3>
            <p>
              Pour tester la dérivabilité de <InlineMath math="f" /> en
              <InlineMath math="\,a" />, on étudie la limite du taux
              d'accroissement :
            </p>
            <BlockMath math={String.raw`\displaystyle f'(a)=\lim_{h\to 0} \frac{f(a+h)-f(a)}{h}`} />
            <p>
              <b>Conclusion</b> : <InlineMath math="f" /> est dérivable en
              <InlineMath math="\,a" /> si et seulement si <InlineMath math="f'(a)" /> est définie.
            </p>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Procédure</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>
                  Vérifier d'abord la continuité en <InlineMath math="a" />. Si
                  <InlineMath math="f" /> n'est pas continue en
                  <InlineMath math="a" />, elle n'est pas dérivable en
                  <InlineMath math="a" />.
                </p>
              </li>
              <li>
                <p>
                  Calculer <InlineMath math="f'(a)" /> en utilisant la définition formelle de la derivée. 
                </p>
              </li>
              <li>
                <p>
                  Comparer : s'ils coïncident et sont finis, conclure que
                  <InlineMath math="f" /> est dérivable en
                  <InlineMath math="a" />.
                </p>
              </li>
            </ol>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Exemple</h3>
            <p>
              Étudier la dérivabilité de <InlineMath math="f(x)=x^2" /> en
              <InlineMath math="a=2" />.
            </p>
            <BlockMath
              math={String.raw`\begin{aligned}
                \frac{f(2+h)-f(2)}{h}
                  &= \frac{(2+h)^2-2^2}{h} \\
                  &= \frac{2^2+2(2)h+h^2-2^2}{h} \\
                  &= 2(2) + h \\
                \implies f'(2) &= \lim_{h\to 0} (2(2)+h) = 4.
              \end{aligned}`}
            />
            <p>
              La limite existe pour <InlineMath math="a=2" /> et vaut
              <InlineMath math="4" />.
            </p>
          </li>
        </ol>
      </section>
    </div>
  );
}

