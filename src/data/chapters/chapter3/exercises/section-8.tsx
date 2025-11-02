import { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';

export default function Section8Exercises() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(h => !h);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices — Probabilités totales</h2>
        <p className="m-4">
          Exercices basés sur la formule des probabilités totales pour une partition
          <InlineMath math={String.raw`\,(B_i)_{i=1..n}`} /> de l’univers :
          <BlockMath math={String.raw`\displaystyle P(A)=\sum_{i=1}^n P(B_i)\,P(A\mid B_i)`} />
        </p>

        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 1</h3>
            <p>
              Soit une partition <InlineMath math={String.raw`(B_1,B_2)`} /> avec
              <InlineMath math={String.raw`P(B_1)=0{,}6`} />, <InlineMath math={String.raw`P(B_2)=0{,}4`} />.
              On connaît <InlineMath math={String.raw`P(A\mid B_1)=0{,}3`} /> et <InlineMath math={String.raw`P(A\mid B_2)=0{,}5`} />.
              Calculez <InlineMath math={String.raw`P(A)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 2</h3>
            <p>
              Trois scénarios disjoints <InlineMath math={String.raw`B_1,B_2,B_3`} /> forment une partition avec
              <InlineMath math={String.raw`P(B_1)=0{,}2`} />, <InlineMath math={String.raw`P(B_2)=0{,}5`} />, <InlineMath math={String.raw`P(B_3)=0{,}3`} />.
              De plus <InlineMath math={String.raw`P(A\mid B_1)=0{,}1`} />, <InlineMath math={String.raw`P(A\mid B_2)=0{,}4`} />,
              <InlineMath math={String.raw`P(A\mid B_3)=0{,}6`} />. Calculez <InlineMath math={String.raw`P(A)`} />.
            </p>
            {/* TODO: Tableau 1×3 pour résumer (Bi ; P(Bi) ; P(A|Bi)) avec ligne de calcul P(A). */}
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 3</h3>
            <p>
              On donne une partition <InlineMath math={String.raw`(B_1,B_2)`} />. On observe
              <InlineMath math={String.raw`P(B_1)=0{,}55`} />, <InlineMath math={String.raw`P(A\mid B_1)=0{,}20`} /> et
              <InlineMath math={String.raw`P(A)=0{,}29`} />. Déterminez <InlineMath math={String.raw`P(A\mid B_2)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 4</h3>
            <p>
              Une population est partitionnée par un test: <InlineMath math={String.raw`B_1:`} /> « positif »,
              <InlineMath math={String.raw`B_2:`} /> « négatif ». On sait
              <InlineMath math={String.raw`P(B_1)=0{,}3`} />, <InlineMath math={String.raw`P(B_2)=0{,}7`} />.
              L’événement <InlineMath math={String.raw`A`} /> se produit avec
              <InlineMath math={String.raw`P(A\mid B_1)=0{,}8`} /> et <InlineMath math={String.raw`P(A\mid B_2)=0{,}1`} />.
              Calculez <InlineMath math={String.raw`P(A)`} />.
            </p>
            {/* TODO: Arbre pondéré test (B1/B2) puis A/\overline{A}. Afficher les produits de chemin vers A. */}
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 5</h3>
            <p>
              Vérifiez si <InlineMath math={String.raw`(B_1,B_2,B_3)`} /> est bien une partition lorsque
              <InlineMath math={String.raw`P(B_1)=0{,}25`} />, <InlineMath math={String.raw`P(B_2)=0{,}45`} />,
              <InlineMath math={String.raw`P(B_3)=0{,}35`} />. Si ce n’est pas cohérent, proposez une correction minimale et
              calculez <InlineMath math={String.raw`P(A)`} /> pour <InlineMath math={String.raw`P(A\mid B_1)=0{,}2`} />, <InlineMath math={String.raw`P(A\mid B_2)=0{,}4`} />,
              <InlineMath math={String.raw`P(A\mid B_3)=0{,}5`} /> en utilisant la partition corrigée.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 6</h3>
            <p>
              On regroupe des issues en deux blocs <InlineMath math={String.raw`B`} /> et <InlineMath math={String.raw`C`} /> formant une partition.
              On sait <InlineMath math={String.raw`P(B)=0{,}62`} />, <InlineMath math={String.raw`P(A\mid B)=0{,}35`} />,
              <InlineMath math={String.raw`P(A\mid C)=0{,}18`} />. Calculez <InlineMath math={String.raw`P(A)`} /> puis
              <InlineMath math={String.raw`P(\overline{A})`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 7</h3>
            <p>
              Complétez le tableau de probabilités et appliquez la formule des probabilités totales.
            </p>
              <BlockMath math={String.raw`\begin{array}{c|c|c|c}
 & B_1 & B_2 & B_3 \\ \hline
A & P(A \cap B_1)=0.1\cdot0.2 & P(A \cap B_2)=0.4\cdot0.5 & P(A \cap B_3)=0.7\cdot0.3 \\ \hline
\overline{A} & P(\overline{A} \cap B_1) & P(\overline{A} \cap B_2) & P(\overline{A} \cap B_3)
\end{array}
`} />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 8</h3>
            <p>
              Trois ateliers <InlineMath math={String.raw`B_1,B_2,B_3`} /> produisent respectivement 20%, 30% et 50%.
              La probabilité qu’un objet soit conforme vaut 0,9 ; 0,8 ; 0,95 selon l’atelier.
              Calculez la probabilité totale qu’un objet soit conforme.
            </p>
            {/* TODO: Schéma 3 branches B1(0,2)/B2(0,3)/B3(0,5) puis vers Conforme/Non conforme avec 0,9/0,1 ; 0,8/0,2 ; 0,95/0,05. */}
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 9</h3>
            <p>
              On a une partition <InlineMath math={String.raw`(B_1,B_2)`} />. Sachant
              <InlineMath math={String.raw`P(A\mid B_1)=p_1`} />, <InlineMath math={String.raw`P(A\mid B_2)=p_2`} /> et
              <InlineMath math={String.raw`P(B_1)=\alpha`} /> (d’où <InlineMath math={String.raw`P(B_2)=1-\alpha`} />),
              exprimez <InlineMath math={String.raw`P(A)`} /> en fonction de <InlineMath math={String.raw`p_1,p_2,\alpha`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 10</h3>
            <p>
              Une classe est divisée en trois groupes <InlineMath math={String.raw`B_1,B_2,B_3`} /> de proportions
              0,25 ; 0,35 ; 0,40. La réussite à un quiz (<InlineMath math={String.raw`A`} />) vaut 0,7 ; 0,5 ; 0,6
              respectivement. Calculez <InlineMath math={String.raw`P(A)`} /> et <InlineMath math={String.raw`P(\overline{A})`} />.
            </p>
          </li>
        </ol>

        <div className="exercise__actions">
          <button className="prim-btn px-5 py-2.5 m-7" type="button" onClick={toggleHidden}>
            {hidden ? "Afficher" : "Masquer"} les réponses
          </button>
        </div>

        <div className="answers" hidden={hidden}>
          <p>
            On applique systématiquement <InlineMath math={String.raw`P(A)=\sum_i P(B_i)\,P(A\mid B_i)`} /> et on vérifie
            que <InlineMath math={String.raw`\sum_i P(B_i)=1`} />.
          </p>
          <ol className="answer-list">
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 1</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A)=0{,}6\times0{,}3+0{,}4\times0{,}5=0{,}18+0{,}20=0{,}38`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 2</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A)=0{,}2\times0{,}1+0{,}5\times0{,}4+0{,}3\times0{,}6=0{,}02+0{,}20+0{,}18=0{,}40`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 3</summary>
                <div className="answer__content">
                  <p>Par total des probabilités :</p>
                  <BlockMath math={String.raw`\displaystyle 0{,}29=0{,}55\times0{,}20+0{,}45\times P(A\mid B_2)`} />
                  <BlockMath math={String.raw`\displaystyle P(A\mid B_2)=\frac{0{,}29-0{,}11}{0{,}45}=\frac{0{,}18}{0{,}45}=0{,}4`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 4</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A)=0{,}3\times0{,}8+0{,}7\times0{,}1=0{,}24+0{,}07=0{,}31`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 5</summary>
                <div className="answer__content">
                  <p>Somme des parts proposée : 0,25+0,45+0,35=1,05 &gt; 1 (non cohérent). Correction minimale :
                    normaliser en divisant par 1,05, ou proposer 0,25 ; 0,40 ; 0,35.</p>
                  <p>Avec 0,25 ; 0,40 ; 0,35 :</p>
                  <BlockMath math={String.raw`\displaystyle P(A)=0{,}25\times0{,}2+0{,}40\times0{,}4+0{,}35\times0{,}5=0{,}05+0{,}16+0{,}175=0{,}385`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 6</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A)=0{,}62\times0{,}35+0{,}38\times0{,}18=0{,}217+0{,}0684=0{,}2854`} />
                  <BlockMath math={String.raw`\displaystyle P(\overline{A})=1-P(A)=1-0{,}2854=0{,}7146`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 7</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A)=0{,}2\times0{,}1+0{,}5\times0{,}4+0{,}3\times0{,}7=0{,}02+0{,}20+0{,}21=0{,}43`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 8</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(\text{conforme})=0{,}2\times0{,}9+0{,}3\times0{,}8+0{,}5\times0{,}95=0{,}18+0{,}24+0{,}475=0{,}895`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 9</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A)=\alpha\,p_1+(1-\alpha)\,p_2`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 10</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A)=0{,}25\times0{,}7+0{,}35\times0{,}5+0{,}40\times0{,}6=0{,}175+0{,}175+0{,}24=0{,}59`} />
                  <BlockMath math={String.raw`\displaystyle P(\overline{A})=1-0{,}59=0{,}41`} />
                </div>
              </details>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

