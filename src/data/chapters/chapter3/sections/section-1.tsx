import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import table25 from "/src/assets/img/tables/table25.png";
import diagram1 from '/src/assets/img/diagrams/diagram1.png';
import diagram2 from '/src/assets/img/diagrams/diagram2.png';

export default function Section1(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>

        <ol className="list list-1" type="1">
          <li>
            <h3 className="text-xl font-semibold p-2">Définition</h3>
            <p>
              La probabilité conditionnelle de <InlineMath math="A" /> sachant
              <InlineMath math={String.raw`\,B`} /> (avec{" "}
              <InlineMath math={String.raw`P(B) > 0`} />) est définie par :
            </p>
            <BlockMath
              math={String.raw`\displaystyle P(A\mid B) = \frac{P(A \cap B)}{P(B)}`}
            />
            <p>
              Lecture : « sous l'hypothèse <InlineMath math="B" />, la probabilité
              que <InlineMath math="A" /> se produise ».
            </p>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Interprétations utiles</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>
                  Sous-ensemble de <InlineMath math="B" /> : on restreint
                  l'univers à <InlineMath math="B" /> puis on mesure la part de{" "}
                  <InlineMath math={String.raw`A\cap B`} /> dans{" "}
                  <InlineMath math="B" />.
                </p>
              </li>
              <li>
                <p>Règle du produit (équivalente) :</p>
                <BlockMath
                  math={String.raw`\displaystyle P(A\cap B) = P(B)\,P(A\mid B) = P(A)\,P(B\mid A)`}
                />
              </li>
              <li>
                <p>
                  Indépendance (à venir) :{" "}
                  <InlineMath
                    math={String.raw`\,A \text{ et } B \text{ indépendants } \iff P(A\mid B)=P(A)`}
                  />
                  .
                </p>
              </li>
            </ol>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Méthodes de calcul</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>
                  À partir d'un tableau (double entrée) : lire{" "}
                  <InlineMath math={String.raw`P(A\cap B)`} /> et{" "}
                  <InlineMath math="P(B)" /> puis appliquer la définition.
                </p>
                <img src={table25} className="img" alt="tableau" />
              </li>
              <li>
                <p>
                  À partir d'un diagramme de Venn : estimer les aires de{" "}
                  <InlineMath math={String.raw`A\cap B`} /> et de{" "}
                  <InlineMath math="B" />.
                </p>
                <img src={diagram1} className="img" alt="diagramme" />  
              </li>
              <li>
                <p>
                  Avec un arbre pondéré : multiplier les probabilités le long des
                  branches pour obtenir <InlineMath math={String.raw`P(A\cap B)`} /> puis
                  normaliser par <InlineMath math="P(B)" />.
                </p>
                <img src={diagram2} className="img" alt="diagramme" />
              </li>
            </ol>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Exemples</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>
                  Dans une classe, 60% des élèves pratiquent un sport
                  (<InlineMath math="S" />), 40% apprennent un instrument
                  (<InlineMath math="I" />) et 25% font les deux.
                </p>
                <p>
                  Calculer <InlineMath math={String.raw`P(S\mid I)`} /> et{" "}
                  <InlineMath math={String.raw`P(I\mid S)`} />.
                </p>
                <BlockMath
                  math={String.raw`\begin{aligned}
                    &P(S\mid I) = \frac{P(S\cap I)}{P(I)} = \frac{0{,}25}{0{,}40} = 0{,}625 \\
                    &P(I\mid S) = \frac{P(S\cap I)}{P(S)} = \frac{0{,}25}{0{,}60} \approx 0{,}4167
                  \end{aligned}`}
                />
                <p>
                  Interprétation : parmi les élèves qui apprennent un instrument,
                  62,5% font aussi du sport.
                </p>
              </li>
              <li>
                <p>
                  Une urne contient 3 boules rouges (<InlineMath math="R" />) et
                  2 boules bleues (<InlineMath math="B" />). On tire une boule au
                  hasard. Soit <InlineMath math="A" /> l'événement « tirer une
                  rouge » et <InlineMath math="C" /> « la boule tirée n'est pas
                  replacée puis on tire à nouveau une rouge ».
                </p>
                <p>
                  Alors <InlineMath math={String.raw`P(A)=\tfrac{3}{5}`} /> et, après avoir observé{" "}
                  <InlineMath math="A" />, on a{" "}
                  <InlineMath math={String.raw`P(A\mid A) = \tfrac{\tfrac{3}{10}}{\tfrac35} = \tfrac{1}{2}`} /> pour le
                  second tir.
                </p>
                <p>
                  Ici la condition modifie l'univers (tir sans remise),
                  d'où l'intérêt de la notation conditionnelle.
                </p>
              </li>
            </ol>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Points d'attention</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>
                  La quantité <InlineMath math={String.raw`P(A\mid B)`} /> n'est
                  définie que si <InlineMath math={String.raw`P(B) > 0`} />.
                </p>
              </li>
              <li>
                <p>
                  Attention à l'ordre : en général{" "}
                  <InlineMath math={String.raw`P(A\mid B) \neq P(B\mid A)`} />.
                </p>
              </li>
              <li>
                <p>
                  <InlineMath math={String.raw`A^c = \overline{A}`} />
                </p>
              </li>
            </ol>
          </li>
        </ol>
      </section>
    </div>
  );
}