import { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';

export default function Section9Exercises() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(h => !h);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices — Décomposition par partition</h2>
        <p className="m-4">
          On applique uniquement la formule des probabilités totales pour une partition
          <InlineMath math={String.raw`\,(B_i)_{i}`} /> de l’univers :
          <BlockMath math={String.raw`\displaystyle P(A)=\sum_i P(B_i)\,P(A\mid B_i)`} />
        </p>

        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 1</h3>
            <p>
              Deux cas forment une partition : <InlineMath math={String.raw`B_1`} /> et <InlineMath math={String.raw`B_2`} />.
              On sait <InlineMath math={String.raw`P(B_1)=0{,}6`} />, <InlineMath math={String.raw`P(B_2)=0{,}4`} /> ;
              <InlineMath math={String.raw`P(A\mid B_1)=0{,}2`} />, <InlineMath math={String.raw`P(A\mid B_2)=0{,}5`} />.
              Calculez <InlineMath math={String.raw`P(A)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 2</h3>
            <p>
              Partition en trois scénarios <InlineMath math={String.raw`B_1,B_2,B_3`} /> avec
              <InlineMath math={String.raw`P(B_1)=0{,}3`} />, <InlineMath math={String.raw`P(B_2)=0{,}4`} />, <InlineMath math={String.raw`P(B_3)=0{,}3`} /> ;
              <InlineMath math={String.raw`P(A\mid B_1)=0{,}1`} />, <InlineMath math={String.raw`P(A\mid B_2)=0{,}25`} />, <InlineMath math={String.raw`P(A\mid B_3)=0{,}6`} />.
              Calculez <InlineMath math={String.raw`P(A)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 3</h3>
            <p>
              Fournisseurs <InlineMath math={String.raw`F_1,F_2,F_3`} /> : parts 0,5 ; 0,3 ; 0,2.
              Taux de défaut <InlineMath math={String.raw`P(D\mid F_i)`} /> : 0,01 ; 0,03 ; 0,05.
              Calculez <InlineMath math={String.raw`P(D)`} /> puis la probabilité qu’un défaut provienne de <InlineMath math={String.raw`F_3`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 4</h3>
            <p>
              Météo <InlineMath math={String.raw`B_1=\text{Soleil} (0{,}6)`} />, <InlineMath math={String.raw`B_2=\text{Pluie} (0{,}3)`} />,
              <InlineMath math={String.raw`B_3=\text{Neige} (0{,}1)`} /> ; retards <InlineMath math={String.raw`P(R\mid B_i)`} /> : 0,05 ; 0,15 ; 0,4.
              Calculez <InlineMath math={String.raw`P(R)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 5</h3>
            <p>
              Vérifiez la cohérence d’une partition proposée <InlineMath math={String.raw`(B_1,B_2,B_3)`} /> avec
              <InlineMath math={String.raw`P(B_1)=0{,}25`} />, <InlineMath math={String.raw`P(B_2)=0{,}50`} />, <InlineMath math={String.raw`P(B_3)=0{,}20`} />.
              Si nécessaire, corrigez pour obtenir une partition (somme 1) puis calculez
              <InlineMath math={String.raw`P(A)`} /> avec <InlineMath math={String.raw`P(A\mid B_1)=0{,}3`} />,
              <InlineMath math={String.raw`P(A\mid B_2)=0{,}4`} />, <InlineMath math={String.raw`P(A\mid B_3)=0{,}5`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 6</h3>
            <p>
              On observe <InlineMath math={String.raw`P(A)=0{,}29`} /> avec partition <InlineMath math={String.raw`(B_1,B_2)`} /> telle que
              <InlineMath math={String.raw`P(B_1)=0{,}55`} />, <InlineMath math={String.raw`P(A\mid B_1)=0{,}20`} />.
              Déterminez <InlineMath math={String.raw`P(A\mid B_2)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 7</h3>
            <p>
              Deux classes <InlineMath math={String.raw`B_1,B_2`} /> (40% ; 60%) ont des taux de réussite 0,7 et 0,5.
              Calculez la probabilité totale de réussite <InlineMath math={String.raw`P(A)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 8</h3>
            <p>
              On a <InlineMath math={String.raw`P(B_1)=\alpha`} />, <InlineMath math={String.raw`P(B_2)=1-\alpha`} /> et
              <InlineMath math={String.raw`P(A\mid B_1)=p_1`} />, <InlineMath math={String.raw`P(A\mid B_2)=p_2`} />.
              Exprimez <InlineMath math={String.raw`P(A)`} /> en fonction de <InlineMath math={String.raw`\alpha,p_1,p_2`} /> et commentez des bornes plausibles.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 9</h3>
            <p>
              Trois ateliers <InlineMath math={String.raw`B_1,B_2,B_3`} /> produisent 20%, 30%, 50% de la production.
              Taux de conformité : 0,9 ; 0,8 ; 0,95. Calculez <InlineMath math={String.raw`P(\text{conforme})`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 10</h3>
            <p>
              Dans un dépistage, population partitionnée en « à risque » (<InlineMath math={String.raw`B_1`} /> : 30%) et
              « non à risque » (<InlineMath math={String.raw`B_2`} /> : 70%). Positivité conditionnelle :
              <InlineMath math={String.raw`P(T^+\mid B_1)=0{,}12`} />, <InlineMath math={String.raw`P(T^+\mid B_2)=0{,}03`} />.
              Calculez <InlineMath math={String.raw`P(T^+)`} /> et, parmi les positifs, la part provenant du groupe à risque.
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
            On décompose <InlineMath math={String.raw`P(A)`} /> sur une partition et on vérifie que
            <InlineMath math={String.raw`\sum_i P(B_i)=1`} />.
          </p>
          <ol className="answer-list">
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 1</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A)=0{,}6\times0{,}2+0{,}4\times0{,}5=0{,}12+0{,}20=0{,}32`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 2</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A)=0{,}3\times0{,}1+0{,}4\times0{,}25+0{,}3\times0{,}6=0{,}03+0{,}10+0{,}18=0{,}31`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 3</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(D)=0{,}5\times0{,}01+0{,}3\times0{,}03+0{,}2\times0{,}05=0{,}024`} />
                  <p>Part de <InlineMath math={String.raw`F_3`} /> parmi les défectueux :</p>
                  <BlockMath math={String.raw`\displaystyle P(F_3\mid D)=\frac{0{,}2\times0{,}05}{0{,}024}=\frac{0{,}01}{0{,}024}\approx0{,}4167`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 4</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(R)=0{,}6\times0{,}05+0{,}3\times0{,}15+0{,}1\times0{,}4=0{,}115`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 5</summary>
                <div className="answer__content">
                  <p>Somme proposée = 0,25+0,50+0,20 = 0,95 (partition incomplète). Correction minimale : répartir 0,05 manquant.
                    Par exemple 0,25 ; 0,50 ; 0,25.</p>
                  <BlockMath math={String.raw`\displaystyle P(A)=0{,}25\times0{,}3+0{,}50\times0{,}4+0{,}25\times0{,}5=0{,}075+0{,}20+0{,}125=0{,}40`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 6</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle 0{,}29=0{,}55\times0{,}20+0{,}45\times x`} />
                  <BlockMath math={String.raw`\displaystyle x=\frac{0{,}29-0{,}11}{0{,}45}=\frac{0{,}18}{0{,}45}=0{,}4`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 7</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A)=0{,}4\times0{,}7+0{,}6\times0{,}5=0{,}28+0{,}30=0{,}58`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 8</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A)=\alpha\,p_1+(1-\alpha)\,p_2`} />
                  <p>Bornes plausibles : entre <InlineMath math={String.raw`\min(p_1,p_2)`} /> et
                    <InlineMath math={String.raw`\max(p_1,p_2)`} />.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 9</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(\text{conforme})=0{,}2\times0{,}9+0{,}3\times0{,}8+0{,}5\times0{,}95=0{,}895`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 10</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(T^+)=0{,}3\times0{,}12+0{,}7\times0{,}03=0{,}036+0{,}021=0{,}057`} />
                  <p>Parmi les positifs, part du groupe à risque :</p>
                  <BlockMath math={String.raw`\displaystyle P(B_1\mid T^+)=\frac{0{,}3\times0{,}12}{0{,}057}=\frac{0{,}036}{0{,}057)}\approx0{,}6316`} />
                </div>
              </details>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

