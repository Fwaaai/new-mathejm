import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Section4(): React.JSX.Element {
return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>

        <ol className="list list-1" type="1">
          <li>
            <h3 className="text-xl font-semibold p-2">Principe de calcul</h3>
            <p>
              Pour tester la non-dérivabilité de <InlineMath math="f" /> en
              <InlineMath math="\,a" />, on étudie la limite du taux
              d'accroissement :
            </p>
            <BlockMath math={String.raw`\displaystyle f'(a)=\lim_{h\to 0} \frac{f(a+h)-f(a)}{h}`} />
            <p>
              <b>Conclusion</b> : <InlineMath math="f" /> n'est pasdérivable en
              <InlineMath math="\,a" /> si et seulement si <InlineMath math="f'(a)" /> est indéfinie.
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
                  Comparer : si l'une des conditions ne sont pas remplies, conclure que
                  <InlineMath math="f" /> n'est pas dérivable en
                  <InlineMath math="a" />.
                </p>
              </li>
            </ol>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Exemple 1 - <InlineMath math="f(x)=\frac1x" /></h3>
            <p>
              Étudier la dérivabilité de <InlineMath math="f(x)=\frac1x" /> en
              <InlineMath math="a=0" />.
            </p>
            <p>
              On remarque que <InlineMath math="f(x)=\frac1x" /> n'est pas continue en a=0:
              <p>
                <BlockMath math={String.raw`\displaystyle f(a)=f(0)=\frac1{0}`} />  
              </p>
            </p>
            <p>
              D'après la procédure, <InlineMath math="f" /> n'est pas dérivable en <InlineMath math="a=0" />.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold p-2">Exemple 2 - <InlineMath math="f(x)=\sqrt[3]{x}" /></h3>
            <p>
              Étudier la dérivabilité de <InlineMath math="f(x)=\sqrt[3]{x}" /> en
              <InlineMath math="a=0" />.
            </p>

              (<InlineMath math="\sqrt[x]a = a^{1/x}" /> pour <InlineMath math="x\neq 0" /> et <InlineMath math="a > 0" />)
            <BlockMath
              math={String.raw`\begin{aligned}
                \frac{f(0+h)-f(0)}{h}
                  &= \frac{\sqrt[3]{0+h}-\sqrt[3]{0}}{h} \\
                  &= \frac{{h}^{1/3}}{h} \\
                  &= h^{1/3} \cdot h^{-1} \\
                  &= h^{-2/3} \\
                  &= \frac{1}{h^{2/3}}  \\ 
                \implies f'(0) &= \lim_{h\to 0} (\frac{1}{h^{2/3}}) = +\infty
              \end{aligned}`}
            />
            <p>
              La limite tend vers l'infini, donc <InlineMath math="f" /> n'est pas dérivable en <InlineMath math="a=0" />.
            </p>
          </li>
        </ol>
      </section>
    </div>
  );
}

