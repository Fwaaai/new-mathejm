import { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import table28 from '/src/assets/img/tables/table28.png';

export default function Section4Exercises() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(h => !h);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices — Règle du produit</h2>
        <p className="m-4">
          On utilise uniquement la décomposition <InlineMath math={String.raw`\,P(A\cap B)=P(B)\,P(A\mid B)=P(A)\,P(B\mid A)`} />
          comme vu dans la section (tirages avec/sans remise, indépendance, disjonction).
        </p>

        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 1</h3>
            <p>
              Calculez <InlineMath math={String.raw`P(A\cap B)`} /> dans chaque cas :
            </p>
            <p>
              (a) <InlineMath math={String.raw`P(B)=0{,}6`} />, <InlineMath math={String.raw`P(A\mid B)=0{,}3`} />.
            </p>
            <p>
              (b) <InlineMath math={String.raw`P(A)=0{,}5`} />, <InlineMath math={String.raw`P(B\mid A)=0{,}4`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 2</h3>
            <p>
              Urne (3 rouges, 2 bleues). Deux tirages successifs sans remise. 
              Calculez <InlineMath math={String.raw`P(R_1\cap R_2)`} /> et <InlineMath math={String.raw`P(R_1\cap B_2)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 3</h3>
            <p>
              Urne (2 rouges, 4 bleues). Deux tirages avec remise. 
              Calculez <InlineMath math={String.raw`P(R_1\cap R_2)`} /> et <InlineMath math={String.raw`P(B_1\cap R_2)`} />.
            </p>
          </li>
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 4</h3>
            <p>
              Enquête (200 personnes) : événements <InlineMath math={String.raw`B`} /> « prend le bus »,
              <InlineMath math={String.raw`C`} /> « mange à la cantine ».
            </p>
            <img src={table28} alt="table28" />
            <p>
              Déterminez <InlineMath math={String.raw`P(B)`} />, <InlineMath math={String.raw`P(C\mid B)`} /> puis
              calculez <InlineMath math={String.raw`P(B\cap C)`} /> à l’aide de la règle du produit.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 5</h3>
            <p>
              On suppose <InlineMath math={String.raw`A\cap B=\varnothing`} /> avec 
              <InlineMath math={String.raw`P(A)=0{,}35`} /> et <InlineMath math={String.raw`P(B)=0{,}25`} />.
              Calculez <InlineMath math={String.raw`P(A\cap B)`} /> et comparez à
              <InlineMath math={String.raw`P(A)P(B)`} />. Les événements sont-ils indépendants ?
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 6</h3>
            <p>
              Indépendance. On donne <InlineMath math={String.raw`P(A)=0{,}4`} /> et <InlineMath math={String.raw`P(B)=0{,}3`} />.
              Si A et B sont indépendants, calculez <InlineMath math={String.raw`P(A\cap B)`} /> et
              <InlineMath math={String.raw`P(A\mid B)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 7</h3>
            <p>
              Urne (4 rouges, 3 bleues). Sans remise. Calculez 
              <InlineMath math={String.raw`P(R_1\cap B_2)`} /> et 
              <InlineMath math={String.raw`P(B_1\cap R_2)`} /> à l’aide de la règle du produit.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 8</h3>
            <p>
              On sait <InlineMath math={String.raw`P(B)=0{,}48`} /> et <InlineMath math={String.raw`P(A\cap B)=0{,}168`} />.
              Calculez <InlineMath math={String.raw`P(A\mid B)`} /> puis vérifiez la règle 
              <InlineMath math={String.raw`P(A\cap B)=P(B)\,P(A\mid B)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 9</h3>
            <p>
              Production : deux lignes <InlineMath math={String.raw`F_1`} /> (60%) et <InlineMath math={String.raw`F_2`} /> (40%).
              Défaut <InlineMath math={String.raw`D`} /> : 
              <InlineMath math={String.raw`P(D\mid F_1)=0{,}03`} />, 
              <InlineMath math={String.raw`P(D\mid F_2)=0{,}08`} />.
              Calculez <InlineMath math={String.raw`P(F_1\cap D)`} /> et <InlineMath math={String.raw`P(F_2\cap D)`} />.
            </p>          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 10</h3>
            <p>
              Deux situations : (i) tirages avec remise ; (ii) tirages sans remise. 
              Dans quel cas peut-on écrire <InlineMath math={String.raw`P(R_1\cap R_2)=P(R_1)\,P(R_2)`} /> ? Justifiez
              en lien avec indépendance/dépendance des tirages.
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
            On applique systématiquement <InlineMath math={String.raw`P(A\cap B)=P(B)\,P(A\mid B)=P(A)\,P(B\mid A)`} />.
          </p>
          <ol className="answer-list">
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 1</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle (a)\; P(A\cap B)=0{,}6\times0{,}3=0{,}18`} />
                  <BlockMath math={String.raw`\displaystyle (b)\; P(A\cap B)=0{,}5\times0{,}4=0{,}20`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 2</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(R_1\cap R_2)=\tfrac{3}{5}\times\tfrac{2}{4}=\tfrac{3}{10}=0{,}3`} />
                  <BlockMath math={String.raw`\displaystyle P(R_1\cap B_2)=\tfrac{3}{5}\times\tfrac{2}{4}=\tfrac{3}{10}=0{,}3`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 3</summary>
                <div className="answer__content">
                  <p>Avec remise, les tirages sont indépendants :</p>
                  <BlockMath math={String.raw`\displaystyle P(R_1\cap R_2)=P(R)^2=\big(\tfrac{2}{6}\big)^2=\tfrac{1}{9}\approx0{,}1111`} />
                  <BlockMath math={String.raw`\displaystyle P(B_1\cap R_2)=P(B)P(R)=\tfrac{4}{6}\times\tfrac{2}{6}=\tfrac{8}{36}=\tfrac{2}{9}\approx0{,}2222`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 4</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`n(B)=70+50=120`} />, <InlineMath math={String.raw`n(C\mid B)=70/120`} /> et
                    <InlineMath math={String.raw`N=200`} />.
                  </p>
                  <BlockMath math={String.raw`\displaystyle P(B)=\tfrac{120}{200}=0{,}6,\quad P(C\mid B)=\tfrac{70}{120}=\tfrac{7}{12}`} />
                  <BlockMath math={String.raw`\displaystyle P(B\cap C)=P(B)\,P(C\mid B)=0{,}6\times\tfrac{7}{12}=0{,}35`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 5</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A\cap B)=0`} />
                  <BlockMath math={String.raw`\displaystyle P(A)P(B)=0{,}35\times0{,}25=0{,}0875\neq 0`} />
                  <p>Donc pas d’indépendance (disjoints n’implique pas indépendants).</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 6</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A\cap B)=P(A)P(B)=0{,}4\times0{,}3=0{,}12`} />
                  <BlockMath math={String.raw`\displaystyle P(A\mid B)=\frac{P(A\cap B)}{P(B)}=\frac{0{,}12}{0{,}3}=0{,}4=P(A)`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 7</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(R_1\cap B_2)=\tfrac{4}{7}\times\tfrac{3}{6}=\tfrac{12}{42}=\tfrac{2}{7}\approx0{,}2857`} />
                  <BlockMath math={String.raw`\displaystyle P(B_1\cap R_2)=\tfrac{3}{7}\times\tfrac{4}{6}=\tfrac{12}{42}=\tfrac{2}{7}\approx0{,}2857`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 8</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A\mid B)=\frac{P(A\cap B)}{P(B)}=\frac{0{,}168}{0{,}48}=0{,}35`} />
                  <p>Vérification immédiate : <InlineMath math={String.raw`0{,}48\times0{,}35=0{,}168`} />.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 9</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(F_1\cap D)=0{,}6\times0{,}03=0{,}018`} />
                  <BlockMath math={String.raw`\displaystyle P(F_2\cap D)=0{,}4\times0{,}08=0{,}032`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 10</summary>
                <div className="answer__content">
                  <p>
                    Avec remise ⇒ indépendance des tirages successifs, donc
                    <InlineMath math={String.raw`P(R_1\cap R_2)=P(R_1)P(R_2)`} />.
                  </p>
                  <p>
                    Sans remise ⇒ dépendance, il faut utiliser <InlineMath math={String.raw`P(R_1)\,P(R_2\mid R_1)`} />.
                  </p>
                </div>
              </details>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

