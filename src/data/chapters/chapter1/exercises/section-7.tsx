import { useState } from 'react';
import { InlineMath } from 'react-katex';
import graph10 from '/src/assets/img/graphs/graph10.png';

export default function Section7() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices</h2>
        <p className="m-4">Retrouver ou passer à la forme canonique.</p>
        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 1</h3><p>
            Écrivez <InlineMath math="-x^2 + 4x + 5" /> sous forme canonique.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 2</h3><p>
            Donnez la forme canonique de <InlineMath math="2x^2 - 8x + 3" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 3</h3><p>
            Transformez <InlineMath math="x^2 + 6x + 2" /> en forme canonique.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 4</h3><p>
            Donnez une forme canonique de cette fonction <InlineMath math="f" />.
            <img src={graph10} alt="graph S(2,9) et P(0,5)" />
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 5</h3><p>
            <InlineMath math="f(x)=a(x-1)^2-4" /> passe par <InlineMath math="Q(3,0)" />. Trouvez <InlineMath math="a" /> puis <InlineMath math="f" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 6</h3><p>
            Donnez une forme canonique de <InlineMath math="-3(x-2)(x-5)" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 7</h3><p>
            Déduisez la forme canonique de <InlineMath math="(x+1)(x-3)" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 8</h3><p>
            On sait que <InlineMath math="f(x)=a(x-\alpha)^2+\beta" /> avec <InlineMath math="\alpha=-1,\ \beta=4" /> et <InlineMath math="f(0)=1" />. Trouvez <InlineMath math="a" /> et <InlineMath math="f" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 9</h3><p>
            Écrivez <InlineMath math="4x^2+4x+1" /> sous forme canonique.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 10</h3><p>
            Donnez la forme canonique de <InlineMath math="-2x^2-8x-3" />.
          </p></li>
        </ol>

        <div className="exercise__actions">
          <button className="prim-btn px-5 py-2.5 m-7" type="button" onClick={toggleHidden}>
            {hidden ? 'Afficher' : 'Masquer'} les réponses
          </button>
        </div>

        <div className="answers" hidden={hidden}>
          <p>
            Méthode: compléter le carré pour passer de <InlineMath math="ax^2+bx+c" /> à <InlineMath math="a(x-\alpha)^2+\beta" />.
            On peut partir d’une forme factorisée, développer puis compléter le carré; ou utiliser un point pour déterminer <InlineMath math="a" />.
          </p>
          <ol className="answer-list">
            <li className="answer"><details className="answer__details"><summary>Exercice 1</summary><div className="answer__content"><p>
              <InlineMath math="-x^2+4x+5=-(x^2-4x)+5=-(x-2)^2+9" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 2</summary><div className="answer__content"><p>
              <InlineMath math="2x^2-8x+3=2[(x-2)^2-4]+3=2(x-2)^2-8+3=2(x-2)^2-5" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 3</summary><div className="answer__content"><p>
              <InlineMath math="x^2+6x+2=(x+3)^2-7" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 4</summary><div className="answer__content"><p>
              Lecture: <InlineMath math="S(2,9)" /> et <InlineMath math="P(0,5)" />. Poser <InlineMath math="f(x)=a(x-2)^2+9" />; alors
              <InlineMath math="5=f(0)=a\cdot4+9\Rightarrow a=-1" />. Donc <InlineMath math="f(x)=-(x-2)^2+9" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 5</summary><div className="answer__content"><p>
              <InlineMath math="0=f(3)=a(2)^2-4\Rightarrow a=1" />. Donc <InlineMath math="f(x)=(x-1)^2-4" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 6</summary><div className="answer__content"><p>
              Développer: <InlineMath math="-3(x^2-7x+10)" /> puis compléter le carré: <InlineMath math="-3[(x-\tfrac72)^2-\tfrac{49}{4}+10]" />
              d’où <InlineMath math="f(x)=-3(x-\tfrac72)^2+\tfrac{21}{4}" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 7</summary><div className="answer__content"><p>
              <InlineMath math="(x+1)(x-3)=x^2-2x-3=(x-1)^2-4" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 8</summary><div className="answer__content"><p>
              <InlineMath math="f(x)=a(x+1)^2+4" />, et <InlineMath math="1=f(0)=a\cdot1+4\Rightarrow a=-3" />.
              Donc <InlineMath math="f(x)=-3(x+1)^2+4" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 9</summary><div className="answer__content"><p>
              <InlineMath math="4x^2+4x+1=(2x+1)^2=4(x+\tfrac12)^2" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 10</summary><div className="answer__content"><p>
              Factoriser <InlineMath math="-2" />: <InlineMath math="-2[x^2+4x+?]-3=-2[(x+2)^2-4]-3=-2(x+2)^2+5" />.
            </p></div></details></li>
          </ol>
        </div>
      </section>
    </div>
  );
}
