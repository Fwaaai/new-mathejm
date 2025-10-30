import { useState } from 'react';
import { InlineMath } from 'react-katex';
import graph7 from '/src/assets/img/graphs/graph7.png';
export default function Section3() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices</h2>
        <p className="m-4">Exercices sur l’axe de symétrie d’une parabole.</p>
        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 1</h3><p>
            Donnez l’axe de symétrie de <InlineMath math="f(x) = -x^2 + 6x - 5" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 2</h3><p>
            Déterminez l’axe de symétrie de <InlineMath math="f(x) = 2x^2 - 4x + 9" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 3</h3><p>
            Trouvez l’axe de symétrie pour <InlineMath math="f(x) = -\tfrac12 x^2 - x + 7" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 4</h3><p>
            Donnez l’axe de symétrie pour <InlineMath math="f(x) = 5x^2 + 20x + 1" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 5</h3><p>
            Déterminez l’axe de symétrie de <InlineMath math="f(x) = -3x^2 + 12x - 8" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 6</h3><p>
            Donnez l’axe de symétrie de <InlineMath math="f(x) = x^2 + 6x + 2" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 7</h3><p>
            Trouvez l’axe de symétrie pour <InlineMath math="f(x) = -4x^2 - 8x + 3" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 8</h3><p>
            Une parabole a un sommet d’abscisse <InlineMath math="\alpha = -3" />. Donnez son axe de symétrie.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 9</h3><p>
            Écrivez l'équation de l'axe de symétrie de cette fonction.
            <img src={graph7} alt="graph vertex x=2" />
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 10</h3><p>
            La fonction <InlineMath math="f" /> vérifie <InlineMath math="\alpha = \tfrac{b}{-2a}" />.
            Si <InlineMath math="a=1" /> et <InlineMath math="b=-6" />, donnez l’axe de symétrie.
          </p></li>
        </ol>

        <div className="exercise__actions">
          <button className="prim-btn px-5 py-2.5 m-7" type="button" onClick={toggleHidden}>
            {hidden ? 'Afficher' : 'Masquer'} les réponses
          </button>
        </div>

        <div className="answers" hidden={hidden}>
          <p>
            Rappel de méthode: pour <InlineMath math="f(x)=ax^2+bx+c" />, l’abscisse du sommet est
            <InlineMath math="\alpha=-\tfrac{b}{2a}" /> et l’axe de symétrie est la droite verticale
            <InlineMath math="x=\alpha" />. Depuis la forme canonique <InlineMath math="f(x)=a(x-\alpha)^2+\beta" />, l’axe est
            immédiatement <InlineMath math="x=\alpha" />.
          </p>
          <ol className="answer-list">
            <li className="answer"><details className="answer__details"><summary>Exercice 1</summary><div className="answer__content"><p>
              <InlineMath math="a=-1,\ b=6" />. Calcul: <InlineMath math="\alpha=-\tfrac{b}{2a}=-\tfrac{6}{2(-1)}=3" />.
              Axe de symétrie: <InlineMath math="x=3" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 2</summary><div className="answer__content"><p>
              <InlineMath math="a=2,\ b=-4" />. <InlineMath math="\alpha=-\tfrac{-4}{2\cdot2}=1" />. Axe <InlineMath math="x=1" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 3</summary><div className="answer__content"><p>
              <InlineMath math="a=-\tfrac12,\ b=-1" />. <InlineMath math="\alpha=-\tfrac{-1}{2(-\tfrac12)}=1" />. Axe <InlineMath math="x=1" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 4</summary><div className="answer__content"><p>
              <InlineMath math="a=5,\ b=20" />. <InlineMath math="\alpha=-\tfrac{20}{10}=-2" />. Axe <InlineMath math="x=-2" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 5</summary><div className="answer__content"><p>
              <InlineMath math="a=-3,\ b=12" />. <InlineMath math="\alpha=-\tfrac{12}{-6}=2" />. Axe <InlineMath math="x=2" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 6</summary><div className="answer__content"><p>
              <InlineMath math="a=1,\ b=6" />. <InlineMath math="\alpha=-3" />. Axe <InlineMath math="x=-3" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 7</summary><div className="answer__content"><p>
              <InlineMath math="a=-4,\ b=-8" />. <InlineMath math="\alpha=-\tfrac{-8}{-8}=-1" />. Axe <InlineMath math="x=-1" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 8</summary><div className="answer__content"><p>
              Sommet d’abscisse <InlineMath math="-3" />. Axe <InlineMath math="x=-3" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 9</summary><div className="answer__content"><p>
              Lecture graphique: abscisse du sommet <InlineMath math="2" />. Axe <InlineMath math="x=2" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 10</summary><div className="answer__content"><p>
              Données <InlineMath math="a=1,\ b=-6" />. <InlineMath math="\alpha=-\tfrac{-6}{2}=3" />. Axe <InlineMath math="x=3" />.
            </p></div></details></li>
          </ol>
        </div>
      </section>
    </div>
  );
};
