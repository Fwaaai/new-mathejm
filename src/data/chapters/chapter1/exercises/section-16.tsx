import { useState } from 'react';
import { InlineMath } from 'react-katex';

export default function Section16() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices</h2>
        <p className="m-4">Factorisation d’un polynôme du 3e degré connaissant une racine.</p>
        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 1</h3><p>
            Factorisez <InlineMath math="p(x)=2x^3-3x^2-11x+6" /> en sachant que <InlineMath math="x=3" /> est une racine.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 2</h3><p>
            <InlineMath math="p(x)=x^3-6x^2+11x-6" />, racine connue <InlineMath math="x=1" />. Factorisez.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 3</h3><p>
            <InlineMath math="p(x)=x^3+x^2-4x-4" />, racine <InlineMath math="x=2" />. Factorisez complètement.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 4</h3><p>
            <InlineMath math="p(x)=2x^3+3x^2-8x-12" />, racine <InlineMath math="x=2" />. Factorisez.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 5</h3><p>
            <InlineMath math="p(x)=x^3-3x^2-4x+12" />, racine <InlineMath math="x=3" />. Factorisez complètement.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 6</h3><p>
            <InlineMath math="p(x)=x^3-2x^2-x+2" />, racine <InlineMath math="x=1" />. Factorisez.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 7</h3><p>
            <InlineMath math="p(x)=2x^3-5x^2-14x+35" />, racine <InlineMath math="x=5" />. Factorisez.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 8</h3><p>
            <InlineMath math="p(x)=x^3-4x" />, racine <InlineMath math="x=0" />. Factorisez.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 9</h3><p>
            <InlineMath math="p(x)=x^3-9x" />, racine <InlineMath math="x=3" />. Factorisez.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 10</h3><p>
            <InlineMath math="p(x)=x^3-7x^2+14x-8" />, racine <InlineMath math="x=1" />. Factorisez.
          </p></li>
        </ol>

        <div className="exercise__actions">
          <button className="prim-btn px-5 py-2.5 m-7" type="button" onClick={toggleHidden}>
            {hidden ? 'Afficher' : 'Masquer'} les réponses
          </button>
        </div>

        <div className="answers" hidden={hidden}>
          <p>
            Méthode: connaître une racine <InlineMath math="r" /> permet de factoriser par <InlineMath math="(x-r)" /> (division euclidienne ou schéma de Ruffini),
            puis factoriser le quotient du second degré (discriminant ou identités) pour compléter.
          </p>
          <ol className="answer-list">
            <li className="answer"><details className="answer__details"><summary>Exercice 1</summary><div className="answer__content"><p>
              <InlineMath math="(x-3)(2x^2+3x-2)=(x-3)(2x-1)(x+2)" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 2</summary><div className="answer__content"><p>
              <InlineMath math="(x-1)(x^2-5x+6)=(x-1)(x-2)(x-3)" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 3</summary><div className="answer__content"><p>
              <InlineMath math="(x-2)(x^2+3x+2)=(x-2)(x+1)(x+2)" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 4</summary><div className="answer__content"><p>
              <InlineMath math="(x-2)(2x^2+7x+6)=(x-2)(2x+3)(x+2)" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 5</summary><div className="answer__content"><p>
              <InlineMath math="(x-3)(x^2-0x-4)=(x-3)(x-2)(x+2)" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 6</summary><div className="answer__content"><p>
              <InlineMath math="(x-1)(x^2-x-2)=(x-1)(x-2)(x+1)" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 7</summary><div className="answer__content"><p>
              <InlineMath math="(x-5)(2x^2+5x-7)" /> (le second se factorise sur <InlineMath math="\mathbb{R}" />? <InlineMath math="\Delta=25+56=81" />, donc <InlineMath math="(2x-1)(x+7)" />): <InlineMath math="(x-5)(2x-1)(x+7)" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 8</summary><div className="answer__content"><p>
              <InlineMath math="x(x^2-4)=x(x-2)(x+2)" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 9</summary><div className="answer__content"><p>
              <InlineMath math="x(x^2-9)=x(x-3)(x+3)" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 10</summary><div className="answer__content"><p>
              <InlineMath math="(x-1)(x^2-6x+8)=(x-1)(x-2)(x-4)" />.
            </p></div></details></li>
          </ol>
        </div>
      </section>
    </div>
  );
}
