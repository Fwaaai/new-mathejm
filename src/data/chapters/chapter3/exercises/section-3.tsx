import { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import diagram3 from "/src/assets/img/diagrams/diagram3.png";
import diagram4 from "/src/assets/img/diagrams/diagram4.png";

export default function Section3Exercises() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(h => !h);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices — Lecture sur Venn et cas typiques</h2>
        <p className="m-4">
          Ces exercices entraînent la lecture de <InlineMath math={String.raw`P(A\mid B)`} /> sur des diagrammes de Venn,
          et l’identification de cas particuliers : inclusion <InlineMath math={String.raw`A\subset B`} />, disjonction
          <InlineMath math={String.raw`A\cap B=\varnothing`} /> et indépendance.
        </p>

        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 1</h3>
            <p>
              Sur un diagramme de Venn, on lit : <InlineMath math={String.raw`P(A\cap B)=0{,}18`} />,
              <InlineMath math={String.raw`P(A\setminus B)=0{,}12`} />, <InlineMath math={String.raw`P(B\setminus A)=0{,}20`} />.
              Calculez <InlineMath math={String.raw`P(A\mid B)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 2</h3>
            <p>
              Cas d’inclusion : supposons <InlineMath math={String.raw`A\subset B`} /> avec
              <InlineMath math={String.raw`P(A)=0{,}20`} /> et <InlineMath math={String.raw`P(B)=0{,}50`} />.
              Calculez <InlineMath math={String.raw`P(A\mid B)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 3</h3>
            <p>
              Cas disjoint : <InlineMath math={String.raw`A\cap B=\varnothing`} /> avec
              <InlineMath math={String.raw`P(A)=0{,}30`} /> et <InlineMath math={String.raw`P(B)=0{,}25`} />.
              Quelle est la valeur de <InlineMath math={String.raw`P(A\mid B)`} /> ? Justifiez au diagramme.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 4</h3>
            <p>
              Indépendance : on donne <InlineMath math={String.raw`P(A)=0{,}4`} />, <InlineMath math={String.raw`P(B)=0{,}5`} />
              et <InlineMath math={String.raw`P(A\cap B)=0{,}20`} />. Vérifiez l’indépendance et déduisez
              <InlineMath math={String.raw`P(A\mid B)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 5</h3>
            <p>
              Sur un Venn : <InlineMath math={String.raw`P(B)=0{,}60`} /> et
              <InlineMath math={String.raw`P(A\cap B)=0{,}36`} />. Comparez <InlineMath math={String.raw`P(A\mid B)`} /> et
              <InlineMath math={String.raw`P(B\mid A)`} /> sachant de plus <InlineMath math={String.raw`P(A)=0{,}45`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 6</h3>
            <p>
              On lit sur un diagramme : extérieur <InlineMath math={String.raw`=0{,}30`} />, A seul <InlineMath math={String.raw`=0{,}25`} />,
              B seul <InlineMath math={String.raw`=0{,}15`} />, intersection <InlineMath math={String.raw`=0{,}30`} />.
              Calculez <InlineMath math={String.raw`P(A\mid B)`} /> et <InlineMath math={String.raw`P(B\mid A)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 7</h3>
            <p>
              Sur un Venn, on indique seulement <InlineMath math={String.raw`P(B)=0{,}40`} /> et
              <InlineMath math={String.raw`P(A\mid B)=0{,}35`} />. Que vaut <InlineMath math={String.raw`P(A\cap B)`} /> ?
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 8</h3>
            <p>
              On sait <InlineMath math={String.raw`P(A)=0{,}50`} />, <InlineMath math={String.raw`P(B)=0{,}30`} /> et
              <InlineMath math={String.raw`P(A\mid B)=0{,}6`} />. Calculez <InlineMath math={String.raw`P(B\mid A)`} /> et
              commentez la différence avec <InlineMath math={String.raw`P(A\mid B)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 9</h3>
            <p>
              Deux schémas : (i) forte intersection, (ii) disjonction. Sans calcul détaillé, indiquez si
              <InlineMath math={String.raw`P(A\mid B)`} /> est « grand », « petit » ou nul dans chaque cas, et justifiez.
            </p>
            <img src={diagram3} alt="Diagramme 3" />
            <img src= {diagram4} alt="Diagramme 4" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 10</h3>
            <p>
              Erreur à éviter : on donne <InlineMath math={String.raw`P(A)=0{,}4`} />, <InlineMath math={String.raw`P(B)=0{,}5`} />
              et <InlineMath math={String.raw`P(A\cap B)=0{,}22`} />. Expliquez pourquoi on ne peut pas conclure
              <InlineMath math={String.raw`P(A\mid B)=P(A)`} /> et calculez la vraie valeur de <InlineMath math={String.raw`P(A\mid B)`} />.
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
            On restreint à <InlineMath math={String.raw`B`} /> puis on normalise les aires :
            <BlockMath math={String.raw`\displaystyle P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}`} />
          </p>
          <ol className="answer-list">
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 1</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`P(B)=0{,}18+0{,}20=0{,}38`} />.
                  </p>
                  <BlockMath math={String.raw`\displaystyle P(A\mid B)=\frac{0{,}18}{0{,}38}=\frac{18}{38}=\frac{9}{19}\approx 0{,}4737`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 2</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A\mid B)=\frac{P(A)}{P(B)}=\frac{0{,}20}{0{,}50}=0{,}40`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 3</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A\mid B)=0`} />
                  <p>Car aucune part de <InlineMath math={String.raw`B`} /> n’appartient à <InlineMath math={String.raw`A`} />.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 4</summary>
                <div className="answer__content">
                  <p>On a <InlineMath math={String.raw`P(A)P(B)=0{,}4\times0{,}5=0{,}20=P(A\cap B)`} />, donc indépendance.</p>
                  <BlockMath math={String.raw`\displaystyle P(A\mid B)=P(A)=0{,}4`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 5</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A\mid B)=\frac{0{,}36}{0{,}60}=0{,}60`} />
                  <BlockMath math={String.raw`\displaystyle P(B\mid A)=\frac{0{,}36}{0{,}45}=0{,}80`} />
                  <p>Les valeurs diffèrent : les univers conditionnels sont différents.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 6</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`P(B)=0{,}15+0{,}30=0{,}45`} />, <InlineMath math={String.raw`P(A)=0{,}25+0{,}30=0{,}55`} />.
                  </p>
                  <BlockMath math={String.raw`\displaystyle P(A\mid B)=\frac{0{,}30}{0{,}45}=\frac{2}{3}\approx 0{,}6667`} />
                  <BlockMath math={String.raw`\displaystyle P(B\mid A)=\frac{0{,}30}{0{,}55}=\frac{6}{11}\approx 0{,}5455`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 7</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A\cap B)=P(B)\,P(A\mid B)=0{,}40\times0{,}35=0{,}14`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 8</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A\cap B)=P(B)\,P(A\mid B)=0{,}30\times0{,}6=0{,}18`} />
                  <BlockMath math={String.raw`\displaystyle P(B\mid A)=\frac{P(A\cap B)}{P(A)}=\frac{0{,}18}{0{,}50}=0{,}36`} />
                  <p>
                    On observe <InlineMath math={String.raw`P(B\mid A)\neq P(A\mid B)`} /> (0,36 vs 0,6).
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 9</summary>
                <div className="answer__content">
                  <p>(i) Forte intersection ⇒ <InlineMath math={String.raw`P(A\mid B)`} /> grand (proche de 1 si chevauchement majeur).</p>
                  <p>(ii) Disjoints ⇒ <InlineMath math={String.raw`P(A\mid B)=0`} />.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 10</summary>
                <div className="answer__content">
                  <p>
                    L’égalité <InlineMath math={String.raw`P(A\mid B)=P(A)`} /> exige l’indépendance, soit
                    <InlineMath math={String.raw`P(A\cap B)=P(A)P(B)=0{,}20`} />. Or on a 0,22 ≠ 0,20.
                  </p>
                  <BlockMath math={String.raw`\displaystyle P(A\mid B)=\frac{0{,}22}{0{,}5}=0{,}44`} />
                </div>
              </details>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

