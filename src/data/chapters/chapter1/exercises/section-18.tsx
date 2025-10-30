import { useState } from 'react';
import { InlineMath } from 'react-katex';

export default function Section18() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices</h2>
        <p className="m-4">Équations paramétrées: étude selon <InlineMath math="m" /> via <InlineMath math="\Delta(m)" />.</p>
        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 1</h3><p>
            Étudiez selon <InlineMath math="m" />: <InlineMath math="x^2-mx+1=0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 2</h3><p>
            Étudiez: <InlineMath math="x^2+(m-2)x+m=0" /> (nombre de solutions réelles).
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 3</h3><p>
            Pour <InlineMath math="x^2-2mx+m^2-4=0" />, discutez le nombre de solutions réelles.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 4</h3><p>
            <InlineMath math="(m+1)x^2-4x+m=0" />: pour quelles valeurs de <InlineMath math="m" /> y a-t-il 2, 1, 0 solution(s) réelle(s)?
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 5</h3><p>
            <InlineMath math="x^2+mx+\tfrac{m^2}{4}=0" />: discutez et donnez les solutions.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 6</h3><p>
            <InlineMath math="x^2-2x+m=0" />: conditions sur <InlineMath math="m" /> pour des solutions réelles.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 7</h3><p>
            <InlineMath math="x^2-(m+1)x+m=0" />: discutez selon <InlineMath math="m" /> et donnez les racines quand elles existent.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 8</h3><p>
            Pour <InlineMath math="mx^2-2x+1=0" /> (<InlineMath math="m\neq0" />), discutez le nombre de solutions.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 9</h3><p>
            <InlineMath math="x^2-2(m-1)x+(m^2-1)=0" />: discutez selon <InlineMath math="m" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 10</h3><p>
            <InlineMath math="x^2-2mx+4=0" />: donnez les valeurs de <InlineMath math="m" /> pour lesquelles il y a des solutions réelles.
          </p></li>
        </ol>

        <div className="exercise__actions">
          <button className="prim-btn px-5 py-2.5 m-7" type="button" onClick={toggleHidden}>
            {hidden ? 'Afficher' : 'Masquer'} les réponses
          </button>
        </div>

        <div className="answers" hidden={hidden}>
          <p>
            Méthode: étudier <InlineMath math="\Delta(m)=b(m)^2-4a(m)c(m)" />. Deux solutions réelles si <InlineMath math="\Delta(m)>0" />, une si <InlineMath math="\Delta(m)=0" />, sinon aucune.
            Traiter également les cas limites où le coefficient de <InlineMath math="x^2" /> s’annule.
          </p>
          <ol className="answer-list">
            <li className="answer"><details className="answer__details"><summary>Exercice 1</summary><div className="answer__content"><p>
              <InlineMath math="\Delta(m)=m^2-4" />: deux si <InlineMath math="|m|>2" />, une si <InlineMath math="|m|=2" />, aucune si <InlineMath math="|m|<2" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 2</summary><div className="answer__content"><p>
              <InlineMath math="\Delta=(m-2)^2-4m=m^2-8m+4" />: signe de ce trinôme en <InlineMath math="m" /> pour conclure (deux/une/aucune).
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 3</summary><div className="answer__content"><p>
              <InlineMath math="\Delta=(2m)^2-4(m^2-4)=16" />: toujours deux solutions réelles distinctes.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 4</summary><div className="answer__content"><p>
              <InlineMath math="\Delta=16-4(m+1)m=16-4m^2-4m" />: deux si <InlineMath math="\Delta>0" />, une si <InlineMath math="\Delta=0" />, sinon aucune; attention au cas <InlineMath math="m=-1" /> (coefficient directeur nul).
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 5</summary><div className="answer__content"><p>
              <InlineMath math="\Delta=m^2-4\cdot1\cdot\tfrac{m^2}{4}=0" />: une racine double <InlineMath math="x= -\tfrac{m}{2}" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 6</summary><div className="answer__content"><p>
              <InlineMath math="\Delta=4-4m=4(1-m)" />: solutions réelles si <InlineMath math="m\le1" />, double si <InlineMath math="m=1" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 7</summary><div className="answer__content"><p>
              <InlineMath math="\Delta=(m+1)^2-4m=m^2-2m+1=(m-1)^2\ge0" />: toujours au moins une, double si <InlineMath math="m=1" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 8</summary><div className="answer__content"><p>
              <InlineMath math="\Delta=(-2)^2-4m=4-4m" />: deux si <InlineMath math="m<1" />, une si <InlineMath math="m=1" />, aucune si <InlineMath math="m>1" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 9</summary><div className="answer__content"><p>
              <InlineMath math="\Delta=4(m-1)^2-4(m^2-1)=0" />: toujours une racine double (identité), en fait <InlineMath math="(x-(m-1))^2=0" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 10</summary><div className="answer__content"><p>
              <InlineMath math="\Delta=(2m)^2-16=4(m^2-4)" />: solutions réelles si <InlineMath math="|m|\ge2" />, double si <InlineMath math="|m|=2" />.
            </p></div></details></li>
          </ol>
        </div>
      </section>
    </div>
  );
}
