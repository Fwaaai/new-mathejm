import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Section10(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>

        <ol className="list list-1" type="1">
          <li>
            <h3 className="text-xl font-semibold p-2">
              Rappels sur la tangente en x = a
            </h3>
            <p>
              Si <InlineMath math="f" /> est dérivable en
              <InlineMath math="\,a" />, l’équation de la tangente au point
              <InlineMath math="(a,f(a))" /> est
            </p>
            <BlockMath math={String.raw`\displaystyle y = f(a) + f'(a)\,(x-a)`} />
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">
              Intersections par le calcul
            </h3>
            <ol className="list list-a" type="a">
              <li>
                <p>
                  Avec l’axe des ordonnées (<InlineMath math="x=0" />) :
                </p>
                <BlockMath
                  math={String.raw`\displaystyle y_0 = f(a) + f'(a)\,(0-a) = f(a) - a\,f'(a)`}
                />
                <p>
                  Le point d’intersection est
                  <InlineMath math="\,(0,\; f(a)-a\,f'(a))" />.
                </p>
              </li>
              <li>
                <p>
                  Avec l’axe des abscisses (<InlineMath math="y=0" />) :
                </p>
                <BlockMath
                  math={String.raw`\displaystyle 0 = f(a) + f'(a)\,(x-a) \;\Rightarrow\; x = a - \dfrac{f(a)}{f'(a)}\quad (f'(a)\ne 0)`}
                />
                <p>
                  Le point d’intersection est
                  <InlineMath math="\,\Big(a-\tfrac{f(a)}{f'(a)},\;0\Big)" /> si
                  <InlineMath math="f'(a)\ne 0" />.
                </p>
              </li>
            </ol>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Lecture graphique</h3>
            {/* TODO: Ajouter un graphique avec la courbe, la tangente en x=a et ses intersections avec les axes */}
            <p>
              Tracer la tangente au point <InlineMath math="(a,f(a))" />, puis
              lire les interceptions avec les axes en prolongeant la droite
              jusqu’à <InlineMath math="x=0" /> et <InlineMath math="y=0" />.
            </p>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Exemple — <InlineMath math="f(x)=x^2" /> en <InlineMath math="x=1" /></h3>
            <p>
              <InlineMath math="f(1)=1" /> et <InlineMath math="f'(x)=2x" /> donc
              <InlineMath math="f'(1)=2" />. Tangente :
            </p>
            <BlockMath math={String.raw`\displaystyle y = 1 + 2(x-1) = 2x-1`} />
            <ol className="list list-a" type="a">
              <li>
                <p>
                  Axe des ordonnées <InlineMath math="(x=0)" /> :
                  <InlineMath math="\,y_0 = 1 - 1\cdot 2 = -1" />, point
                  <InlineMath math="(0,-1)" />.
                </p>
              </li>
              <li>
                <p>
                  Axe des abscisses <InlineMath math="(y=0)" /> :
                  <InlineMath math="\,0 = 2x-1 \Rightarrow x=\tfrac{1}{2}" />,
                  point <InlineMath math="(\tfrac{1}{2},0)" />.
                </p>
              </li>
            </ol>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Cas particuliers</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>
                  Si <InlineMath math="f'(a)=0" /> (tangente horizontale),
                  l’intersection avec l’axe des abscisses n’existe que si
                  <InlineMath math="f(a)=0" /> (alors la tangente est l’axe des
                  abscisses). L’intersection avec l’axe des ordonnées vaut
                  <InlineMath math="(0,\,f(a))" />.
                </p>
              </li>
              <li>
                <p>
                  En cas de tangente verticale (pente infinie), on écrit la
                  tangente <InlineMath math="x=a" /> et on lit directement
                  l’intersection avec l’axe des abscisses en
                  <InlineMath math="(a,0)" />. Il n’y a pas d’ordonnée
                  correspondante pour <InlineMath math="x=0" /> sauf si
                  <InlineMath math="a=0" />.
                </p>
              </li>
            </ol>
          </li>
        </ol>
      </section>
    </div>
  );
}

