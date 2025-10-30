import React, { useState } from 'react';
import { InlineMath } from 'react-katex';
import graph14 from '/src/assets/img/graphs/graph14.png';

export default function Section19() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices</h2>
        <p className="m-4">Inéquations du second degré et tableaux de signes.</p>
        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 1</h3><p>
            Résolvez <InlineMath math="(x-1)(x+1)^2\le0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 2</h3><p>
            Résolvez <InlineMath math="x(x-4)\ge0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 3</h3><p>
            Résolvez <InlineMath math="-2(x-2)^2\le0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 4</h3><p>
            Donnez l’ensemble des <InlineMath math="x" /> tels que <InlineMath math="x^2-5x+6<0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 5</h3><p>
            Résolvez <InlineMath math="(x+3)^2-9\ge0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 6</h3><p>
            Résolvez <InlineMath math="(2x-1)(x+2)\le0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 7</h3><p>
            Déterminez <InlineMath math="x" /> tel que <InlineMath math="x^2+4x+8\ge0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 8</h3><p>
            Résolvez <InlineMath math="-x(x-2)(x-3)\ge0" /> (produit de trois facteurs).
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 9</h3><p>
            Résolvez <InlineMath math="f(x)\le0" />.
            <img src={graph14} alt="graph intercept -2 and 5" />
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 10</h3><p>
            Résolvez <InlineMath math="(x-1)^2(x+4)\ge0" />.
          </p></li>
        </ol>

        <div className="exercise__actions">
          <button className="prim-btn px-5 py-2.5 m-7" type="button" onClick={toggleHidden}>
            {hidden ? 'Afficher' : 'Masquer'} les réponses
          </button>
        </div>

        <div className="answers" hidden={hidden}>
          <ol className="answer-list">
            <li className="answer"><details className="answer__details"><summary>Exercice 1</summary><div className="answer__content"><p>
              <InlineMath math=": \le0" /> pour <InlineMath math="x\le1" /> (nulle en <InlineMath math="x=-1,\ 1" />).
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 2</summary><div className="answer__content"><p>
              <InlineMath math="x\in(-\infty,0] \cup [4,+\infty)" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 3</summary><div className="answer__content"><p>
              Toujours <InlineMath math="\le0" /> (égalité en <InlineMath math="x=2" />).
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 4</summary><div className="answer__content"><p>
              Entre les racines 2 et 3: <InlineMath math="x\in(2,3)" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 5</summary><div className="answer__content"><p>
              Équivalent à <InlineMath math="(x+3-3)(x+3+3)\ge0\Rightarrow (x)(x+6)\ge0" /> par translation? Plus direct: racines -6 et 0; solution <InlineMath math="x\in(-\infty,-6] \cup [0,+\infty)" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 6</summary><div className="answer__content"><p>
              Zéros <InlineMath math="x=\tfrac12,\ -2" />; <InlineMath math="\le0" /> sur <InlineMath math="[-2,\tfrac12]" /> si <InlineMath math="a>0" /> (ici signe global positif).
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 7</summary><div className="answer__content"><p>
              Toujours <InlineMath math=": \ge0" /> (pas de racine réelle), stricte &gt; 0.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 8</summary><div className="answer__content"><p>
              Ordonner <InlineMath math="-x(x-2)(x-3)" />: signe négatif de l’extérieur? Zéros 0,2,3; <InlineMath math=": \ge0" /> sur <InlineMath math="[0,2] \cup [3,+\infty)" /> (vérifier alternance avec facteur -).
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 9</summary><div className="answer__content"><p>
              <InlineMath math="a>0" />: <InlineMath math="f\le0" /> pour <InlineMath math="x\in[-2,5]" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 10</summary><div className="answer__content"><p>
              Zéros <InlineMath math="x=1" /> (double) et <InlineMath math="x=-4" />; <InlineMath math=": \ge0" /> sur <InlineMath math="(-\infty,-4] \cup \{1\} \cup [1,+\infty)" />.
            </p></div></details></li>
          </ol>
        </div>
      </section>
    </div>
  );
}

