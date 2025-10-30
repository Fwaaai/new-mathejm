import {useState} from 'react';

import { InlineMath } from 'react-katex';

export default function Section1() {
  const [hidden, setHidden] = useState(true);

  function toggleHidden() {
    setHidden(!hidden);
  }
  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices</h2>
        <p className="m-4">
          Chaque question mobilise les techniques de développement vues dans la
          section. Prenez le temps d’écrire vos calculs avant de consulter les
          corrigés détaillés.
        </p>
        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 1</h3>
            <p>
              Développez et réduisez <InlineMath math="f(x) = 3(x - 2)^2 + 4" /> afin de déterminer
              les coefficients <InlineMath math="a" />, <InlineMath math="b" /> et <InlineMath math="c" /> de la forme développée.
            </p>
          </li>
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 2</h3>
            <p>
              On considère <InlineMath math="g(x) = -2(x + 3)(x - 5)" />. Écrivez <InlineMath math="g(x)" /> sous la
              forme <InlineMath math="ax^2 + bx + c" />.
            </p>
          </li>
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 3</h3>
            <p>
              Transformez <InlineMath math={String.raw`h(x) = \dfrac{1}{2}(x - 4)(x - 1) + 3`} /> en une forme
              développée simplifiée.
            </p>
          </li>
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 4</h3>
            <p>
              Simplifiez <InlineMath math="p(x) = (x + 2)^2 - (x - 3)^2" /> en exploitant les
              identités remarquables pour obtenir la forme développée.
            </p>
          </li>
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 5</h3>
            <p>
              Développez <InlineMath math="q(x) = 5(x - 1)^2 - 7" /> et identifiez les coefficients
              <InlineMath math="a" />, <InlineMath math="b" /> et <InlineMath math="c" />.
            </p>
          </li>
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 6</h3>
            <p>
              Développez <InlineMath math="r(x) = (2x - 3)(x + 5)" /> et écrivez le résultat sous la
              forme <InlineMath math="ax^2 + bx + c" />.
            </p>
          </li>
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 7</h3>
            <p>
              Calculez la forme développée de <InlineMath math="s(x) = (x - 4)^2 + (x + 4)^2" /> en
              réduisant les termes.
            </p>
          </li>
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 8</h3>
            <p>
              Une fonction polynomiale vérifie <InlineMath math="f(x) = k(x - 1)(x + 2)" /> et <InlineMath math="f(0) = 6" />. Déterminez <InlineMath math="k" /> puis la forme développée de <InlineMath math="f" />.
            </p>
          </li>
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 9</h3>
            <p>
              La parabole <InlineMath math="C" /> a pour sommet <InlineMath math="S(1, -4)" /> et passe par le point
              <InlineMath math="A(3, 0)" />. Déterminez l’expression développée de <InlineMath math="f" />, polynôme du
              second degré dont la courbe représentative est <InlineMath math="C" />.
            </p>
          </li>
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 10</h3>
            <p>
              On sait que <InlineMath math="f" /> est un trinôme vérifiant <InlineMath math="f(-1) = 0" />, <InlineMath math="f(1) = 4" /> et
              <InlineMath math="f(2) = 9" />. Reconstituez la forme développée de <InlineMath math="f(x) = ax^2 + bx + c" /> à partir de ce système de trois équations.
            </p>
          </li>
        </ol>
        <div className="exercise__actions">
          <button className="prim-btn px-5 py-2.5 m-7" type="button" onClick={toggleHidden}>
            {hidden ? "Afficher" : "Masquer"} les réponses
          </button>
        </div>
        <div className="answers" hidden={hidden}>
          <p>
            Corrigés détaillés: identité(s) utilisée(s), calculs intermédiaires, justification du signe et
            vérifications rapides pour sécuriser les résultats.
          </p>
          <ol className="answer-list">
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 1</summary>
                <div className="answer__content">
                  <p>
                    On développe d’abord le carré : <InlineMath math="(x - 2)^2 = x^2 - 4x + 4" />.
                    En multipliant par <InlineMath math="3" /> on obtient <InlineMath math="3x^2 - 12x + 12" />. On
                    ajoute ensuite la constante <InlineMath math="4" />, ce qui donne <InlineMath math="f(x) = 3x^2 - 12x + 16" />. Ainsi <InlineMath math="a = 3" />, <InlineMath math="b = -12" /> et <InlineMath math="c = 16" />.
                  </p>
                  <p>
                    Remarque pédagogique: rappeler aux élèves de citer l’identité remarquable utilisée et de
                    vérifier la cohérence du signe de <InlineMath math="b" /> (ici négatif car la translation est vers la droite).
                  </p>
                </div>
              </details>
            </li>
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 2</summary>
                <div className="answer__content">
                  <p>
                    On développe <InlineMath math="(x + 3)(x - 5) = x^2 - 5x + 3x - 15 = x^2 - 2x - 15" />. En multipliant par <InlineMath math="-2" />, on obtient <InlineMath math="g(x) = -2x^2 + 4x + 30" />.
                  </p>
                  <p>
                    Démarche: détailler les quatre produits (FOIL), réduire, puis distribuer le facteur <InlineMath math="-2" />.
                    Vérifier le sens d’ouverture (<InlineMath math="a<0" />) et la cohérence numérique de <InlineMath math="c" />.
                  </p>
                </div>
              </details>
            </li>
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 3</summary>
                <div className="answer__content">
                  <p>
                    On développe d’abord <InlineMath math="(x - 4)(x - 1) = x^2 - x - 4x + 4 = x^2 - 5x + 4" />. En multipliant par <InlineMath math="\dfrac{1}{2}" /> on obtient
                    <InlineMath math="\dfrac{1}{2}x^2 - \dfrac{5}{2}x + 2" />. Enfin on ajoute <InlineMath math="3" /> :
                    <InlineMath math={String.raw`h(x) = \dfrac{1}{2}x^2 - \dfrac{5}{2}x + 5`} />.
                  </p>
                  <p>
                    Astuce: conserver les fractions sous forme rationnelle (<InlineMath math="\tfrac{5}{2}" />) et ne pas mélanger
                    décimaux et fractions pour limiter les erreurs d’arrondi.
                  </p>
                </div>
              </details>
            </li>
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 4</summary>
                <div className="answer__content">
                  <p>
                    On peut développer séparément : <InlineMath math="(x + 2)^2 = x^2 + 4x + 4" /> et
                    <InlineMath math="(x - 3)^2 = x^2 - 6x + 9" />. En soustrayant, les <InlineMath math="x^2" />
                    s’annulent et il reste <InlineMath math="4x - (-6x) + 4 - 9 = 10x - 5" />. On
                    obtient donc <InlineMath math="p(x) = 10x - 5" />.
                  </p>
                  <p>
                    Variante experte: utiliser <InlineMath math="A^2-B^2=(A-B)(A+B)" /> avec <InlineMath math="A=x+2" />, <InlineMath math="B=x-3" />.
                    On obtient directement <InlineMath math="5(2x-1)=10x-5" />.
                  </p>
                </div>
              </details>
            </li>
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 5</summary>
                <div className="answer__content">
                  <p>
                    On calcule <InlineMath math="(x - 1)^2 = x^2 - 2x + 1" />. Après multiplication
                    par <InlineMath math="5" />, on obtient <InlineMath math="5x^2 - 10x + 5" />. En retranchant <InlineMath math="7" /> on
                    aboutit à <InlineMath math="q(x) = 5x^2 - 10x - 2" />.
                  </p>
                  <p>
                    Contrôle: identifier visuellement <InlineMath math="a=5" /> (ouverture vers le haut), <InlineMath math="b=-10" /> (sommet décalé à droite),
                    et constante <InlineMath math="c=-2" />.
                  </p>
                </div>
              </details>
            </li>
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 6</summary>
                <div className="answer__content">
                  <p>
                    On distribue : <InlineMath math="(2x - 3)(x + 5) = 2x(x + 5) - 3(x + 5) = 2x^2 + 10x - 3x - 15 = 2x^2 + 7x - 15" />.
                  </p>
                </div>
              </details>
            </li>
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 7</summary>
                <div className="answer__content">
                  <p>
                    On développe séparément : <InlineMath math="(x - 4)^2 = x^2 - 8x + 16" /> et
                    <InlineMath math="(x + 4)^2 = x^2 + 8x + 16" />. Leur somme vaut <InlineMath math="2x^2 + 32" />.
                  </p>
                </div>
              </details>
            </li>
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 8</summary>
                <div className="answer__content">
                  <p>
                    En évaluant <InlineMath math="f(0)" /> on obtient <InlineMath math="6 = k(0 - 1)(0 + 2) = -2k" />.
                    Ainsi <InlineMath math="k = -3" />. On développe ensuite <InlineMath math="-3(x - 1)(x + 2) = -3(x^2 + x - 2) = -3x^2 - 3x + 6" />.
                  </p>
                </div>
              </details>
            </li>
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 9</summary>
                <div className="answer__content">
                  <p>
                    Avec le sommet <InlineMath math="S(1, -4)" />, la forme canonique est
                    <InlineMath math="f(x) = a(x - 1)^2 - 4" />. Le point <InlineMath math="A(3, 0)" /> donne
                    <InlineMath math="0 = a(3 - 1)^2 - 4 = 4a - 4" />, donc <InlineMath math="a = 1" />. On développe
                    alors <InlineMath math="(x - 1)^2 - 4 = x^2 - 2x - 3" />.
                  </p>
                </div>
              </details>
            </li>
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 10</summary>
                <div className="answer__content">
                  <p>
                    On écrit le système : <InlineMath math="a - b + c = 0" /> (pour <InlineMath math="x = -1" />),
                    <InlineMath math="a + b + c = 4" /> (pour <InlineMath math="x = 1" />) et <InlineMath math="4a + 2b + c = 9" /> (pour
                    <InlineMath math="x = 2" />). Soustraire la première équation de la deuxième donne
                    <InlineMath math="2b = 4" />, donc <InlineMath math="b = 2" />. En remplaçant <InlineMath math="b" /> dans la première,
                    on obtient <InlineMath math="a + c = 2" />. En remplaçant <InlineMath math="b" /> dans la troisième,
                    <InlineMath math="4a + c = 5" />. En soustrayant <InlineMath math="a + c = 2" /> de <InlineMath math="4a + c = 5" /> on
                    trouve <InlineMath math="3a = 3" />, donc <InlineMath math="a = 1" /> puis <InlineMath math="c = 1" />. Ainsi
                    <InlineMath math="f(x) = x^2 + 2x + 1" />.
                  </p>
                </div>
              </details>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
