import { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import table10 from '/src/assets/img/tables/table10.png';
import graph24 from '/src/assets/img/graphs/graph24.png';
import graph18 from '/src/assets/img/graphs/graph18.png';
import graph25 from '/src/assets/img/graphs/graph25.png';
import table13 from '/src/assets/img/tables/table13.png';
import graph26 from '/src/assets/img/graphs/graph26.png';
import table14 from '/src/assets/img/tables/table14.png';
import table15 from '/src/assets/img/tables/table15.png';
import table16 from '/src/assets/img/tables/table16.png';
import graph16 from  '/src/assets/img/graphs/graph16.png';


export default function Section1Exercises() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(h => !h);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices — Lecture de limites</h2>
        <p className="m-4">
          Ces exercices s’appuient uniquement sur les méthodes vues dans la section : lecture d’un tableau de valeurs
          et lecture graphique des limites à gauche et à droite. La valeur <InlineMath math="f(a)" /> n’intervient pas
          dans la limite.
        </p>

        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 1</h3>
            <p>
              À partir d’un tableau de valeurs de <InlineMath math="f(x)" /> pour <InlineMath math="x" /> s’approchant de
              <InlineMath math="\,2" /> par la gauche et par la droite, on observe que <InlineMath math="f(x)" /> se
              rapproche de <InlineMath math="4" /> des deux côtés.
              Que peut-on conclure pour <InlineMath math={String.raw`\lim_{x\to 2} f(x)`} /> ?
            </p>
            <img src={table10} className="img" alt="graphique" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 2</h3>
            <p>
              Lecture graphique au voisinage de <InlineMath math="a=1" /> : la courbe s’approche d’une même hauteur proche de
              <InlineMath math="3" /> quand <InlineMath math="x\to 1^-" /> et <InlineMath math="x\to 1^+" />.
              Déterminez <InlineMath math={String.raw`\lim_{x\to 1} f(x)`} />.
            </p>
            <img src={graph24} className="img" alt="graphique" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 3</h3>
            <p>
              Dans un tableau, lorsque <InlineMath math="x" /> tend vers <InlineMath math="0" /> par la gauche,
              <InlineMath math="f(x)" /> devient très grand négatif, et par la droite, très grand positif.
              Concluez sur l’existence de la limite en <InlineMath math="0" /> et précisez, s’il y a lieu,
              le caractère infini à gauche/droite.
            </p>
            <img src={graph18} className="img" alt="graphique" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 4</h3>
            <p>
              Sur un graphique présentant un saut en <InlineMath math="x=a" />, on lit
              <InlineMath math={String.raw`\lim_{x\to a^-} f(x)=2`} /> et <InlineMath math={String.raw`\lim_{x\to a^+} f(x)=5`} />.
              La limite en <InlineMath math="a" /> existe-t-elle ? Justifiez.
            </p>
            <img src={graph25} className="img" alt="graphique" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 5</h3>
            <p>
              Un tableau montre que, lorsque <InlineMath math="x" /> s’approche de <InlineMath math="-1" /> des deux côtés,
              <InlineMath math="f(x)" /> tend vers <InlineMath math="0" />. Par ailleurs, on sait que
              <InlineMath math="f(-1)=7" />. Que vaut <InlineMath math={String.raw`\lim_{x\to -1} f(x)`} /> ?
            </p>
            <img src={table13} className="img" alt="graphique" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 6</h3>
            <p>
              Sur un graphique, quand <InlineMath math="x\to 3^-" />, la courbe descend sans borne
              (<InlineMath math="f(x)\to -\infty" />) et quand <InlineMath math="x\to 3^+" /> elle monte sans borne
              (<InlineMath math="f(x)\to +\infty" />). La limite en <InlineMath math="3" /> existe-t-elle ?
            </p>
            <img src={graph26} className="img" alt="graphique" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 7</h3>
            <p>
              À la lecture d’un tableau, on constate que pour <InlineMath math="x\to 5" /> des deux côtés, les valeurs
              de <InlineMath math="f(x)" /> s’approchent de <InlineMath math="-2" />. Écrivez la conclusion en notation
              de limite.
            </p>
            <img src={table14} className="img" alt="tableau" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 8</h3>
            <p>
              Lecture graphique : à l’approche de <InlineMath math="x=0" />, la courbe s’aligne vers une ordonnée commune
              <InlineMath math="L=1" /> à gauche comme à droite, mais le point tracé au-dessus de <InlineMath math="x=0" /> est à
              l’ordonnée <InlineMath math="4" />. Que vaut <InlineMath math={String.raw`\lim_{x\to 0} f(x)`} /> ?
            </p>
            <img src={table15} className="img" alt="graphique" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 9</h3>
            <p>
              Un tableau montre qu’à gauche de <InlineMath math="a=2" /> on a <InlineMath math="f(x)\to 3" /> et à droite
              <InlineMath math="f(x)\to 3,1" />. La limite en <InlineMath math="2" /> existe-t-elle ? Expliquez.
            </p>
            <img src={table16} className="img" alt="graphique" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 10</h3>
            <p>
              On lit sur un graphique qu’en <InlineMath math="x=a" />, les limites à gauche et à droite valent toutes
              deux <InlineMath math="L" />. Rédigez la conclusion en deux étapes : (1) limites unilatérales,
              (2) limite bilatérale.
            </p>
            <img src={graph16} className="img" alt="graphique" />
          </li>
        </ol>

        <div className="exercise__actions">
          <button className="prim-btn px-5 py-2.5 m-7" type="button" onClick={toggleHidden}>
            {hidden ? 'Afficher' : 'Masquer'} les réponses
          </button>
        </div>

        <div className="answers" hidden={hidden}>
          <p>
            Corrigés : s’appuyer sur la lecture à gauche et à droite (tableau/graphique), conclure sur l’existence de la
            limite et préciser si elle est finie, infinie, ou inexistante. Rappel : <InlineMath math="f(a)" /> ne
            détermine pas la limite.
          </p>
          <ol className="answer-list">
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 1</summary>
                <div className="answer__content">
                  <p>
                    Le tableau indique des tendances identiques à gauche et à droite vers <InlineMath math="4" />.
                    On conclut :
                  </p>
                  <BlockMath math={String.raw`\displaystyle \lim_{x\to 2} f(x) = 4`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 2</summary>
                <div className="answer__content">
                  <p>
                    La lecture graphique montre <InlineMath math={String.raw`\lim_{x\to 1^-} f(x)=3`} /> et
                    <InlineMath math={String.raw`\lim_{x\to 1^+} f(x)=3`} />, donc la limite bilatérale existe et vaut 3 :
                  </p>
                  <BlockMath math={String.raw`\displaystyle \lim_{x\to 1} f(x) = 3`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 3</summary>
                <div className="answer__content">
                  <p>
                    On lit <InlineMath math={String.raw`\lim_{x\to 0^-} f(x)=-\infty`} /> et
                    <InlineMath math={String.raw`\lim_{x\to 0^+} f(x)=+\infty`} />. Les limites unilatérales diffèrent et
                    sont infinies ; la limite bilatérale en 0 n’existe pas.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 4</summary>
                <div className="answer__content">
                  <p>
                    Comme <InlineMath math={String.raw`\lim_{x\to a^-} f(x)=2`} /> et
                    <InlineMath math={String.raw`\lim_{x\to a^+} f(x)=5`} /> sont différentes, la limite en
                    <InlineMath math="a" /> n’existe pas (discontinuité par saut).
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 5</summary>
                <div className="answer__content">
                  <p>
                    La limite se lit sur la tendance et non la valeur au point : même si
                    <InlineMath math="f(-1)=7" />, le tableau montre que <InlineMath math="f(x)\to 0" /> pour
                    <InlineMath math="x\to -1" />. Donc
                  </p>
                  <BlockMath math={String.raw`\displaystyle \lim_{x\to -1} f(x) = 0`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 6</summary>
                <div className="answer__content">
                  <p>
                    On a <InlineMath math={String.raw`\lim_{x\to 3^-} f(x)=-\infty`} /> et
                    <InlineMath math={String.raw`\lim_{x\to 3^+} f(x)=+\infty`} /> ; la limite en 3 n’existe pas (comportements
                    verticaux opposés).
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 7</summary>
                <div className="answer__content">
                  <p>
                    Les tendances à gauche et à droite vers <InlineMath math="-2" /> coïncident, d’où
                  </p>
                  <BlockMath math={String.raw`\displaystyle \lim_{x\to 5} f(x) = -2`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 8</summary>
                <div className="answer__content">
                  <p>
                    Le point isolé en <InlineMath math="(0,4)" /> n’influe pas sur la limite : la tendance à gauche et à droite
                    vaut <InlineMath math="1" />, donc
                  </p>
                    <BlockMath math={String.raw`\displaystyle \lim_{x\to 0} f(x) = 1`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 9</summary>
                <div className="answer__content">
                  <p>
                    Les limites unilatérales ne coïncident pas exactement (3 à gauche vs 3,1 à droite). On conclut que la
                    limite en <InlineMath math="2" /> n’existe pas (au sens bilatéral).
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 10</summary>
                <div className="answer__content">
                  <p>
                    Étape 1 : <InlineMath math={String.raw`\lim_{x\to a^-} f(x) = L`} /> et
                    <InlineMath math={String.raw`\lim_{x\to a^+} f(x) = L`} />.
                  </p>
                  <p>
                    Étape 2 : les deux limites unilatérales étant égales, on obtient
                  </p>
                  <BlockMath math={String.raw`\displaystyle \lim_{x\to a} f(x) = L`} />
                </div>
              </details>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

