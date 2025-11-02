import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Section9(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>

        <ol className="list list-1" type="1">
          <li>
            <h3 className="text-xl font-semibold p-2">Rappel et objectif</h3>
            <p>
              La formule des probabilités totales permet de calculer
              {" "}
              <InlineMath math={String.raw`P(A)`} /> en décomposant selon une
              partition <InlineMath math={String.raw`(B_i)`} /> de l’univers :
            </p>
            <BlockMath math={String.raw`\displaystyle P(A)=\sum_{i} P(B_i)\,P(A\mid B_i)`} />
            <p>
              On choisit des cas <InlineMath math={String.raw`B_i`} /> exclusifs et
              exhaustifs, puis on somme les contributions pondérées.
            </p>
            <div className="img"></div>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Méthode pas à pas</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>Identifier une partition pertinente <InlineMath math={String.raw`(B_i)`} />.</p>
              </li>
              <li>
                <p>Relever <InlineMath math={String.raw`P(B_i)`} /> et <InlineMath math={String.raw`P(A\mid B_i)`} />.</p>
              </li>
              <li>
                <p>Appliquer <InlineMath math={String.raw`P(A)=\sum_i P(B_i)P(A\mid B_i)`} />.</p>
              </li>
              <li>
                <p>Vérifier la cohérence (bornes et unités, somme des poids à 1).</p>
              </li>
            </ol>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Exemple 1 — Fournisseurs</h3>
            <p>
              Une entreprise s’approvisionne à 3 sources :
              {" "}
              <InlineMath math={String.raw`P(F_1)=0{,}5`} />, <InlineMath math={String.raw`P(F_2)=0{,}3`} />, <InlineMath math={String.raw`P(F_3)=0{,}2`} />.
            </p>
            <p>
              Taux de défaut :
              {" "}
              <InlineMath math={String.raw`P(D\mid F_1)=0{,}01`} />,
              {" "}
              <InlineMath math={String.raw`P(D\mid F_2)=0{,}03`} />,
              {" "}
              <InlineMath math={String.raw`P(D\mid F_3)=0{,}05`} />.
            </p>
            <p>Probabilité qu’un article soit défectueux :</p>
            <BlockMath
              math={String.raw`\begin{aligned}
              P(D)&=\sum_{i=1}^3 P(F_i)P(D\mid F_i)\\
                  &=0{,}5\times0{,}01+0{,}3\times0{,}03+0{,}2\times0{,}05\\
                  &=0{,}005+0{,}009+0{,}010=0{,}024.
              \end{aligned}`}
            />
            <p>
              Si l’on observe un défaut, la probabilité qu’il vienne de
              {" "}
              <InlineMath math={String.raw`F_3`} /> vaut
              {" "}
              <InlineMath math={String.raw`\dfrac{0{,}2\times0{,}05}{0{,}024}\approx0{,}4167`} />.
            </p>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Exemple 2 — Météo et retards</h3>
            <p>
              <InlineMath math={String.raw`B_1=\text{Soleil}`} />
              {" "}
              (<InlineMath math={String.raw`0{,}6`} />),
              {" "}
              <InlineMath math={String.raw`B_2=\text{Pluie}`} />
              {" "}
              (<InlineMath math={String.raw`0{,}3`} />),
              {" "}
              <InlineMath math={String.raw`B_3=\text{Neige}`} />
              {" "}
              (<InlineMath math={String.raw`0{,}1`} />).
            </p>
            <p>
              Probabilité de retard :
              {" "}
              <InlineMath math={String.raw`P(R\mid B_1)=0{,}05`} />, <InlineMath math={String.raw`P(R\mid B_2)=0{,}15`} />, <InlineMath math={String.raw`P(R\mid B_3)=0{,}4`} />.
            </p>
            <BlockMath
              math={String.raw`\begin{aligned}
              P(R)&=0{,}6\times0{,}05+0{,}3\times0{,}15+0{,}1\times0{,}4\\
                  &=0{,}03+0{,}045+0{,}04=0{,}115.
              \end{aligned}`}
            />
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Contrôles et pièges</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>Vérifier que les <InlineMath math={String.raw`B_i`} /> sont disjoints et couvrent tout.</p>
              </li>
              <li>
                <p>
                  Les poids <InlineMath math={String.raw`\sum_i P(B_i)=1`} />.
                  Sinon, la partition est incorrecte.
                </p>
              </li>
              <li>
                <p>Ne pas mélanger <InlineMath math={String.raw`P(A)`} /> et <InlineMath math={String.raw`P(A\mid B_i)`} />.</p>
              </li>
              <li>
                <p>Comparer le résultat à des bornes plausibles (min/max des contributions).</p>
              </li>
            </ol>
          </li>
        </ol>
      </section>
    </div>
  );
}
