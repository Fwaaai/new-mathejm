import React, { useState } from 'react';
import { InlineMath } from 'react-katex';
import graph8 from '/src/assets/img/graphs/graph8.png';

export default function Section5() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices</h2>
        <p className="m-4">Tableaux de variation et extremum à partir de la forme développée.</p>
        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 1</h3><p>
            Donnez le sens de variation de <InlineMath math="f(x) = -x^2 + 4x + 5" /> et précisez le maximum.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 2</h3><p>
            Étudiez les variations de <InlineMath math="f(x) = x^2 + 4x + 5" /> et donnez le minimum.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 3</h3><p>
            Pour <InlineMath math="f(x)=2x^2 - 8x + 1" />, précisez <InlineMath math="\alpha,\beta" /> et l’extremum.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 4</h3><p>
            Donnez le tableau de variation (qualitatif) de <InlineMath math="f(x)=-3x^2-6x+2" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 5</h3><p>
            <InlineMath math="f(x)=\tfrac12 x^2 - x + 7" />: indiquez où <InlineMath math="f" /> est croissante/décroissante.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 6</h3><p>
            Donnez l’extremum de <InlineMath math="f(x)=4x^2+4x+1" /> et sa valeur.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 7</h3><p>
            Pour <InlineMath math="f(x)=-2x^2+8x-3" />, l’extremum est-il un max ou un min ? Donnez sa valeur.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 8</h3><p>
            Déterminez les intervalles de croissance de <InlineMath math="f(x)=x^2-10x+25" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 9</h3><p>
            Graphiquement, la parabole a un sommet <InlineMath math="S(-2,1)" /> et <InlineMath math="a>0" />. Décrivez ses variations.
            <img src={graph8} className="img" alt="graph S -2,1 and a>0" />
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 10</h3><p>
            Sans calcul détaillé, indiquez la nature de l’extremum de <InlineMath math="f(x)= -x^2 - 2x + 7" />.
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
              <InlineMath math="a<0" /> donc max en <InlineMath math="\alpha=2" />, valeur <InlineMath math="\beta=9" />; décroît puis croît vers la gauche/droite inversé? Pour <InlineMath math="a<0" />, croît sur <InlineMath math="(-\infty,2]" />, décroît sur <InlineMath math="[2,+\infty)" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 2</summary><div className="answer__content"><p>
              <InlineMath math="a>0" /> donc min en <InlineMath math="\alpha=-2" />, valeur <InlineMath math="\beta=1" />; décroît sur <InlineMath math="(-\infty,-2]" />, croît sur <InlineMath math="[-2,+\infty)" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 3</summary><div className="answer__content"><p>
              <InlineMath math="\alpha=\tfrac{8}{4}=2" />, <InlineMath math="\beta=f(2)=2\cdot4-16+1=-7" />, min <InlineMath math="-7" /> car <InlineMath math="a=2>0" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 4</summary><div className="answer__content"><p>
              <InlineMath math="a<0" /> donc croît sur <InlineMath math="(-\infty, -1]" /> puis décroît; max en <InlineMath math="x=-1" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 5</summary><div className="answer__content"><p>
              <InlineMath math="a=\tfrac12>0" /> donc décroît sur <InlineMath math="(-\infty,1]" />, croît sur <InlineMath math="[1,+\infty)" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 6</summary><div className="answer__content"><p>
              <InlineMath math="(2x+1)^2" /> min en <InlineMath math="x=-\tfrac12" /> de valeur <InlineMath math="0" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 7</summary><div className="answer__content"><p>
              <InlineMath math="a<0" /> donc maximum en <InlineMath math="\alpha=2" />, valeur <InlineMath math="\beta=5" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 8</summary><div className="answer__content"><p>
              <InlineMath math="(x-5)^2" /> min en <InlineMath math="x=5" />; décroît puis croît.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 9</summary><div className="answer__content"><p>
              <InlineMath math="a>0" /> donc décroît jusqu’à <InlineMath math="x=-2" />, puis croît; min <InlineMath math="1" />.
            </p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 10</summary><div className="answer__content"><p>
              <InlineMath math="a<0" /> donc extremum est un maximum.
            </p></div></details></li>
          </ol>
        </div>
      </section>
    </div>
  );
}

