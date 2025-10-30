import { useState } from 'react';
import { InlineMath } from 'react-katex';
import graph11 from '/src/assets/img/graphs/graph11.png';
import graph12 from '/src/assets/img/graphs/graph12.png';
import graph13 from '/src/assets/img/graphs/graph13.png';

export default function Section14() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices</h2>
        <p className="m-4">Résolution de <InlineMath math="f(x)=0" /> graphiquement et par le calcul.</p>
        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 1</h3><p>
            Résolvez <InlineMath math="-x^2+4x+5=0" /> par le discriminant.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 2</h3><p>
            Résolvez <InlineMath math="x^2-2x+1=0" /> et précisez la multiplicité.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 3</h3><p>
            Donnez les solutions de <InlineMath math="f(x)=0" />.
            <img src={graph11} alt="graph intercept -3 and 2" />
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 4</h3><p>
            Utilisez l’astuce <InlineMath math="a+b+c=0" /> pour résoudre <InlineMath math="2x^2-3x+1=0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 5</h3><p>
            Calculez les solutions de <InlineMath math="-2x^2+x+3=0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 6</h3><p>
            Résolvez <InlineMath math="x^2+4x+8=0" /> et interprétez graphiquement.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 7</h3><p>
            Que vaut <InlineMath math="\Delta" /> ?
            <img src={graph12} alt="graph intercept 1" />
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 8</h3><p>
            Résolvez <InlineMath math="(x-1)(x-5)=0" /> puis donnez la forme développée.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 9</h3><p>
            Trouvez les solutions de <InlineMath math="4x^2+4x+1=0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 10</h3><p>
            Graphiquement, la parabole ne coupe pas l’axe des abscisses. Que peut-on dire des solutions de <InlineMath math="f(x)=0" /> ?
            <img src={graph13} alt="graph no intercept" />
          </p></li>
        </ol>

        <div className="exercise__actions">
          <button className="prim-btn px-5 py-2.5 m-7" type="button" onClick={toggleHidden}>
            {hidden ? 'Afficher' : 'Masquer'} les réponses
          </button>
        </div>

        <div className="answers" hidden={hidden}>
          <p>
            Méthode: par le calcul, utilisez <InlineMath math="\Delta=b^2-4ac" />; graphiquement, lisez les abscisses d’intersection avec l’axe des abscisses
            (deux, une double, ou aucune selon la courbe).
          </p>
          <ol className="answer-list">
            <li className="answer"><details className="answer__details"><summary>Exercice 1</summary><div className="answer__content"><p> <InlineMath math="x=-1,\ 5" />.</p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 2</summary><div className="answer__content"><p> <InlineMath math="x=1" /> (double).</p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 3</summary><div className="answer__content"><p> <InlineMath math="x=-3,\ 2" />.</p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 4</summary><div className="answer__content"><p> <InlineMath math="x=1,\ x=\tfrac12" />.</p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 5</summary><div className="answer__content"><p> <InlineMath math="x=-\tfrac12,\ 3" />.</p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 6</summary><div className="answer__content"><p> <InlineMath math="\Delta=-16<0" />: aucune solution réelle.</p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 7</summary><div className="answer__content"><p> <InlineMath math="\Delta=0" /> (tangence).</p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 8</summary><div className="answer__content"><p> <InlineMath math="x=1,\ 5" /> et <InlineMath math="x^2-6x+5" />.</p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 9</summary><div className="answer__content"><p> <InlineMath math="x=-\tfrac12" /> (double).</p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 10</summary><div className="answer__content"><p> Aucune solution réelle (<InlineMath math="\Delta<0" />).</p></div></details></li>
          </ol>
        </div>
      </section>
    </div>
  );
}
