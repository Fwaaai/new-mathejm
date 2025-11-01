import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Section8(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>

        <ol className="list list-1" type="1">
          <li>
            <h3 className="text-xl font-semibold p-2">Formule de base</h3>
            {/* TODO: Ajouter un graphique avec la tangente en x=a */}
            <p>
              Si <InlineMath math="f" /> est dérivable en
              <InlineMath math="\,a" />, l’équation de la tangente au point
              <InlineMath math="(a, f(a))" /> est :
            </p>
            <BlockMath math={String.raw`\displaystyle y = f(a) + f'(a)\,(x-a)`} />
            <p>
              Forme équivalente <InlineMath math="y=mx+p" /> avec
              <InlineMath math="\,m=f'(a)" /> et
              <InlineMath math="\,p=f(a)-f'(a)\,a" />.
            </p>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Procédure type</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>
                  Calculer <InlineMath math="f(a)" /> et le nombre dérivé
                  <InlineMath math="f'(a)" />.
                </p>
              </li>
              <li>
                <p>
                  Écrire <InlineMath math="y=f(a)+f'(a)(x-a)" /> puis, si besoin,
                  développer pour obtenir <InlineMath math="y=mx+p" />.
                </p>
              </li>
              <li>
                <p>
                  Vérifier que la droite passe par
                  <InlineMath math="(a,f(a))" /> et que sa pente vaut
                  <InlineMath math="f'(a)" />.
                </p>
              </li>
            </ol>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Exemple</h3>
            <p>
              Soit <InlineMath math="f(x)=x^3-3x+2" /> et
              <InlineMath math="\,a=2" />.
            </p>
            <BlockMath
              math={String.raw`\begin{aligned}
                f(2) &= 2^3-3\cdot 2+2 = 4,\\
                f'(x) &= 3x^2-3 \Rightarrow f'(2)=9.\\[2pt]
                \text{Tangente : } y &= f(2)+f'(2)(x-2)=4+9(x-2)=9x-14.
              \end{aligned}`}
            />
            <p>
              La tangente en 2 a pour équation <InlineMath math="y=9x-14" />.
            </p>
          </li>
        </ol>
      </section>
    </div>
  );
}
