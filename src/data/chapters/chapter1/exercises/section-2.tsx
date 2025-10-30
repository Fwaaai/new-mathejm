import { useState } from 'react';
import { InlineMath } from 'react-katex';
import graph6 from '/src/assets/img/graphs/graph6.png';

export default function Section2() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices</h2>
        <p className="m-4">
          Exercices sur les coordonnées du sommet à partir d’une forme développée
          ou d’indices graphiques.
        </p>
        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 1</h3>
            <p>
              Déterminez le sommet <InlineMath math="S(\alpha,\,\beta)" /> de
              <InlineMath math="f(x) = -x^2 + 6x - 5" />.
            </p>
          </li>
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 2</h3>
            <p>
              Trouvez <InlineMath math="(\alpha,\,\beta)" /> pour 
              <InlineMath math="f(x) = 3x^2 - 12x + 11" />.
            </p>
          </li>
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 3</h3>
            <p>
              Calculez le sommet de <InlineMath math="f(x) = 2x^2 + 8x - 1" />.
            </p>
          </li>
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 4</h3>
            <p>
              Déterminez <InlineMath math="S" /> pour
              <InlineMath math="f(x) = -2x^2 - 4x + 3" />.
            </p>
          </li>
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 5</h3>
            <p>
              On considère <InlineMath math="f(x) = x^2 - 10x + 29" />. Donnez
              les coordonnées de <InlineMath math="S" />.
            </p>
          </li>
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 6</h3>
            <p>
              Déterminez <InlineMath math="S" /> pour
              <InlineMath math="f(x) = -\tfrac{1}{2}x^2 + 3x - 2" />.
            </p>
          </li>
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 7</h3>
            <p>
              À partir de <InlineMath math="f(x) = 4x^2 - 4x + 7" />, calculez
              <InlineMath math="\alpha" /> et <InlineMath math="\beta" />.
            </p>
          </li>
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 8</h3>
            <p>
              Déterminez le sommet de
              <InlineMath math="f(x) = -3x^2 + 2x + 1" />.
            </p>
          </li>
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 9</h3>
            <p> Donnez les coordonnées du sommet <InlineMath math="S" />.
              <img src={graph6} alt="graph which has vertex -1, 4" />
            </p>
          </li>
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 10</h3>
            <p>
              La fonction <InlineMath math="f(x) = ax^2 + bx + c" /> a pour
              sommet <InlineMath math="S(3, -2)" />. Donnez
              <InlineMath math="\alpha" /> et <InlineMath math="\beta" /> puis
              proposez une expression canonique possible pour <InlineMath math="f" />.
            </p>
          </li>
        </ol>

        <div className="exercise__actions">
          <button className="prim-btn px-5 py-2.5 m-7" type="button" onClick={toggleHidden}>
            {hidden ? 'Afficher' : 'Masquer'} les réponses
          </button>
        </div>

        <div className="answers" hidden={hidden}>
          <p>
            Méthode commune: pour <InlineMath math="f(x)=ax^2+bx+c" />, on calcule
            <InlineMath math="\alpha=-\tfrac{b}{2a}" /> puis <InlineMath math="\beta=f(\alpha)" />. On peut aussi compléter le carré
            pour retrouver la forme canonique <InlineMath math="a(x-\alpha)^2+\beta" />.
          </p>
          <ol className="answer-list">
            <li className="answer">
              <details className="answer__details"><summary>Exercice 1</summary><div className="answer__content">
                <p><InlineMath math="a=-1,\ b=6,\ c=-5" />. <InlineMath math="\alpha = -\tfrac{6}{2(-1)} = 3" />.</p>
                <p><InlineMath math="\beta=f(3)=-3^2+6\cdot3-5=-9+18-5=4" />. Donc <InlineMath math="S(3,4)" />.</p>
              </div></details>
            </li>
            <li className="answer">
              <details className="answer__details"><summary>Exercice 2</summary><div className="answer__content">
                <p><InlineMath math="a=3,\ b=-12,\ c=11" />. <InlineMath math="\alpha = \tfrac{12}{6}=2" />.</p>
                <p><InlineMath math="\beta=f(2)=3\cdot4-24+11=-1" />. Donc <InlineMath math="S(2,-1)" />.</p>
              </div></details>
            </li>
            <li className="answer">
              <details className="answer__details"><summary>Exercice 3</summary><div className="answer__content">
                <p><InlineMath math="a=2,\ b=8,\ c=-1" />. <InlineMath math="\alpha=-\tfrac{8}{4}=-2" />.</p>
                <p><InlineMath math="\beta=f(-2)=2\cdot4+8(-2)-1=8-16-1=-9" />. Donc <InlineMath math="S(-2,-9)" />.</p>
              </div></details>
            </li>
            <li className="answer">
              <details className="answer__details"><summary>Exercice 4</summary><div className="answer__content">
                <p><InlineMath math="a=-2,\ b=-4,\ c=3" />. <InlineMath math="\alpha=-\tfrac{-4}{2(-2)}=-1" />.</p>
                <p><InlineMath math="\beta=f(-1)=-2\cdot1-4(-1)+3=-2+4+3=5" />. Donc <InlineMath math="S(-1,5)" />.</p>
              </div></details>
            </li>
            <li className="answer">
              <details className="answer__details"><summary>Exercice 5</summary><div className="answer__content">
                <p><InlineMath math="a=1,\ b=-10,\ c=29" />. <InlineMath math="\alpha=5" />, <InlineMath math="\beta=f(5)=25-50+29=4" />. Donc <InlineMath math="S(5,4)" />.</p>
              </div></details>
            </li>
            <li className="answer">
              <details className="answer__details"><summary>Exercice 6</summary><div className="answer__content">
                <p><InlineMath math="a=-\tfrac12,\ b=3,\ c=-2" />. <InlineMath math="\alpha = -\tfrac{3}{2(-\tfrac12)}=3" />.</p>
                <p><InlineMath math="\beta=f(3)=-\tfrac12\cdot9+9-2=\tfrac{5}{2}" />. Donc <InlineMath math="S(3,\tfrac{5}{2})" />.</p>
              </div></details>
            </li>
            <li className="answer">
              <details className="answer__details"><summary>Exercice 7</summary><div className="answer__content">
                <p><InlineMath math="a=4,\ b=-4,\ c=7" />. <InlineMath math="\alpha=\tfrac{1}{2}" />.</p>
                <p><InlineMath math="\beta=f(\tfrac12)=4\cdot\tfrac14-2+7=6" />. Donc <InlineMath math="S(\tfrac12,6)" />.</p>
              </div></details>
            </li>
            <li className="answer">
              <details className="answer__details"><summary>Exercice 8</summary><div className="answer__content">
                <p><InlineMath math="a=-3,\ b=2,\ c=1" />. <InlineMath math="\alpha=\tfrac{1}{3}" />.</p>
                <p><InlineMath math="\beta=f(\tfrac13)=-3\cdot\tfrac19+\tfrac{2}{3}+1=\tfrac{10}{9}" />. Donc <InlineMath math="S(\tfrac13,\tfrac{10}{9})" />.</p>
              </div></details>
            </li>
            <li className="answer">
              <details className="answer__details"><summary>Exercice 9</summary><div className="answer__content">
                <p>Lecture graphique (sommet le plus haut): <InlineMath math="S(-1,4)" /> environ; vérifier abscisse au milieu des zéros si visibles.</p>
              </div></details>
            </li>
            <li className="answer">
              <details className="answer__details"><summary>Exercice 10</summary><div className="answer__content">
                <p>Sommet imposé <InlineMath math="S(3,-2)" />: la forme canonique est <InlineMath math="f(x)=a(x-3)^2-2" /> avec <InlineMath math="a\neq0" />.</p>
                <p>Exemple possible: <InlineMath math="a=1" /> donc <InlineMath math="f(x)=(x-3)^2-2" />; toute valeur de <InlineMath math="a" /> conserve le même sommet.</p>
              </div></details>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
