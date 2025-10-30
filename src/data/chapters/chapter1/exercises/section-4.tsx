import React, { useState } from 'react';
import { InlineMath } from 'react-katex';

export default function Section4() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices</h2>
        <p className="m-4">Racines d’un trinôme par le discriminant et cas particuliers.</p>
        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 1</h3><p>
            Résolvez <InlineMath math="-x^2 + 4x + 5 = 0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 2</h3><p>
            Résolvez <InlineMath math="x^2 - 2x + 1 = 0" /> et précisez la nature des racines.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 3</h3><p>
            Résolvez <InlineMath math="2x^2 - 3x + 1 = 0" /> (indice: <InlineMath math="a+b+c=0" />).
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 4</h3><p>
            Résolvez <InlineMath math="2x^2 + 3x + 1 = 0" /> (indice: <InlineMath math="a-b+c=0" />).
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 5</h3><p>
            Résolvez <InlineMath math="3x^2 - 6x + 2 = 0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 6</h3><p>
            Étudiez les solutions de <InlineMath math="x^2 + 4x + 8 = 0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 7</h3><p>
            Résolvez <InlineMath math="-2x^2 + x + 3 = 0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 8</h3><p>
            Résolvez <InlineMath math="x^2 - 5x + 6 = 0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 9</h3><p>
            Justifiez que <InlineMath math="x=1" /> est une racine de <InlineMath math="x^2 - 3x + 2 = 0" /> et résolvez.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 10</h3><p>
            Donnez le discriminant et les racines de <InlineMath math="-x^2 - 4x - 4 = 0" />.
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
              <InlineMath math="\Delta=4^2-4(-1)(5)=36" /> donc <InlineMath math="x=-1,\ 5" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 2</summary><div className="answer__content"><p>
              <InlineMath math="\Delta=0" /> racine double <InlineMath math="x=1" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 3</summary><div className="answer__content"><p>
              <InlineMath math="a+b+c=0" /> donc <InlineMath math="x_1=1,\ x_2=\tfrac{c}{a}=\tfrac{1}{2}" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 4</summary><div className="answer__content"><p>
              <InlineMath math="a-b+c=0" /> donc <InlineMath math="x_1=-1,\ x_2=-\tfrac{c}{a}=-\tfrac{1}{2}" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 5</summary><div className="answer__content"><p>
              <InlineMath math="\Delta=(-6)^2-4\cdot3\cdot2=36-24=12" />, racines <InlineMath math="\tfrac{6\pm\sqrt{12}}{6}=\tfrac{3\pm\sqrt{3}}{3}" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 6</summary><div className="answer__content"><p>
              <InlineMath math="\Delta=16-32=-16<0" /> pas de solution réelle.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 7</summary><div className="answer__content"><p>
              <InlineMath math="\Delta=1+24=25" />, racines <InlineMath math="x=\tfrac{-1\pm5}{-4}\Rightarrow x=-\tfrac{1}{2},\ 3" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 8</summary><div className="answer__content"><p>
              Factorisation: <InlineMath math="(x-2)(x-3)=0\Rightarrow x=2,3" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 9</summary><div className="answer__content"><p>
              <InlineMath math="f(1)=0" />; ensuite <InlineMath math="(x-1)(x-2)=0\Rightarrow x=1,2" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 10</summary><div className="answer__content"><p>
              <InlineMath math="\Delta=(-4)^2-4(-1)(-4)=16-16=0" />, racine double <InlineMath math="x=\tfrac{-(-4)}{2(-1)}=-2" />.
            </p></div></details></li>
          </ol>
        </div>
      </section>
    </div>
  );
}

