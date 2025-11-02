import { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import table29 from '/src/assets/img/tables/table29.png';

export default function Section5Exercises() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(h => !h);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices — Indépendance</h2>
        <p className="m-4">
          On s’appuie sur la définition <InlineMath math={String.raw`P(A\cap B)=P(A)\,P(B)`} /> et sur les équivalences
          <InlineMath math={String.raw`P(A\mid B)=P(A)\ (P(B)>0)`} /> et <InlineMath math={String.raw`P(B\mid A)=P(B)\ (P(A)>0)`} />.
        </p>

        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 1</h3>
            <p>
              On donne <InlineMath math={String.raw`P(A)=0{,}40`} />, <InlineMath math={String.raw`P(B)=0{,}50`} /> et
              <InlineMath math={String.raw`P(A\cap B)=0{,}20`} />. Les événements A et B sont-ils indépendants ? Calculez
              <InlineMath math={String.raw`P(A\mid B)`} /> et <InlineMath math={String.raw`P(B\mid A)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 2</h3>
            <p>
              On lance une pièce équilibrée et un dé équilibré. Soient <InlineMath math={String.raw`F:`} /> « Face » et
              <InlineMath math={String.raw`S_6:`} /> « faire 6 ». Calculez <InlineMath math={String.raw`P(F\cap S_6)`} /> et
              vérifiez l’indépendance. Puis calculez <InlineMath math={String.raw`P(F\cap P)`} /> où <InlineMath math={String.raw`P:`} /> « le dé montre un nombre pair ».
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 3</h3>
            <p>
              Urne : 3 rouges (R), 2 bleues (B). Deux tirages successifs sans remise. Comparez
              <InlineMath math={String.raw`P(R_1\cap R_2)`} /> à <InlineMath math={String.raw`P(R_1)P(R_2)`} /> et concluez
              sur l’indépendance des tirages.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 4</h3>
            <p>
              Soient A et B disjoints avec <InlineMath math={String.raw`P(A)=0{,}30`} /> et <InlineMath math={String.raw`P(B)=0{,}25`} />.
              A et B sont-ils indépendants ? Justifiez à l’aide de la définition.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 5</h3>
            <p>
              On suppose A et B indépendants avec <InlineMath math={String.raw`P(A)=0{,}70`} /> et <InlineMath math={String.raw`P(B)=0{,}20`} />.
              Calculez <InlineMath math={String.raw`P(A\cap B)`} />, <InlineMath math={String.raw`P(A\mid B)`} /> et
              <InlineMath math={String.raw`P(B\mid A)`} />. Que remarquez-vous sur les valeurs <InlineMath math={String.raw`P(A)`} /> et <InlineMath math={String.raw`P(B)`} /> ?
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 6</h3>
            <p>
              On observe <InlineMath math={String.raw`P(A\mid B)=P(A)=0{,}40`} /> avec <InlineMath math={String.raw`P(B)>0`} />.
              Concluez sur la relation d’indépendance et donnez <InlineMath math={String.raw`P(A\cap B)`} /> en fonction de <InlineMath math={String.raw`P(B)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 7</h3>
            <p>
              Enquête sur 200 personnes : S « fait du sport », I « apprend un instrument ».
              Testez l’indépendance à partir des effectifs.
            </p>
            <img src={table29} alt="" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 8</h3>
            <p>
              Sur un diagramme de Venn, on lit :
              {" "}
              <InlineMath math={String.raw`A\setminus B = 0{,}25`} />,
              {" "}
              <InlineMath math={String.raw`B\setminus A = 0{,}10`} />,
              {" "}
              <InlineMath math={String.raw`A\cap B = 0{,}15`} />,
              {" "}
              extérieur <InlineMath math={String.raw`= 0{,}50`} />.
              {" "}
              Calculez <InlineMath math={String.raw`P(A)`} />, <InlineMath math={String.raw`P(B)`} />, <InlineMath math={String.raw`P(A\cap B)`} /> et testez l’indépendance.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 9</h3>
            <p>
              Sous hypothèse d’indépendance et avec <InlineMath math={String.raw`P(A)=0{,}30`} /> et <InlineMath math={String.raw`P(B)=0{,}60`} />,
              calculez <InlineMath math={String.raw`P(A^c\cap B)`} /> et <InlineMath math={String.raw`P(A\cup B)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 10</h3>
            <p>
              On suppose A et B indépendants avec <InlineMath math={String.raw`P(A)=0{,}80`} /> et <InlineMath math={String.raw`P(B)=0{,}20`} />.
              Vérifiez que <InlineMath math={String.raw`P(A\mid B)=P(A)`} /> même si <InlineMath math={String.raw`P(A)\neq P(B)`} />.
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
            On utilise la définition et ses équivalences :
            <BlockMath math={String.raw`\displaystyle P(A\cap B)=P(A)P(B)\iff P(A\mid B)=P(A)\ (P(B)>0)`} />
          </p>
          <ol className="answer-list">
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 1</summary>
                <div className="answer__content">
                  <p>Produit : <InlineMath math={String.raw`P(A)P(B)=0{,}40\times0{,}50=0{,}20`} /> = <InlineMath math={String.raw`P(A\cap B)`} /> ⇒ indépendants.</p>
                  <BlockMath math={String.raw`\displaystyle P(A\mid B)=\tfrac{0{,}20}{0{,}50}=0{,}40=P(A)`} />
                  <BlockMath math={String.raw`\displaystyle P(B\mid A)=\tfrac{0{,}20}{0{,}40}=0{,}50=P(B)`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 2</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(F\cap S_6)=\tfrac12\cdot\tfrac16=\tfrac1{12}`} />
                  <BlockMath math={String.raw`\displaystyle P(F\cap P)=\tfrac12\cdot\tfrac36=\tfrac14`} />
                  <p>Indépendance car les expériences sont distinctes et équiprobables.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 3</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(R_1\cap R_2)=\tfrac{3}{5}\cdot\tfrac{2}{4}=\tfrac{3}{10}=0{,}3`} />
                  <BlockMath math={String.raw`\displaystyle P(R_1)=\tfrac{3}{5},\; P(R_2)=\tfrac{3}{5}\Rightarrow P(R_1)P(R_2)=\tfrac{9}{25}=0{,}36`} />
                  <p>Différents ⇒ tirages non indépendants (sans remise).</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 4</summary>
                <div className="answer__content">
                  <p>Disjoints ⇒ <InlineMath math={String.raw`P(A\cap B)=0`} /> mais <InlineMath math={String.raw`P(A)P(B)=0{,}075`} /> ≠ 0.</p>
                  <p>Donc pas d’indépendance.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 5</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A\cap B)=0{,}70\times0{,}20=0{,}14`} />
                  <BlockMath math={String.raw`\displaystyle P(A\mid B)=\tfrac{0{,}14}{0{,}20}=0{,}70=P(A)`} />
                  <BlockMath math={String.raw`\displaystyle P(B\mid A)=\tfrac{0{,}14}{0{,}70}=0{,}20=P(B)`} />
                  <p>Indépendance n’implique pas égalité des probabilités : ici 0,70 ≠ 0,20.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 6</summary>
                <div className="answer__content">
                  <p>Comme <InlineMath math={String.raw`P(A\mid B)=P(A)`} /> avec <InlineMath math={String.raw`P(B)>0`} />, A et B sont indépendants.</p>
                  <BlockMath math={String.raw`\displaystyle P(A\cap B)=P(B)\,P(A)=0{,}40\,P(B)`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 7</summary>
                <div className="answer__content">
                  <p><InlineMath math={String.raw`n(S)=48+72=120`} />, <InlineMath math={String.raw`n(I)=48+32=80`} />, <InlineMath math={String.raw`n(S\cap I)=48`} />, <InlineMath math={String.raw`N=200`} />.</p>
                  <BlockMath math={String.raw`\displaystyle P(S)=0{,}60,\ P(I)=0{,}40,\ P(S\cap I)=0{,}24`} />
                  <BlockMath math={String.raw`\displaystyle P(S)P(I)=0{,}60\times0{,}40=0{,}24`} />
                  <p>Donc S et I sont indépendants dans cet échantillon.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 8</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A)=0{,}25+0{,}15=0{,}40,\quad P(B)=0{,}10+0{,}15=0{,}25`} />
                  <BlockMath math={String.raw`\displaystyle P(A\cap B)=0{,}15,\quad P(A)P(B)=0{,}40\times0{,}25=0{,}10`} />
                  <p>Différents ⇒ pas d’indépendance.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 9</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A^c\cap B)=P(B)-P(A\cap B)=0{,}60-0{,}18=0{,}42`} />
                  <BlockMath math={String.raw`\displaystyle P(A\cup B)=P(A)+P(B)-P(A\cap B)=0{,}30+0{,}60-0{,}18=0{,}72`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 10</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A\mid B)=\frac{P(A\cap B)}{P(B)}=\frac{0{,}80\times0{,}20}{0{,}20}=0{,}80=P(A)`} />
                  <p>On vérifie l’équivalence malgré <InlineMath math={String.raw`P(A)\neq P(B)`} />.</p>
                </div>
              </details>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
