import { useState } from 'react';
import { InlineMath } from 'react-katex';

export default function Section15() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices</h2>
        <p className="m-4">Changement de variable pour ramener au second degré.</p>
        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 1</h3><p>
            Résolvez <InlineMath math="x^4 - 5x^2 + 6 = 0" /> en posant <InlineMath math="X=x^2" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 2</h3><p>
            Résolvez <InlineMath math="x^4 - x^2 - 6 = 0" /> par <InlineMath math="X=x^2" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 3</h3><p>
            Résolvez <InlineMath math="(x^2+1)^2 - 10(x^2+1) + 9 = 0" /> en posant <InlineMath math="X=x^2+1" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 4</h3><p>
            Résolvez <InlineMath math="x^4 - 10x^2 + 25 = 0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 5</h3><p>
            Résolvez <InlineMath math="x^6 - 13x^3 + 36 = 0" /> par <InlineMath math="X=x^3" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 6</h3><p>
            Résolvez <InlineMath math="(x^2-2)^2 - 5(x^2-2) + 6 = 0" /> par <InlineMath math="X=x^2-2" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 7</h3><p>
            Résolvez <InlineMath math="x^4 + 2x^2 + 1 = 0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 8</h3><p>
            Résolvez <InlineMath math="4x^4 - 9x^2 = 0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 9</h3><p>
            Résolvez <InlineMath math="x^4 - 7x^2 + 12 = 0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 10</h3><p>
            Résolvez <InlineMath math="(x^2+3)^2 - 4(x^2+3) - 5 = 0" /> par <InlineMath math="X=x^2+3" />.
          </p></li>
        </ol>

        <div className="exercise__actions">
          <button className="prim-btn px-5 py-2.5 m-7" type="button" onClick={toggleHidden}>
            {hidden ? 'Afficher' : 'Masquer'} les réponses
          </button>
        </div>

        <div className="answers" hidden={hidden}>
          <p>
            Méthode: poser une nouvelle inconnue (par ex. <InlineMath math="X=x^2" /> ou <InlineMath math="X=x^3" />) pour ramener à un trinôme,
            résoudre en <InlineMath math="X" />, puis revenir à <InlineMath math="x" /> en tenant compte du domaine (par ex. <InlineMath math="X=x^2\ge0" />).
          </p>
          <ol className="answer-list">
            <li className="answer"><details className="answer__details"><summary>Exercice 1</summary><div className="answer__content"><p>
              <InlineMath math="X^2-5X+6=0\Rightarrow X=2,3" /> donc <InlineMath math="x=\pm\sqrt{2},\ \pm\sqrt{3}" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 2</summary><div className="answer__content"><p>
              <InlineMath math="X^2-X-6=0\Rightarrow X=3,\ -2" /> donc <InlineMath math="x=\pm\sqrt{3}" /> (pas de réel pour <InlineMath math="X=-2" />).
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 3</summary><div className="answer__content"><p>
              <InlineMath math="X^2-10X+9=0\Rightarrow X=1,9" /> donc <InlineMath math="x^2+1=1\Rightarrow x=0" /> ou <InlineMath math="x^2+1=9\Rightarrow x=\pm\sqrt{8}" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 4</summary><div className="answer__content"><p>
              <InlineMath math="(x^2-5)^2=0\Rightarrow x=\pm\sqrt{5}" /> (double).
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 5</summary><div className="answer__content"><p>
              <InlineMath math="X^2-13X+36=0\Rightarrow X=4,9" /> donc <InlineMath math="x=\pm\sqrt[3]{4},\ \pm\sqrt[3]{9}" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 6</summary><div className="answer__content"><p>
              <InlineMath math="X^2-5X+6=0\Rightarrow X=2,3" /> donc <InlineMath math="x^2-2=2\Rightarrow x=\pm2" /> ou <InlineMath math="x^2-2=3\Rightarrow x=\pm\sqrt{5}" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 7</summary><div className="answer__content"><p>
              <InlineMath math="(x^2+1)^2=0\Rightarrow x^2+1=0" />: pas de solution réelle.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 8</summary><div className="answer__content"><p>
              <InlineMath math="x^2(4x^2-9)=0\Rightarrow x=0" /> (double) ou <InlineMath math="x=\pm\tfrac{3}{2}" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 9</summary><div className="answer__content"><p>
              <InlineMath math="X^2-7X+12=0\Rightarrow X=3,4" /> donc <InlineMath math="x=\pm\sqrt{3},\ \pm2" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 10</summary><div className="answer__content"><p>
              <InlineMath math="X^2-4X-5=0\Rightarrow X=5,\ -1" /> donc <InlineMath math="x=\pm\sqrt{2}" />? Attention: <InlineMath math="X=5" /> donne <InlineMath math="x^2+3=5\Rightarrow x=\pm\sqrt{2}" />, <InlineMath math="X=-1" /> aucune solution réelle.
            </p></div></details></li>
          </ol>
        </div>
      </section>
    </div>
  );
}
