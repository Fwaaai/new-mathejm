import { useState } from 'react';
import { InlineMath } from 'react-katex';
import graph11 from '/src/assets/img/graphs/graph11.png';

export default function Section13() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices</h2>
        <p className="m-4">Forme factorisée à partir de racines ou d’un graphique.</p>
        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 1</h3><p>
            Racines <InlineMath math="r_1=-1" />, <InlineMath math="r_2=5" /> et <InlineMath math="a= -1" />. Donnez <InlineMath math="f(x)" /> sous forme factorisée.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 2</h3><p>
            Racines <InlineMath math="0" /> et <InlineMath math="4" />, avec <InlineMath math="f(1)= -3" />. Déterminez <InlineMath math="a" /> puis la forme factorisée.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 3</h3><p>
            On sait que <InlineMath math="f(x)=ax^2+bx+c" /> a pour racines <InlineMath math="2" /> et <InlineMath math="3" />.
            Écrivez <InlineMath math="f" /> sous forme factorisée avec un <InlineMath math="a\neq 0" /> indéterminé.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 4</h3><p>
            Donnez la forme factorisée à un coefficient près.
            <img src={graph11} alt="graph intercept -3 and 2" />
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 5</h3><p>
            La forme factorisée est <InlineMath math="f(x)=2(x-1)(x-5)" />. Donnez la forme développée.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 6</h3><p>
            Racines <InlineMath math="-2" /> et <InlineMath math="\tfrac12" />, et <InlineMath math="f(0)= -6" />. Trouvez <InlineMath math="a" /> puis <InlineMath math="f" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 7</h3><p>
            Une racine double en <InlineMath math="x=1" /> et <InlineMath math="a=3" />. Donnez <InlineMath math="f(x)" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 8</h3><p>
            Racines <InlineMath math="-1" /> et <InlineMath math="7" />; de plus <InlineMath math="f(2)=12" />. Donnez <InlineMath math="f" /> en forme factorisée.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 9</h3><p>
            En utilisant le sommet <InlineMath math="S(3,-4)" /> et la racine <InlineMath math="x=1" />, proposez une forme factorisée possible.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 10</h3><p>
            Écrivez une forme factorisée d’un trinôme admettant les racines <InlineMath math="-5" /> et <InlineMath math="-1" /> et vérifiant <InlineMath math="f(-3)=8" />.
          </p></li>
        </ol>

        <div className="exercise__actions">
          <button className="prim-btn px-5 py-2.5 m-7" type="button" onClick={toggleHidden}>
            {hidden ? 'Afficher' : 'Masquer'} les réponses
          </button>
        </div>

        <div className="answers" hidden={hidden}>
          <p>
            Méthode: avec racines <InlineMath math="r_1, r_2" />, écrire <InlineMath math="f(x)=a(x-r_1)(x-r_2)" /> et utiliser une valeur donnée
            pour déterminer <InlineMath math="a" />. En cas de racine double: <InlineMath math="f(x)=a(x-r)^2" />.
          </p>
          <ol className="answer-list">
            <li className="answer"><details className="answer__details"><summary>Exercice 1</summary><div className="answer__content"><p>
              <InlineMath math="f(x)=-1\cdot(x+1)(x-5)" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 2</summary><div className="answer__content"><p>
              <InlineMath math="f(x)=a\,x(x-4), f(1)=-3\Rightarrow -3=a\cdot1\cdot(-3)\Rightarrow a=1" />, donc <InlineMath math="f(x)=x(x-4)" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 3</summary><div className="answer__content"><p>
              <InlineMath math="f(x)=a(x-2)(x-3)" /> avec <InlineMath math="a\neq0" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 4</summary><div className="answer__content"><p>
              <InlineMath math="f(x)=a(x+3)(x-2)" /> pour un certain <InlineMath math="a\neq0" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 5</summary><div className="answer__content"><p>
              <InlineMath math="2x^2-8x+10" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 6</summary><div className="answer__content"><p>
              <InlineMath math="f(x)=a(x+2)(x-\tfrac12),\ f(0)=-6\Rightarrow -6=a(2)(-\tfrac12)=-a\Rightarrow a=6" />; donc <InlineMath math="6(x+2)(x-\tfrac12)" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 7</summary><div className="answer__content"><p>
              <InlineMath math="f(x)=3(x-1)^2" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 8</summary><div className="answer__content"><p>
              <InlineMath math="f(x)=a(x+1)(x-7),\ f(2)=12\Rightarrow 12=a(3)(-5)=-15a\Rightarrow a=-\tfrac{4}{5}" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 9</summary><div className="answer__content"><p>
              Une possibilité : <InlineMath math="f(x)=a(x-1)(x-5)" />; on choisit <InlineMath math="a" /> pour obtenir le bon sommet (non demandé précisément).
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 10</summary><div className="answer__content"><p>
              <InlineMath math="f(x)=a(x+5)(x+1),\ f(-3)=8\Rightarrow 8=a(2)(-2)=-4a\Rightarrow a=-2" />; donc <InlineMath math="-2(x+5)(x+1)" />.
            </p></div></details></li>
          </ol>
        </div>
      </section>
    </div>
  );
}

