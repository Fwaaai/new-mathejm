import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Section12(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>

        <ol className="list list-1" type="1">
          <li>
            <h3 className="text-xl font-semibold p-2">Principe</h3>
            <p>
              Deux tangentes sont parallèles si elles ont le même coefficient
              directeur. Pour la courbe <InlineMath math="y=f(x)" />:
            </p>
            <BlockMath math={String.raw`\displaystyle \text{Tangentes parallèles en } x \text{ et } a \iff f'(x) = f'(a)`} />
            <p>
              On résout donc l’équation <InlineMath math="f'(x)=f'(a)" /> en
              <InlineMath math="x" />. Si l’on cherche des points distincts de
              <InlineMath math="a" />, on exclut <InlineMath math="x=a" /> des
              solutions.
            </p>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Procédure type</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>
                  Calculer la dérivée <InlineMath math="f'(x)" /> et la valeur
                  <InlineMath math="f'(a)" />.
                </p>
              </li>
              <li>
                <p>
                  Résoudre l’équation <InlineMath math="f'(x)=f'(a)" /> en
                  respectant le domaine de <InlineMath math="f'" />.
                </p>
              </li>
              <li>
                <p>
                  Si demandé, écarter la solution triviale
                  <InlineMath math="x=a" /> pour ne garder que les autres points
                  d’abscisse parallèle.
                </p>
              </li>
            </ol>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Exemple 1 — polynôme</h3>
            <p>
              Soit <InlineMath math="f(x)=x^3-3x" /> et
              <InlineMath math="\,a=1" />. Alors
              <InlineMath math="f'(x)=3x^2-3" /> et
              <InlineMath math="f'(1)=0" />.
            </p>
            <p>Résoudre <InlineMath math="f'(x)=f'(1)" /> :</p>
            <BlockMath
              math={String.raw`\begin{aligned}
                3x^2-3 &= 0 \\
                x^2 &= 1 \\
                x &\in \{-1,\;1\}.
              \end{aligned}`}
            />
            <p>
              Les tangentes en <InlineMath math="x=-1" /> et en
              <InlineMath math="x=1" /> sont parallèles. Si l’on veut un point
              distinct de <InlineMath math="a=1" />, on retient
              <InlineMath math="x=-1" />.
            </p>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Remarques</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>
                  Si <InlineMath math="f'" /> est constante (fonction affine),
                  toutes les tangentes sont parallèles entre elles.
                </p>
              </li>
              <li>
                <p>
                  Si <InlineMath math="f'(a)=0" />, on recherche les zéros de
                  <InlineMath math="f'" /> pour trouver les tangentes
                  horizontales parallèles.
                </p>
              </li>
            </ol>
          </li>
        </ol>
      </section>
    </div>
  );
}

