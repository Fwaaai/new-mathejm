import { useState } from 'react';
import { InlineMath } from 'react-katex';

export default function Section17() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices</h2>
        <p className="m-4">Théorème des racines rationnelles: candidats et tests.</p>
        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 1</h3><p>
            Listez les candidats rationnels et trouvez les racines de <InlineMath math="p(x)=2x^3-3x^2-11x+6" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 2</h3><p>
            Pour <InlineMath math="p(x)=x^3-6x^2+11x-6" />, testez les candidats et donnez les racines.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 3</h3><p>
            Trouvez une racine rationnelle de <InlineMath math="p(x)=x^3+x^2-4x-4" /> puis factorisez.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 4</h3><p>
            Candidats et racines de <InlineMath math="p(x)=2x^3+3x^2-8x-12" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 5</h3><p>
            Candidats de <InlineMath math="p(x)=3x^3-2x^2-17x+12" /> et une racine évidente si possible.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 6</h3><p>
            Déterminez les racines rationnelles de <InlineMath math="p(x)=x^3-2x^2-x+2" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 7</h3><p>
            Pour <InlineMath math="p(x)=x^3-7x^2+14x-8" />, testez les diviseurs de <InlineMath math="8" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 8</h3><p>
            Candidats rationnels pour <InlineMath math="p(x)=5x^3-5x^2-40x+40" /> et racines trouvées.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 9</h3><p>
            Trouvez une racine rationnelle de <InlineMath math="p(x)=x^3-9x" /> et factorisez.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 10</h3><p>
            Donnez les candidats puis une racine de <InlineMath math="p(x)=2x^3-5x^2-14x+35" />.
          </p></li>
        </ol>

        <div className="exercise__actions">
          <button className="prim-btn px-5 py-2.5 m-7" type="button" onClick={toggleHidden}>
            {hidden ? 'Afficher' : 'Masquer'} les réponses
          </button>
        </div>

        <div className="answers" hidden={hidden}>
          <p>
            Méthode: théorème des racines rationnelles. Pour <InlineMath math="p(x)=a_n x^n+\cdots + a_0" />, toute racine rationnelle sous forme irréductible
            <InlineMath math="p/q" /> vérifie <InlineMath math="p|a_0" /> et <InlineMath math="q|a_n" />. Tester les candidats par substitution, puis factoriser.
          </p>
          <ol className="answer-list">
            <li className="answer"><details className="answer__details"><summary>Exercice 1</summary><div className="answer__content"><p>
              Candidats <InlineMath math="\pm1,\pm2,\pm3,\pm6,\pm\tfrac12,\pm\tfrac32" />; racines <InlineMath math="\tfrac12,\ -2,\ 3" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 2</summary><div className="answer__content"><p>
              Candidats <InlineMath math="\pm1,\pm2,\pm3,\pm6" />; racines <InlineMath math="1,\ 2,\ 3" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 3</summary><div className="answer__content"><p>
              Racine <InlineMath math="2" />, factorisation <InlineMath math="(x-2)(x+1)(x+2)" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 4</summary><div className="answer__content"><p>
              Candidats <InlineMath math="\pm1,\pm2,\pm3,\pm4,\pm6,\pm12,\pm\tfrac12,\pm\tfrac32" />; racines <InlineMath math="-2,\ -\tfrac32,\ 2" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 5</summary><div className="answer__content"><p>
              Candidats <InlineMath math="\pm1,\pm2,\pm3,\pm4,\pm6,\pm12,\pm\tfrac{1}{3},\pm\tfrac{2}{3},\pm\tfrac{4}{3}" />.
              Substitution donne par exemple <InlineMath math="p(1)= -4\neq0" />, <InlineMath math="p(2)= 24-8-34+12=-6\neq0" />, <InlineMath math="p(3)= 81-18-51+12=24\neq0" />.
              On trouve <InlineMath math="p(\tfrac{4}{3})=0" /> et <InlineMath math="p(1)=?" /> non nul; on peut ensuite diviser par <InlineMath math="(3x-4)" /> et poursuivre.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 6</summary><div className="answer__content"><p>
              Racines <InlineMath math="1,\ 2,\ -1" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 7</summary><div className="answer__content"><p>
              Candidats <InlineMath math="\pm1,\pm2,\pm4,\pm8" />. Substituer: <InlineMath math="p(1)=0" />, <InlineMath math="p(2)=0" /> et <InlineMath math="p(4)=0" />; ainsi la factorisation
              est <InlineMath math="(x-1)(x-2)(x-4)" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 8</summary><div className="answer__content"><p>
              Candidats <InlineMath math="\pm1,\pm2,\pm4,\pm5,\pm8,\pm10,\pm20,\pm40,\pm\tfrac{1}{5},\pm\tfrac{2}{5},\pm\tfrac{4}{5}" />.
              Substitution: <InlineMath math="p(1)=0" /> et <InlineMath math="p(4)=0" />; donc factorisation <InlineMath math="(x-1)(x-4)(5x+? )" /> après division; on déduit <InlineMath math="(x-1)(x-4)(5x+5)" /> puis simplifier si besoin.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 9</summary><div className="answer__content"><p>
              Racines <InlineMath math="0,\ 3,\ -3" />; factorisation <InlineMath math="x(x-3)(x+3)" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 10</summary><div className="answer__content"><p>
              Candidats <InlineMath math="\pm1,\pm5,\pm7,\pm35,\pm\tfrac{1}{2},\pm\tfrac{5}{2},\pm\tfrac{7}{2},\pm\tfrac{35}{2}" />; racines <InlineMath math="1,\ 5,\ -\tfrac{7}{2}" /> après tests.
            </p></div></details></li>
          </ol>
        </div>
      </section>
    </div>
  );
}
