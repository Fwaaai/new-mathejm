import { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import table30 from '/src/assets/img/tables/table30.png';
import table31 from '/src/assets/img/tables/table31.png';
import diagram7 from '/src/assets/img/diagrams/diagram7.png';
import table32 from '/src/assets/img/tables/table32.png';
import diagram8 from '/src/assets/img/diagrams/diagram8.png';

export default function Section6Exercises() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(h => !h);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices — Tableaux 2×2 et arbres pondérés</h2>
        <p className="m-4">
          Exercices limités aux lectures/calculs sur tableaux à double entrée et arbres pondérés, en appliquant
          <InlineMath math={String.raw`\,P(A\cap B)\text{ dans la case d'intersection},\ P(B)\text{ sur la marge}`} />
          et le produit le long des branches <InlineMath math={String.raw`\,P(B)\,P(A\mid B)`} />, avec éventuelle somme de chemins.
        </p>

        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 1</h3>
            <p>
              À partir d'un tableau d'effectifs (N=200) pour <InlineMath math={String.raw`A/\overline{A}`} /> et <InlineMath math={String.raw`B/\overline{B}`} />, calculez
              <InlineMath math={String.raw`P(A)`} />, <InlineMath math={String.raw`P(B)`} />,
              <InlineMath math={String.raw`P(A\cap B)`} /> et <InlineMath math={String.raw`P(A\mid B)`} />.
            </p>
            <img src={table30} alt="Tableau 2×2" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 2</h3>
            <p>
              Complétez un tableau de probabilités (cohérent) puis lisez <InlineMath math={String.raw`P(B)`} /> et
              <InlineMath math={String.raw`P(\overline{A}\mid B)`} />.
            </p>
            <img src={table31} alt="Tableau 2×2" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 3</h3>
            <p>
              Sur un arbre pondéré: <InlineMath math={String.raw`P(B)=0{,}6`} />, <InlineMath math={String.raw`P(\overline{B})=0{,}4`} /> ;
              <InlineMath math={String.raw`P(A\mid B)=0{,}3`} /> et <InlineMath math={String.raw`P(A\mid \overline{B})=0{,}5`} />.
              Calculez <InlineMath math={String.raw`P(A\cap B)`} />, <InlineMath math={String.raw`P(A)`} /> et
              <InlineMath math={String.raw`P(A\mid B)`} /> par lecture/prod/somme.
            </p>

          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 4</h3>
            <p>
              À partir d’un arbre, calculez la probabilité totale <InlineMath math={String.raw`P(A)`} /> en sommant des chemins et <InlineMath math={String.raw`P(\overline{A}\cap B)`} />.
            </p>
            <img src={diagram7} alt="Diagramme 7" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 5</h3>
            <p>
              Un tableau partiel donne les marges: <InlineMath math={String.raw`P(B)=0{,}48`} />,
              <InlineMath math={String.raw`P(A)=0{,}35`} /> et l’intersection <InlineMath math={String.raw`P(A\cap B)=0{,}21`} />.
              Construisez le tableau complet (les quatre cases) et lisez <InlineMath math={String.raw`P(\overline{A}\cap \overline{B})`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 6</h3>
            <p>
              Sur un arbre pondéré, on lit <InlineMath math={String.raw`P(B)=0{,}3`} /> et
              <InlineMath math={String.raw`P(A\mid B)=0{,}6`} />, <InlineMath math={String.raw`P(A\mid \overline{B})=0{,}2`} />.
              Calculez <InlineMath math={String.raw`P(A\cap B)`} />, <InlineMath math={String.raw`P(A\cap \overline{B})`} /> et
              <InlineMath math={String.raw`P(A)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 7</h3>
            <p>
              On donne un tableau d’effectifs (N=150): <InlineMath math={String.raw`n(A\cap B)=30`} />,
              <InlineMath math={String.raw`n(A\cap \overline{B})=45`} />,
              <InlineMath math={String.raw`n(\overline{A}\cap B)=25`} />,
              <InlineMath math={String.raw`n(\overline{A}\cap \overline{B})=50`} />. Calculez
              <InlineMath math={String.raw`P(B\mid A)`} /> et <InlineMath math={String.raw`P(A\mid B)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 8</h3>
            <p>
              À partir d’un tableau de probabilités, on lit :
              {" "}
              <InlineMath math={String.raw`A\setminus B = 0{,}22`} /> ;
              {" "}
              <InlineMath math={String.raw`B\setminus A = 0{,}18`} /> ;
              {" "}
              <InlineMath math={String.raw`A\cap B = 0{,}20`} /> ;
              {" "}
              extérieur <InlineMath math={String.raw`= 0{,}40`} />.
              {" "}
              Donnez les marges et lisez <InlineMath math={String.raw`P(\overline{A}\cap B)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 9</h3>
            <p>
              Peut-on avoir <InlineMath math={String.raw`P(A)=0{,}30`} />,
              <InlineMath math={String.raw`P(B)=0{,}20`} /> et <InlineMath math={String.raw`P(A\cap B)=0{,}25`} /> ? 
            </p>
            <BlockMath math= {String.raw`\boxed{P(A \cap B) \le \min(P(A), P(B))}`} />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 10</h3>
            <p>
              Convertissez un tableau 2×2 en arbre: déduisez <InlineMath math={String.raw`P(B)`} />,
              <InlineMath math={String.raw`P(A\mid B)`} /> et <InlineMath math={String.raw`P(A\mid \overline{B})`} /> à partir des cases.
            </p>
            <img src={table32} alt="Tableau 2×2" />
          </li>
        </ol>

        <div className="exercise__actions">
          <button className="prim-btn px-5 py-2.5 m-7" type="button" onClick={toggleHidden}>
            {hidden ? "Afficher" : "Masquer"} les réponses
          </button>
        </div>

        <div className="answers" hidden={hidden}>
          <p>
            Utiliser: cases/marges sur tableaux et produits/sommes sur arbres.
          </p>
          <ol className="answer-list">
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 1</summary>
                <div className="answer__content">
                  <p>Avec N=200:</p>
                  <BlockMath math={String.raw`\displaystyle P(A)=\tfrac{56+24}{200}=0{,}40,\quad P(B)=\tfrac{56+44}{200}=0{,}50`} />
                  <BlockMath math={String.raw`\displaystyle P(A\cap B)=\tfrac{56}{200}=0{,}28,\quad P(A\mid B)=\tfrac{56/200}{100/200}=\tfrac{56}{100}=0{,}56`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 2</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(B)=0{,}28+0{,}22=0{,}50`} />
                  <BlockMath math={String.raw`\displaystyle P(\overline{A}\mid B)=\frac{0{,}22}{0{,}50}=0{,}44`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 3</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A\cap B)=0{,}6\times0{,}3=0{,}18`} />
                  <BlockMath math={String.raw`\displaystyle P(A)=0{,}6\times0{,}3+0{,}4\times0{,}5=0{,}18+0{,}20=0{,}38`} />
                  <p>La lecture de <InlineMath math={String.raw`P(A\mid B)`} /> est déjà donnée: 0,3.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 4</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A)=0{,}55\times0{,}25+0{,}45\times0{,}40=0{,}1375+0{,}18=0{,}3175`} />
                  <BlockMath math={String.raw`\displaystyle P(\overline{A}\cap B)=0{,}55\times(1-0{,}25)=0{,}55\times0{,}75=0{,}4125`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 5</summary>
                <div className="answer__content">
                  <p>Les quatre cases:</p>
                  <BlockMath math={String.raw`\displaystyle P(A\cap B)=0{,}21,\ P(A\cap \overline{B})=0{,}35-0{,}21=0{,}14`} />
                  <BlockMath math={String.raw`\displaystyle P(\overline{A}\cap B)=0{,}48-0{,}21=0{,}27,\ P(\overline{A}\cap \overline{B})=1-0{,}21-0{,}14-0{,}27=0{,}38`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 6</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A\cap B)=0{,}3\times0{,}6=0{,}18`} />
                  <BlockMath math={String.raw`\displaystyle P(A\cap \overline{B})=0{,}4\times0{,}2=0{,}08`} />
                  <BlockMath math={String.raw`\displaystyle P(A)=0{,}18+0{,}08=0{,}26`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 7</summary>
                <div className="answer__content">
                  <p>N=150, lignes/colonnes:</p>
                  <BlockMath math={String.raw`\displaystyle P(B\mid A)=\frac{30/150}{(30+45)/150}=\frac{30}{75}=0{,}40`} />
                  <BlockMath math={String.raw`\displaystyle P(A\mid B)=\frac{30/150}{(30+25)/150}=\frac{30}{55}=\frac{6}{11}\approx0{,}5455`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 8</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A)=0{,}22+0{,}20=0{,}42,\quad P(B)=0{,}18+0{,}20=0{,}38`} />
                  <BlockMath math={String.raw`\displaystyle P(\overline{A}\cap B)=0{,}18`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 9</summary>
                <div className="answer__content">
                  <p>Impossible car <InlineMath math={String.raw`P(A\cap B)\le\min(P(A),P(B))`} /> ; ici 0,25 &gt; 0,20.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 10</summary>
                <div className="answer__content">
                  <img src={diagram8} alt="diagram 8" />
                </div>
              </details>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
