import { useState } from 'react';
import { InlineMath } from 'react-katex';
import graph14 from '/src/assets/img/graphs/graph14.png';

export default function Section19() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices</h2>
        <p className="m-4">Inéquations du second degré et tableaux de signes.</p>
        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 1</h3><p>
            Résolvez <InlineMath math="(x-1)(x+1)^2\le0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 2</h3><p>
            Résolvez <InlineMath math="x(x-4)\ge0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 3</h3><p>
            Résolvez <InlineMath math="-2(x-2)^2\le0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 4</h3><p>
            Donnez l’ensemble des <InlineMath math="x" /> tels que <InlineMath math="x^2-5x+6<0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 5</h3><p>
            Résolvez <InlineMath math="(x+3)^2-9\ge0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 6</h3><p>
            Résolvez <InlineMath math="(2x-1)(x+2)\le0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 7</h3><p>
            Déterminez <InlineMath math="x" /> tel que <InlineMath math="x^2+4x+8\ge0" />.
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 8</h3><p>
            Résolvez <InlineMath math="-x(x-2)(x-3)\ge0" /> (produit de trois facteurs).
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 9</h3><p>
            Résolvez <InlineMath math="f(x)\le0" />.
            <img src={graph14} alt="graph intercept -2 and 5" />
          </p></li>
          <li className="exercise"><h3 className="text-xl font-semibold p-2">Exercice 10</h3><p>
            Résolvez <InlineMath math="(x-1)^2(x+4)\ge0" />.
          </p></li>
        </ol>

        <div className="exercise__actions">
          <button className="prim-btn px-5 py-2.5 m-7" type="button" onClick={toggleHidden}>
            {hidden ? 'Afficher' : 'Masquer'} les réponses
          </button>
        </div>

        <div className="answers" hidden={hidden}>
          <ol className="answer-list">
            <li className="answer"><details className="answer__details"><summary>Exercice 1</summary><div className="answer__content">
              <p>Méthode: étudier le signe d’un produit de facteurs en repérant les zéros et la multiplicité.</p>
              <p>Facteurs: <InlineMath math="(x-1)" /> et <InlineMath math="(x+1)^2" />. Zéros en <InlineMath math="x=1" /> (multiplicité 1) et <InlineMath math="x=-1" /> (multiplicité 2).
                Un facteur de multiplicité paire ne change pas de signe au passage de la racine.</p>
              <p>Tableau de signes: pour <InlineMath math="x<-1" />, les deux facteurs sont négatifs puis <InlineMath math="(x+1)^2\ge0" /> reste positif de part et d’autre de <InlineMath math="-1" />.
                Entre <InlineMath math="-1" /> et <InlineMath math="1" />, <InlineMath math="(x-1)<0" /> et <InlineMath math="(x+1)^2>0" /> donc produit <InlineMath math="\le0" />; pour <InlineMath math=": x>1" />, produit &gt; 0.</p>
              <p>Conclusion: <InlineMath math="(x-1)(x+1)^2\le0" /> pour <InlineMath math="x\le1" /> avec annulation en <InlineMath math="x=-1,\ 1" />.</p>
            </div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 2</summary><div className="answer__content"><p>
              Méthode: étudier le signe du produit <InlineMath math="x(x-4)" /> en fonction des zéros <InlineMath math="0" /> et <InlineMath math="4" />.</p>
              <p>Pour <InlineMath math="x<0" />, facteurs de signes opposés? En fait <InlineMath math="x<0" /> et <InlineMath math="x-4<0" /> donc produit <InlineMath math=">0" />. Pour <InlineMath math="0<x<4" />: <InlineMath math=": +\cdot - = -" />. Pour <InlineMath math=": x>4" />: <InlineMath math=": +\cdot +=+" />.</p>
              <p>Conclusion: <InlineMath math="x(x-4)\ge0" /> pour <InlineMath math="x\in(-\infty,0] \cup [4,+\infty)" />.</p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 3</summary><div className="answer__content"><p>
              Méthode: reconnaître un carré multiplié par une constante négative.</p>
              <p>On a <InlineMath math="-2(x-2)^2\le0" /> car <InlineMath math="(x-2)^2\ge0" /> pour tout <InlineMath math="x" /> et le coefficient <InlineMath math="-2<0" /> renverse le signe.</p>
              <p>Égalité si et seulement si <InlineMath math="(x-2)^2=0" />, donc <InlineMath math="x=2" />.</p>
              <p>Conclusion: inégalité vraie pour tout <InlineMath math="x\in\mathbb R" />, avec égalité en <InlineMath math="x=2" />.</p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 4</summary><div className="answer__content"><p>
              Factoriser: <InlineMath math="x^2-5x+6=(x-2)(x-3)" />. Zéros en <InlineMath math="2" /> et <InlineMath math="3" />.</p>
              <p>Le coefficient directeur <InlineMath math="a=1>0" />: le produit est négatif entre les racines, positif à l’extérieur.</p>
              <p>Conclusion: <InlineMath math="x^2-5x+6<0" /> pour <InlineMath math="x\in(2,3)" />.</p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 5</summary><div className="answer__content"><p>
              Transformation: <InlineMath math="(x+3)^2-9=(x+3-3)(x+3+3)=x(x+6)" /> (différence de deux carrés).</p>
              <p>Zéros en <InlineMath math="x=0" /> et <InlineMath math="x=-6" />. Le coefficient dominant du produit vaut <InlineMath math="1>0" />: signe positif à l’extérieur, négatif entre.</p>
              <p>Conclusion: <InlineMath math="(x+3)^2-9\ge0" /> pour <InlineMath math="x\in(-\infty,-6] \cup [0,+\infty)" />.</p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 6</summary><div className="answer__content"><p>
              Facteurs: <InlineMath math="(2x-1)" /> et <InlineMath math="(x+2)" />. Zéros en <InlineMath math="x=\tfrac12" /> et <InlineMath math="x=-2" />.</p>
              <p>Le produit de deux facteurs de premier degré à coefficient positif est <InlineMath math=": \le0" /> entre les zéros, <InlineMath math=": \ge0" /> à l’extérieur.</p>
              <p>Conclusion: <InlineMath math="(2x-1)(x+2)\le0" /> sur <InlineMath math="[-2,\tfrac12]" />.</p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 7</summary><div className="answer__content"><p>
              Étude du discriminant: <InlineMath math="\Delta=4-32=-28<0" /> donc pas de racine réelle.</p>
              <p>Comme <InlineMath math="a=1>0" />, <InlineMath math="x^2+4x+8>0" /> pour tout <InlineMath math="x\in\mathbb R" />.</p>
              <p>Conclusion: l’inégalité <InlineMath math=": \ge0" /> est vraie pour tout <InlineMath math="x" /> (strictement positive).</p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 8</summary><div className="answer__content"><p>
              Produit de trois facteurs: zéros <InlineMath math="0,2,3" />. Sans le signe « - », le produit est <InlineMath math=": \ge0" /> en dehors des intervalles où le nombre de facteurs négatifs est impair.</p>
              <p>On introduit ensuite le signe global « - » qui inverse le signe du produit.</p>
              <p>Tableau de signes (par alternance) conduit à <InlineMath math="-x(x-2)(x-3)\ge0" /> sur <InlineMath math="[0,2] \cup [3,+\infty)" />.</p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 9</summary><div className="answer__content"><p>
              Lecture graphique: la courbe coupe l’axe des abscisses en <InlineMath math="x=-2" /> et <InlineMath math="x=5" /> et s’ouvre vers le haut (<InlineMath math="a>0" />).</p>
              <p>Ainsi, <InlineMath math="f(x)\le0" /> entre les racines et <InlineMath math=": >0" /> à l’extérieur.</p>
              <p>Conclusion: solution <InlineMath math="x\in[-2,\,5]" />.</p></div></details></li>
            <li className="answer"><details className="answer__details"><summary>Exercice 10</summary><div className="answer__content"><p>
              Facteurs: <InlineMath math="(x-1)^2" /> (racine double en 1, multiplicité paire) et <InlineMath math="(x+4)" />.</p>
              <p>Un carré est toujours <InlineMath math=": \ge0" /> et ne change pas de signe; le signe du produit est donc celui de <InlineMath math="(x+4)" />.</p>
              <p>Conclusion: <InlineMath math="\ge0" /> pour <InlineMath math="x\le-4" /> ou <InlineMath math="x\ge1" />; avec annulation en <InlineMath math="x=-4" /> et en <InlineMath math="x=1" /> (double).</p></div></details></li>
          </ol>
        </div>
      </section>
    </div>
  );
}
