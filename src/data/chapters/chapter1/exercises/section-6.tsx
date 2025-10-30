import React, { useState } from 'react';
import { InlineMath } from 'react-katex';
import graph9 from '/src/assets/img/graphs/graph9.png';

export default function Section6() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices</h2>
        <p className="m-4">Signe de <InlineMath math="f(x)" /> selon <InlineMath math="\Delta" /> et les racines.</p>
        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 1</h3><p>
            Étudiez le signe de <InlineMath math="f(x)=-2x^2+5x+3" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 2</h3><p>
            Étudiez le signe de <InlineMath math="f(x)=-x^2+4x-4" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 3</h3><p>
            Déterminez les intervalles où <InlineMath math="x^2+x+1" /> est négatif ou positif.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 4</h3><p>
            Donnez le tableau de signes de <InlineMath math="(x-1)(x-3)" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 5</h3><p>
            Étudiez le signe de <InlineMath math="3x^2-12x+9" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 6</h3><p>
            Pour <InlineMath math="-x^2-2x-3" />, indiquez le signe sur <InlineMath math="\mathbb{R}" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 7</h3><p>
            Donnez les solutions de <InlineMath math="x^2-5x+6>0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 8</h3><p>
            Donnez les solutions de <InlineMath math="-2x^2+8x-8\le 0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 9</h3><p>
            Étudiez le signe de <InlineMath math="f" />.
            <img src={graph9} alt="graph x-intercept -1 & 4 a>0" />
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 10</h3><p>
            Sans calcul, donnez le signe de <InlineMath math="(x+2)^2" />.
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
              Racines <InlineMath math="-\tfrac12" /> et <InlineMath math="3" />; <InlineMath math="a<0" /> donc signe: <InlineMath math=": +\; -\; +" /> sur <InlineMath math="(-\infty,-\tfrac12),\ (-\tfrac12,3),\ (3,+\infty)" /> inversé pour <InlineMath math="a<0" />: positif à l’extérieur, négatif entre racines.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 2</summary><div className="answer__content"><p>
              Racine double <InlineMath math="x=2" />; <InlineMath math="a<0" /> donc <InlineMath math="f\le0" /> pour tout <InlineMath math="x" />, nulle en <InlineMath math="2" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 3</summary><div className="answer__content"><p>
              <InlineMath math="\Delta<0" />, <InlineMath math="a>0" /> donc <InlineMath math=": f>0" /> sur <InlineMath math="\mathbb{R}" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 4</summary><div className="answer__content"><p>
              Zéros en 1 et 3, <InlineMath math="a>0" /> donc <InlineMath math=": +\; -\; +" /> (positif hors racines, négatif entre).
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 5</summary><div className="answer__content"><p>
              <InlineMath math="3(x-2)^2 - 3" /> a <InlineMath math=":\Delta=0?" /> En fait racine double en <InlineMath math="x=2" /> après division par 3: <InlineMath math="f=3(x-2)^2+?" /> Plus direct: <InlineMath math="\Delta=(-12)^2-4\cdot3\cdot9=144-108=36" />, racines <InlineMath math="1,3" />; signe <InlineMath math=": +\; -\; +" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 6</summary><div className="answer__content"><p>
              <InlineMath math="\Delta=4-12<0" />, <InlineMath math="a<0" /> donc <InlineMath math="f<0" /> sur <InlineMath math="\mathbb{R}" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 7</summary><div className="answer__content"><p>
              Racines 2 et 3; <InlineMath math="f>0" /> sur <InlineMath math="(-\infty,2)\cup(3,+\infty)" />, <InlineMath math="f<0" /> sur <InlineMath math="(2,3)" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 8</summary><div className="answer__content"><p>
              <InlineMath math="-2(x-2)^2\le0" /> pour tout <InlineMath math="x" />; vrai pour tout <InlineMath math="x" />, égalité en <InlineMath math="2" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 9</summary><div className="answer__content"><p>
              <InlineMath math="a>0" /> donc <InlineMath math="f>0" /> hors <InlineMath math="[-1,4]" />, <InlineMath math="f<0" /> sur <InlineMath math="(-1,4)" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 10</summary><div className="answer__content"><p>
              Toujours <InlineMath math="\ge 0" />, nul en <InlineMath math="x=-2" />.
            </p></div></details></li>
          </ol>
        </div>
      </section>
    </div>
  );
}

