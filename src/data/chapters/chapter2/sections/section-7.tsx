import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import graph21 from "/src/assets/img/graphs/graph21.png";

export default function Section7(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>

        <ol className="list list-1" type="1">
          <li>
            <h3 className="text-xl font-semibold p-2">Intuition de la tangente</h3>
            <img src={graph21} className="img" alt="graphique" /> 
            <p>
              La tangente à la courbe de <InlineMath math="y=f(x)" /> au point
              <InlineMath math="A" /> est la « droite
              la plus approchée » localement. On part de la sécante entre
              <InlineMath math="(a,f(a))" /> et <InlineMath math="(a+h, f(a+h))" />
              de pente
            </p>
            <BlockMath
              math={String.raw`\displaystyle m_h = \frac{f(a+h)-f(a)}{h}`}
            />
            <p>
              Quand <InlineMath math="h\to 0" />, la sécante tend vers la
              tangente si la limite existe et est finie. Sa pente est alors le
              nombre dérivé :
            </p>
            <BlockMath math={String.raw`\displaystyle f'(a)=\lim_{h\to 0}\,\frac{f(a+h)-f(a)}{h}`} />
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Conditions d'existence</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>
                  Si <InlineMath math="f" /> est dérivable en
                  <InlineMath math="\,a" />, la tangente existe et sa pente vaut
                  <InlineMath math="f'(a)" />.
                </p>
              </li>
              <li>
                <p>
                  Si la limite est infinie (pente qui « explose »), on parle de
                  tangente verticale et, au sens usuel, <InlineMath math="f" /> n’est
                  pas dérivable en <InlineMath math="a" />.
                </p>
              </li>
              <li>
                <p>
                  En présence d’un angle vif (ex. <InlineMath math="|x|" /> en 0),
                  il n’y a pas de tangente unique.
                </p>
              </li>
            </ol>
          </li>
        </ol>
      </section>
    </div>
  );
}

