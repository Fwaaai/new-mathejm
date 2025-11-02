import { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';

export default function Section10Exercises() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(h => !h);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices — Essais indépendants</h2>
        <p className="m-4">
          On travaille exclusivement avec des événements indépendants <InlineMath math={String.raw`A`} /> et <InlineMath math={String.raw`B`} />
          pour lesquels <InlineMath math={String.raw`P(A\cap B)=P(A)\,P(B)`} /> comme présenté dans la section (dé + pièce, etc.).
        </p>

        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 1</h3>
            <p>
              On lance un dé équilibré (événement <InlineMath math={String.raw`D_6:`} /> « faire 6 ») et une pièce équilibrée
              (événement <InlineMath math={String.raw`F:`} /> « Face »). Les lancers sont indépendants. Calculez
              <InlineMath math={String.raw`P(D_6\cap F)`} />.
            </p>
            
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 2</h3>
            <p>
              Dé équilibré (événement <InlineMath math={String.raw`P:`} /> « nombre pair ») et pièce équilibrée
              (événement <InlineMath math={String.raw`\Pi:`} /> « Pile »), essais indépendants. Calculez
              <InlineMath math={String.raw`P(P\cap \Pi)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 3</h3>
            <p>
              Deux événements indépendants <InlineMath math={String.raw`A`} /> et <InlineMath math={String.raw`B`} /> vérifient
              <InlineMath math={String.raw`P(A)=0{,}30`} /> et <InlineMath math={String.raw`P(B)=0{,}40`} />. Calculez
              <InlineMath math={String.raw`P(A\cap B)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 4</h3>
            <p>
              On sait <InlineMath math={String.raw`P(A\cap B)=0{,}12`} /> et <InlineMath math={String.raw`P(A)=0{,}30`} /> avec A et B indépendants.
              Déterminez <InlineMath math={String.raw`P(B)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 5</h3>
            <p>
              Événements indépendants <InlineMath math={String.raw`A`} /> et <InlineMath math={String.raw`B`} /> avec
              <InlineMath math={String.raw`P(A)=0{,}70`} /> et <InlineMath math={String.raw`P(B)=0{,}50`} />. Calculez
              <InlineMath math={String.raw`P(\overline{A}\cap B)`} /> et <InlineMath math={String.raw`P(\overline{A}\cap \overline{B})`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 6</h3>
            <p>
              On prétend que <InlineMath math={String.raw`A`} /> et <InlineMath math={String.raw`B`} /> sont indépendants alors que
              <InlineMath math={String.raw`P(A)=0{,}60`} />, <InlineMath math={String.raw`P(B)=0{,}50`} /> et
              <InlineMath math={String.raw`P(A\cap B)=0{,}32`} />. Vérifiez la validité de l’affirmation.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 7</h3>
            <p>
              Deux dés équilibrés sont lancés, de façon indépendante. Calculez
              <InlineMath math={String.raw`P(D_1=3\cap D_2=4)`} /> et <InlineMath math={String.raw`P(\text{les deux pairs})`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 8</h3>
            <p>
              On tire au hasard une lettre dans <InlineMath math={String.raw`\{A,B,C\}`} /> et un chiffre dans
              <InlineMath math={String.raw`\{1,2\}`} /> (tirages indépendants et uniformes). Calculez
              <InlineMath math={String.raw`P(\text{lettre }=B\ \cap\ \text{chiffre }=2)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 9</h3>
            <p>
              Deux pièces équilibrées, lancées indépendamment. Calculez
              <InlineMath math={String.raw`P(\text{deux Faces})`} /> et <InlineMath math={String.raw`P(\text{au moins une Face})`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 10</h3>
            <p>
              A et B indépendants avec <InlineMath math={String.raw`P(A)=0{,}45`} /> et <InlineMath math={String.raw`P(B)=0{,}20`} />.
              Calculez <InlineMath math={String.raw`P(A\cap B)`} /> puis <InlineMath math={String.raw`P(\overline{A}\cap \overline{B})`} />.
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
            Indépendance: <InlineMath math={String.raw`P(A\cap B)=P(A)\,P(B)`} /> et compléments
            <InlineMath math={String.raw`\,P(\overline{A})=1-P(A)`} />.
          </p>
          <ol className="answer-list">
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 1</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(D_6\cap F)=\tfrac16\times\tfrac12=\tfrac1{12}`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 2</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(P\cap \Pi)=\tfrac12\times\tfrac12=\tfrac14`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 3</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A\cap B)=0{,}30\times0{,}40=0{,}12`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 4</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(B)=\frac{P(A\cap B)}{P(A)}=\frac{0{,}12}{0{,}30}=0{,}40`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 5</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(\overline{A}\cap B)=(1-0{,}70)\times0{,}50=0{,}30\times0{,}50=0{,}15`} />
                  <BlockMath math={String.raw`\displaystyle P(\overline{A}\cap \overline{B})=(1-0{,}70)(1-0{,}50)=0{,}30\times0{,}50=0{,}15`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 6</summary>
                <div className="answer__content">
                  <p>
                    Si indépendants, on devrait avoir <InlineMath math={String.raw`P(A\cap B)=P(A)P(B)=0{,}60\times0{,}50=0{,}30`} />.
                    Or la valeur donnée est 0,32 ≠ 0,30, donc pas indépendants.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 7</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(D_1=3\cap D_2=4)=\tfrac16\times\tfrac16=\tfrac1{36}`} />
                  <BlockMath math={String.raw`\displaystyle P(\text{les deux pairs})=\tfrac12\times\tfrac12=\tfrac14`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 8</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(B\ \text{et}\ 2)=\tfrac13\times\tfrac12=\tfrac1{6}`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 9</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(\text{deux Faces})=\tfrac12\times\tfrac12=\tfrac14`} />
                  <BlockMath math={String.raw`\displaystyle P(\text{au moins une Face})=1-\tfrac14=\tfrac34`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 10</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A\cap B)=0{,}45\times0{,}20=0{,}09`} />
                  <BlockMath math={String.raw`\displaystyle P(\overline{A}\cap \overline{B})=(1-0{,}45)(1-0{,}20)=0{,}55\times0{,}80=0{,}44`} />
                </div>
              </details>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

