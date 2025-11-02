import { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import table27 from '/src/assets/img/tables/table27.png';
import diagram6 from '/src/assets/img/diagrams/diagram6.png';

export default function Section2Exercises() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(h => !h);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices — Formule et lectures</h2>
        <p className="m-4">
          Exercices centrés sur la formule <InlineMath math={String.raw`\,P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}`} />, ses réécritures
          <InlineMath math={String.raw`\,P(A\cap B)=P(B)\,P(A\mid B)=P(A)\,P(B\mid A)`} /> et sur les lectures via tableau et diagramme.
        </p>

        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 1</h3>
            <p>
              On considère deux événements <InlineMath math={String.raw`A`} /> et <InlineMath math={String.raw`B`} /> tels que
              <InlineMath math={String.raw`P(A)=0{,}60`} />, <InlineMath math={String.raw`P(B)=0{,}40`} /> et
              <InlineMath math={String.raw`P(A\cap B)=0{,}24`} />. Calculez <InlineMath math={String.raw`P(A\mid B)`} />,
              <InlineMath math={String.raw`P(B\mid A)`} /> et comparez les deux valeurs.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 2</h3>
            <p>
              Enquête sur 200 personnes : on relève l’habitude de prendre le bus (<InlineMath math={String.raw`B`} />)
              et de manger à la cantine (<InlineMath math={String.raw`C`} />). Complétez puis lisez les probabilités conditionnelles.
            </p>
            <img src={table27} alt="table27"></img>
            <p>
              Calculez <InlineMath math={String.raw`P(C\mid B)`} />, <InlineMath math={String.raw`P(B\mid C)`} /> et
              <InlineMath math={String.raw`P(B\cap C)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 3</h3>
            <p>
              
              <InlineMath math={String.raw`P(A\cap B)=0{,}15`} />, <InlineMath math={String.raw`P(A\setminus B)=0{,}20`} />,
              <InlineMath math={String.raw`P(B\setminus A)=0{,}25`} />,  <InlineMath math={String.raw`P(\overline{A} \cap \overline{B})=0{,}40`} />.
              Calculez <InlineMath math={String.raw`P(A)`} />, <InlineMath math={String.raw`P(B)`} /> puis
              <InlineMath math={String.raw`P(A\mid B)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 4</h3>
            <p>
              Urne : 4 rouges (<InlineMath math={String.raw`R`} />) et 3 bleues (<InlineMath math={String.raw`B`} />).
              Deux tirages successifs sans remise. Calculez <InlineMath math={String.raw`P(R_2\mid R_1)`} /> et
              <InlineMath math={String.raw`P(B_2\mid R_1)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 5</h3>
            <p>
              On sait <InlineMath math={String.raw`P(B)=0{,}52`} /> et <InlineMath math={String.raw`P(A\mid B)=0{,}30`} />.
              Calculez <InlineMath math={String.raw`P(A\cap B)`} /> puis, si <InlineMath math={String.raw`P(A)=0{,}40`} />,
              déduisez <InlineMath math={String.raw`P(B\mid A)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 6</h3>
            <p>
              Expliquez pourquoi la quantité <InlineMath math={String.raw`P(A\mid B)`} /> n’est pas définie lorsque
              <InlineMath math={String.raw`P(B)=0`} />, même si <InlineMath math={String.raw`P(A)=1`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 7</h3>
            <p>
              Montrez sur un exemple numérique que, en général, <InlineMath math={String.raw`P(A\mid B)\neq P(B\mid A)`} />.
              Proposez des valeurs de <InlineMath math={String.raw`P(A)`} />, <InlineMath math={String.raw`P(B)`} />,
              <InlineMath math={String.raw`P(A\cap B)`} /> et vérifiez l’inégalité.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 8</h3>
            <p>
              Dans un échantillon de 150 personnes, on observe : <InlineMath math={String.raw`n(S\cap I)=45`} />,
              <InlineMath math={String.raw`n(S\cap\overline{I})=60`} />,
              <InlineMath math={String.raw`n(\overline{S}\cap I)=15`} />,
              <InlineMath math={String.raw`n(\overline{S}\cap\overline{I})=30`} />.
              Calculez <InlineMath math={String.raw`P(S\mid I)`} /> et <InlineMath math={String.raw`P(I\mid S)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 9</h3>
            <p>
              À partir d’un diagramme de Venn où <InlineMath math={String.raw`P(B)=0{,}5`} /> et
              <InlineMath math={String.raw`P(A\cap B)=0{,}2`} />, calculez <InlineMath math={String.raw`P(A\mid B)`} />.
              On sait aussi <InlineMath math={String.raw`P(A)=0{,}35`} />. Calculez alors <InlineMath math={String.raw`P(B\mid A)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 10</h3>
            <p>
              Urne : 6 boules dont 2 rouges (<InlineMath math={String.raw`R`} />) et 4 bleues (<InlineMath math={String.raw`B`} />).
              On tire une boule, on la remet, puis on retire. Calculez <InlineMath math={String.raw`P(R_2\mid B_1)`} /> et
              <InlineMath math={String.raw`P(B_2\mid B_1)`} /> (tirages avec remise).
            </p>
            <img src={diagram6} alt="diagramme" />
          </li>
        </ol>

        <div className="exercise__actions">
          <button className="prim-btn px-5 py-2.5 m-7" type="button" onClick={toggleHidden}>
            {hidden ? "Afficher" : "Masquer"} les réponses
          </button>
        </div>

        <div className="answers" hidden={hidden}>
          <p>
            On utilise systématiquement <InlineMath math={String.raw`P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}`} /> et
            ses équivalents <InlineMath math={String.raw`P(A\cap B)=P(B)\,P(A\mid B)=P(A)\,P(B\mid A)`} />.
          </p>
          <ol className="answer-list">
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 1</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A\mid B)=\frac{0{,}24}{0{,}40}=0{,}60`} />
                  <BlockMath math={String.raw`\displaystyle P(B\mid A)=\frac{0{,}24}{0{,}60}=0{,}40`} />
                  <p>
                    Ici, <InlineMath math={String.raw`P(A\mid B)\neq P(B\mid A)`} /> en général (valeurs différentes : 0,60 vs 0,40).
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 2</summary>
                <div className="answer__content">
                  <p>Totaux : <InlineMath math={String.raw`n(B)=72+48=120`} />, <InlineMath math={String.raw`n(C)=72+34=106`} /> et
                  <InlineMath math={String.raw`n(B\cap C)=72`} />, <InlineMath math={String.raw`N=200`} />.</p>
                  <BlockMath math={String.raw`\displaystyle P(B)=\tfrac{120}{200}=0{,}6,\; P(C)=\tfrac{106}{200}=0{,}53`} />
                  <BlockMath math={String.raw`\displaystyle P(B\cap C)=\tfrac{72}{200}=0{,}36`} />
                  <BlockMath math={String.raw`\displaystyle P(C\mid B)=\frac{0{,}36}{0{,}6}=0{,}6`} />
                  <BlockMath math={String.raw`\displaystyle P(B\mid C)=\frac{0{,}36}{0{,}53}=\frac{36}{53}\approx 0{,}6792`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 3</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A)=0{,}20+0{,}15=0{,}35,\quad P(B)=0{,}25+0{,}15=0{,}40`} />
                  <BlockMath math={String.raw`\displaystyle P(A\mid B)=\frac{0{,}15}{0{,}40}=0{,}375`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 4</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(R_2\mid R_1)=\frac{3}{6}=\tfrac{1}{2}=0{,}5`} />
                  <BlockMath math={String.raw`\displaystyle P(B_2\mid R_1)=\frac{3}{6}=\tfrac{1}{2}=0{,}5`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 5</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A\cap B)=P(B)\,P(A\mid B)=0{,}52\times0{,}30=0{,}156`} />
                  <BlockMath math={String.raw`\displaystyle P(B\mid A)=\frac{0{,}156}{0{,}40}=0{,}39`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 6</summary>
                <div className="answer__content">
                  <p>
                    La définition impose <InlineMath math={String.raw`P(B)>0`} />. Si <InlineMath math={String.raw`P(B)=0`} />,
                    on ne peut pas normaliser par <InlineMath math={String.raw`P(B)`} /> : la quantité n’est pas définie.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 7</summary>
                <div className="answer__content">
                  <p>Par exemple, prenez <InlineMath math={String.raw`P(A)=0{,}5`} />, <InlineMath math={String.raw`P(B)=0{,}4`} />,
                  <InlineMath math={String.raw`P(A\cap B)=0{,}2`} />.</p>
                  <BlockMath math={String.raw`\displaystyle P(A\mid B)=\frac{0{,}2}{0{,}4}=0{,}5,\quad P(B\mid A)=\frac{0{,}2}{0{,}5}=0{,}4`} />
                  <p>On vérifie bien <InlineMath math={String.raw`P(A\mid B)\neq P(B\mid A)`} />.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 8</summary>
                <div className="answer__content">
                  <p>Totaux : <InlineMath math={String.raw`n(I)=45+15=60`} />, <InlineMath math={String.raw`n(S)=45+60=105`} />, <InlineMath math={String.raw`N=150`} />.</p>
                  <BlockMath math={String.raw`\displaystyle P(S\mid I)=\frac{45/150}{60/150}=\frac{45}{60}=\frac{3}{4}=0{,}75`} />
                  <BlockMath math={String.raw`\displaystyle P(I\mid S)=\frac{45/150}{105/150}=\frac{45}{105}=\frac{3}{7}\approx 0{,}4286`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 9</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A\mid B)=\frac{0{,}2}{0{,}5}=0{,}4`} />
                  <BlockMath math={String.raw`\displaystyle P(B\mid A)=\frac{0{,}2}{0{,}35}=\frac{40}{70}=\frac{4}{7}\approx 0{,}5714`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 10</summary>
                <div className="answer__content">
                  <p>Avec remise, les tirages sont identiquement distribués :</p>
                  <BlockMath math={String.raw`\displaystyle P(R_2\mid B_1)=P(R)=\tfrac{2}{6}=\tfrac{1}{3}\approx 0{,}3333`} />
                  <BlockMath math={String.raw`\displaystyle P(B_2\mid B_1)=P(B)=\tfrac{4}{6}=\tfrac{2}{3}\approx 0{,}6667`} />
                </div>
              </details>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

