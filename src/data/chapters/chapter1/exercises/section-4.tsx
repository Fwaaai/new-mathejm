import { useState } from 'react';
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
              Poser <InlineMath math="a=-1,\ b=4,\ c=5" />. Discriminant <InlineMath math="\Delta=b^2-4ac=16-4(-1)\cdot5=36" />.</p>
              <p>Deux racines: <InlineMath math="x=\tfrac{-b\pm\sqrt\Delta}{2a}=\tfrac{-4\pm6}{-2}\Rightarrow x=-1,\ 5" />.</p>
            </div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 2</summary><div className="answer__content"><p>
              <InlineMath math="a=1,\ b=-2,\ c=1" />. <InlineMath math="\Delta=(-2)^2-4\cdot1\cdot1=0" /> donc une racine double en <InlineMath math="x=\tfrac{-b}{2a}=1" />.</p>
            </div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 3</summary><div className="answer__content"><p>
              Astuce: si <InlineMath math="a+b+c=0" />, alors <InlineMath math="x=1" /> est racine et l’autre vaut <InlineMath math="\tfrac{c}{a}" />.</p>
              <p>Ici <InlineMath math="2-3+1=0" /> donc <InlineMath math="x_1=1" /> et <InlineMath math="x_2=\tfrac{1}{2}" />.</p>
            </div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 4</summary><div className="answer__content"><p>
              Autre astuce: si <InlineMath math="a-b+c=0" />, alors <InlineMath math="x=-1" /> est racine et l’autre vaut <InlineMath math="-\tfrac{c}{a}" />.</p>
              <p>Ici <InlineMath math="2-3+1=0" /> donc <InlineMath math="x_1=-1" /> et <InlineMath math="x_2=-\tfrac{1}{2}" />.</p>
            </div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 5</summary><div className="answer__content"><p>
              <InlineMath math="a=3,\ b=-6,\ c=2" />. <InlineMath math="\Delta=36-24=12" />.</p>
              <p>Racines: <InlineMath math="x=\tfrac{6\pm\sqrt{12}}{6}=\tfrac{6\pm2\sqrt3}{6}=\tfrac{3\pm\sqrt3}{3}" />.</p>
            </div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 6</summary><div className="answer__content"><p>
              <InlineMath math="a=1,\ b=4,\ c=8" />. <InlineMath math="\Delta=16-32=-16<0" /> donc aucune solution réelle.</p>
            </div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 7</summary><div className="answer__content"><p>
              <InlineMath math="a=-2,\ b=1,\ c=3" />. <InlineMath math="\Delta=1-4(-2)\cdot3=25" />.</p>
              <p>Racines: <InlineMath math="x=\tfrac{-1\pm5}{-4}\Rightarrow x=-\tfrac12,\ 3" />.</p>
            </div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 8</summary><div className="answer__content"><p>
              Factoriser: <InlineMath math="x^2-5x+6=(x-2)(x-3)" /> donc <InlineMath math="x=2" /> ou <InlineMath math="x=3" />.</p>
            </div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 9</summary><div className="answer__content"><p>
              Vérification: <InlineMath math="f(1)=1-3+2=0" /> donc <InlineMath math="(x-1)" /> est facteur; division donne <InlineMath math="(x-1)(x-2)=0" />, ainsi <InlineMath math="x=1,2" />.</p>
            </div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 10</summary><div className="answer__content"><p>
              <InlineMath math="a=-1,\ b=-4,\ c=-4" />. <InlineMath math="\Delta=16-16=0" /> donc racine double en <InlineMath math="x=\tfrac{-b}{2a}=-2" />.</p>
            </div></details></li>
          </ol>
        </div>
      </section>
    </div>
  );
}
