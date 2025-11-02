import { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';

export default function Section7Exercises() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(h => !h);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices — Union et « au moins un succès »</h2>
        <p className="m-4">
          Exercices centrés sur la composition via tableau
          <InlineMath math={String.raw`\,P(A\cup B)=P(A)+P(B)-P(A\cap B)`} />
          et sur la lecture d’un arbre pour « au moins un succès » sur deux essais indépendants :
          <InlineMath math={String.raw`\,P(\ge 1)=1-(1-p)^2`} />
          {" "}ou{ " "}
          <InlineMath math={String.raw`1-(1-p_1)(1-p_2)`} /> si les probabilités diffèrent.
        </p>

        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 1</h3>
            <p>Un tableau (N=200) donne les effectifs pour A et B.</p>
            <BlockMath math={String.raw `\begin{array}{c|c|c|c}
 & B & \overline{B} & \text{Total} \\ \hline
A & 64 & 26 & 90 \\ \hline
\overline{A} & 36 & 74 & 110 \\ \hline
\text{Total} & 100 & 100 & 200
\end{array}`} />
            <p>
              Calculez <InlineMath math={String.raw`P(A)`} />, <InlineMath math={String.raw`P(B)`} />,
              <InlineMath math={String.raw`P(A\cap B)`} /> puis <InlineMath math={String.raw`P(A\cup B)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 2</h3>
            <p>
              On sait <InlineMath math={String.raw`P(A)=0{,}60`} />, <InlineMath math={String.raw`P(B)=0{,}50`} /> et
              <InlineMath math={String.raw`P(A\cap B)=0{,}32`} />. Calculez <InlineMath math={String.raw`P(A\cup B)`} /> et
              <InlineMath math={String.raw`P(\overline{A\cup B})`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 3</h3>
            <p>
              Un tableau de probabilités donne :
              {" "}
              <InlineMath math={String.raw`A\cap B = 0{,}25`} /> ;
              {" "}
              <InlineMath math={String.raw`A\cap \overline{B} = 0{,}10`} /> ;
              {" "}
              <InlineMath math={String.raw`\overline{A}\cap B = 0{,}15`} /> ;
              {" "}
              <InlineMath math={String.raw`\overline{A}\cap \overline{B} = 0{,}50`} />.
              {" "}
              Vérifiez les marges puis calculez <InlineMath math={String.raw`P(A\cup B)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 4</h3>
            <p>
              Deux essais indépendants identiques avec probabilité de succès <InlineMath math={String.raw`p=0{,}4`} />.
              Calculez <InlineMath math={String.raw`P(\ge 1\,\text{succès})`} /> par la formule du complément.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 5</h3>
            <p>
              Deux machines indépendantes ont des probabilités de succès <InlineMath math={String.raw`p_1=0{,}75`} /> et
              <InlineMath math={String.raw`p_2=0{,}85`} />. Probabilité que la commande soit honorée si une seule machine suffit ?
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 6</h3>
            <p>
              On donne <InlineMath math={String.raw`P(A)=0{,}70`} />, <InlineMath math={String.raw`P(B)=0{,}55`} /> et
              <InlineMath math={String.raw`P(A\cup B)=0{,}90`} />. Est-ce cohérent ? Justifiez en comparant avec
              <InlineMath math={String.raw`P(A)+P(B)-P(A\cap B)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 7</h3>
            <p>
              À partir d’un tableau d’effectifs (N=500) :
              {" "}
              <InlineMath math={String.raw`n(A\cap B)=180`} /> ;
              {" "}
              <InlineMath math={String.raw`n(A\cap \overline{B})=70`} /> ;
              {" "}
              <InlineMath math={String.raw`n(\overline{A}\cap B)=120`} /> ;
              {" "}
              <InlineMath math={String.raw`n(\overline{A}\cap \overline{B})=130`} />.
              {" "}
              Calculez <InlineMath math={String.raw`P(A\cup B)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 8</h3>
            <p>
              Deux essais indépendants avec <InlineMath math={String.raw`p=0{,}6`} />. Donnez
              <InlineMath math={String.raw`P(\ge 1)`} /> et <InlineMath math={String.raw`P(\text{0 succès})`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 9</h3>
            <p>
              On sait <InlineMath math={String.raw`P(A)=0{,}45`} />, <InlineMath math={String.raw`P(B)=0{,}35`} /> et
              <InlineMath math={String.raw`P(A\cup B)=0{,}60`} />. Calculez <InlineMath math={String.raw`P(A\cap B)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 10</h3>
            <p>
              Deux systèmes indépendants S1 et S2 fonctionnent avec probabilités <InlineMath math={String.raw`0{,}8`} /> et
              <InlineMath math={String.raw`0{,}9`} />. Le service est assuré si au moins l’un fonctionne.
              Calculez la probabilité de service assuré.
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
            Utiliser <InlineMath math={String.raw`P(A\cup B)=P(A)+P(B)-P(A\cap B)`} /> et
            <InlineMath math={String.raw`\,P(\ge 1)=1-(1-p)^2`} /> (ou <InlineMath math={String.raw`1-(1-p_1)(1-p_2)`} />).
          </p>
          <ol className="answer-list">
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 1</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A)=\tfrac{64+26}{200}=0{,}45,\quad P(B)=\tfrac{64+36}{200}=0{,}50`} />
                  <BlockMath math={String.raw`\displaystyle P(A\cap B)=\tfrac{64}{200}=0{,}32`} />
                  <BlockMath math={String.raw`\displaystyle P(A\cup B)=0{,}45+0{,}50-0{,}32=0{,}63`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 2</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A\cup B)=0{,}60+0{,}50-0{,}32=0{,}78`} />
                  <BlockMath math={String.raw`\displaystyle P(\overline{A\cup B})=1-0{,}78=0{,}22`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 3</summary>
                <div className="answer__content">
                  <p>Marges : <InlineMath math={String.raw`P(A)=0{,}25+0{,}10=0{,}35`} />, <InlineMath math={String.raw`P(B)=0{,}25+0{,}15=0{,}40`} />.</p>
                  <BlockMath math={String.raw`\displaystyle P(A\cup B)=0{,}35+0{,}40-0{,}25=0{,}50`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 4</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(\ge 1)=1-(1-0{,}4)^2=1-0{,}6^2=1-0{,}36=0{,}64`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 5</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(\text{satisfaite})=1-(1-0{,}75)(1-0{,}85)=1-(0{,}25)(0{,}15)=1-0{,}0375=0{,}9625`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 6</summary>
                <div className="answer__content">
                  <p>
                    On a toujours <InlineMath math={String.raw`P(A\cup B)\le P(A)+P(B)`} />.
                    {" "}
                    <InlineMath math={String.raw`0{,}90 \le 1{,}25`} />,
                    {" "}
                    et <InlineMath math={String.raw`P(A\cap B)=P(A)+P(B)-P(A\cup B)\ge 0`} />.
                  </p>
                  <BlockMath math={String.raw`\displaystyle P(A\cap B)=0{,}70+0{,}55-0{,}90=0{,}35`} />
                  <p>Cohérent.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 7</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A\cup B)=\tfrac{180+70+120}{500}=\tfrac{370}{500}=0{,}74`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 8</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(\text{0 succès})=(1-0{,}6)^2=0{,}4^2=0{,}16`} />
                  <BlockMath math={String.raw`\displaystyle P(\ge 1)=1-0{,}16=0{,}84`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 9</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A\cap B)=P(A)+P(B)-P(A\cup B)=0{,}45+0{,}35-0{,}60=0{,}20`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 10</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(\text{service})=1-(1-0{,}8)(1-0{,}9)=1-(0{,}2)(0{,}1)=0{,}98`} />
                </div>
              </details>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
