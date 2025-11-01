import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Section14(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>

        <ol className="list list-1" type="1">
          <li>
            <h3 className="text-xl font-semibold p-2">Principe</h3>
            {/* TODO: Ajouter un schéma de la tangente passant par l’origine */}
            <p>
              La tangente à la courbe de <InlineMath math="y=f(x)" /> en
              <InlineMath math="x=a" /> est donnée par
            </p>
            <BlockMath math={String.raw`\displaystyle y = f(a) + f'(a)\,(x-a)`} />
            <p>
              Elle passe par l’origine si le point <InlineMath math="(0,0)" />
              vérifie cette équation:
            </p>
            <BlockMath
              math={String.raw`\displaystyle 0 = f(a) + f'(a)\,(0-a) \iff -a\,f'(a) + f(a) = 0`}
            />
            <p>
              On doit donc résoudre, en inconnue <InlineMath math="a" />,
              l’équation <InlineMath math="-a\,f'(a)+f(a)=0" />.
            </p>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Procédure type</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>
                  Calculer <InlineMath math="f'(x)" /> puis former l’équation en
                  <InlineMath math="a" /> :
                  <InlineMath math="-a\,f'(a)+f(a)=0" />.
                </p>
              </li>
              <li>
                <p>
                  Résoudre cette équation (algèbre, factorisation, éventuelle
                  discussion du domaine).
                </p>
              </li>
              <li>
                <p>
                  Donner, pour chaque solution <InlineMath math="a" />, l’équation
                  de la tangente et vérifier qu’elle passe bien par l’origine.
                </p>
              </li>
            </ol>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Exemple 1 — <InlineMath math="f(x)=x^2+1"></InlineMath></h3>
            <p>
              <InlineMath math="f'(x)=2x" />. L’équation devient
              <InlineMath math="-a\cdot 2a + (a^2+1)=0" /> soit
              <InlineMath math="1-a^2=0" />.
            </p>
            <BlockMath math={String.raw`\displaystyle a\in\{-1,\;1\}`} />
            <p>
              Tangentes : en <InlineMath math="a=1" />,
              <InlineMath math="y=f(1)+f'(1)(x-1)=2+2(x-1)=2x" /> (passe par 0) ;
              en <InlineMath math="a=-1" />,
              <InlineMath math="y=f(-1)+f'(-1)(x+1)=2-2(x+1)=-2x" /> (passe par 0).
            </p>
            <p>
              On peut conclure que la tangente à la courbe <InlineMath math="f" /> passe par l'origine pour les points <InlineMath math="1" /> et <InlineMath math="-1" />.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold p-2">Exemple 2 — <InlineMath math="f(x)=x^3-x"></InlineMath></h3>
            <p>
              <InlineMath math="f'(x)=3x^2-1" />. Condition :
              <InlineMath math="-a(3a^2-1) + (a^3-a) = 0" /> qui se réduit à
              <InlineMath math="-2a^3=0" />.
            </p>
            <BlockMath math={String.raw`\displaystyle a=0`} />
            <p>
              Tangente : <InlineMath math="y=0+(-1)(x-0)=-x" /> (passe par 0).
            </p>

          </li>
        </ol>
      </section>
    </div>
  );
}

