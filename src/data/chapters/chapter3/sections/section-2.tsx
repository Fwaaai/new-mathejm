import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import table25 from "/src/assets/img/tables/table25.png";
import diagram1 from '/src/assets/img/diagrams/diagram1.png';

export default function Section2(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>

        <ol className="list list-1" type="1">
          <li>
            <h3 className="text-xl font-semibold p-2">Formule de base</h3>
            <p>
              Pour des événements <InlineMath math={String.raw`A`} /> et
              {" "}
              <InlineMath math={String.raw`B`} /> avec
              {" "}
              <InlineMath math={String.raw`P(B) > 0`} />, on a :
            </p>
            <BlockMath math={String.raw`\displaystyle P(A\mid B)=\frac{P(A\cap B)}{P(B)}`} />
            <p>
              Cette relation se réécrit suivant les besoins :
            </p>
            <BlockMath
              math={String.raw`\displaystyle P(A\cap B)=P(B)\,P(A\mid B)=P(A)\,P(B\mid A)`}
            />
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Interprétations</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>
                  Rapport d’aire (diagramme de Venn) :
                  {" "}
                  <InlineMath math={String.raw`P(A\mid B)=\dfrac{\text{aire}(A\cap B)}{\text{aire}(B)}`} />.
                </p>
                <img src={diagram1} alt="Diagramme de Venn" />
              </li>
              <li>
                <p>
                  Fréquences sur un échantillon filtré :
                  {" "}
                  <InlineMath math={String.raw`P(A\mid B)=\dfrac{\text{nombre cas A et B}}{\text{nombre cas B}}`} />.
                </p>
                <img src={table25} alt="Tableau" />
              </li>
            </ol>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Exemples guidés</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>
                  Parmi 200 personnes, 120 pratiquent un sport
                  {" "}
                  (<InlineMath math={String.raw`S`} />), 80 apprennent un instrument
                  {" "}
                  (<InlineMath math={String.raw`I`} />) et 50 font les deux.
                </p>
                <p>
                  Calculer
                  {" "}
                  <InlineMath math={String.raw`P(S\mid I)`} /> et
                  {" "}
                  <InlineMath math={String.raw`P(I\mid S)`} />.
                </p>
                <BlockMath
                  math={String.raw`\begin{aligned}
                  &P(S)=\tfrac{120}{200}=0{,}60,\quad P(I)=\tfrac{80}{200}=0{,}40,\\
                  &P(S\cap I)=\tfrac{50}{200}=0{,}25,\\[2pt]
                  &P(S\mid I)=\tfrac{0{,}25}{0{,}40}=0{,}625,\quad
                  P(I\mid S)=\tfrac{0{,}25}{0{,}60}\approx0{,}4167.
                  \end{aligned}`}
                />
              </li>
              <li>
                <p>
                  Urne: 3 rouges (<InlineMath math={String.raw`R`} />), 2 bleues
                  {" "}
                  (<InlineMath math={String.raw`B`} />). Tir sans remise.
                </p>
                <p>
                  Quelle est
                  {" "}
                  <InlineMath math={String.raw`P(R_2\mid R_1)`} /> ? (rouge au 2ᵉ
                  tir sachant rouge au 1ᵉʳ)
                </p>
                <BlockMath
                  math={String.raw`\displaystyle P(R_2\mid R_1)=\frac{P(R_1\cap R_2)}{P(R_1)}=
                  \frac{\tfrac{3}{5}\cdot\tfrac{2}{4}}{\tfrac{3}{5}}=\tfrac{1}{2}`}
                />
              </li>
            </ol>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Points d’attention</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>
                  Nécessite <InlineMath math={String.raw`P(B)>0`} />. Si
                  {" "}
                  <InlineMath math={String.raw`P(B)=0`} />, la quantité n’est pas
                  définie.
                </p>
              </li>
              <li>
                <p>
                  En général
                  {" "}
                  <InlineMath math={String.raw`P(A\mid B)\neq P(B\mid A)`} />.
                </p>
              </li>
            </ol>
          </li>
        </ol>
      </section>
    </div>
  );
}

