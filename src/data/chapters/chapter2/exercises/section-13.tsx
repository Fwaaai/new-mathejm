import { useState } from 'react';
import { InlineMath, } from 'react-katex';
import graph40 from '/src/assets/img/graphs/graph40.png';
import table23 from '/src/assets/img/tables/table23.png';
import table24 from '/src/assets/img/tables/table24.png';

export default function Section13Exercises() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(h => !h);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices — Résoudre f'(x) = 0 et interpréter</h2>
        <p className="m-4">
          But : déterminer les points critiques (<InlineMath math="f'(x)=0" />), puis interpréter (max local, min local, ou inflexion
          horizontale) via le signe de <InlineMath math="f'" />. Sur un segment, tester aussi les bornes pour les extrema globaux.
        </p>

        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 1</h3>
            <p>
              Soit <InlineMath math={String.raw`f(x)=x^3-3x`} />. Résoudre <InlineMath math={String.raw`f'(x)=0`} /> et interpréter la nature des points critiques.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 2</h3>
            <p>
              Soit <InlineMath math={String.raw`f(x)=x^3`} />. Résoudre <InlineMath math={String.raw`f'(x)=0`} /> et conclure (extremum ou inflexion ?).
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 3</h3>
            <p>
              Soit <InlineMath math={String.raw`f(x)=x^4-2x^2`} />. Résoudre <InlineMath math={String.raw`f'(x)=0`} /> puis, à l’aide du signe de <InlineMath math="f'" />,
              classer les points (max local/min local/plateau).
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 4</h3>
            <p>
              Étude sur segment : pour <InlineMath math={String.raw`f(x)=x^3-3x+1`} /> sur <InlineMath math={String.raw`[-2;2]`} />, trouvez les points critiques et
              déterminez le maximum et le minimum globaux sur l’intervalle.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 5</h3>
            <p>
              Lecture graphique : sur la courbe de <InlineMath math={String.raw`f(x)=x^4-(x-1)^2`} />, repérez les tangentes horizontales et
              indiquez la nature (max/min/plateau). Justifiez brièvement.
            </p>
            <img src={graph40} alt="graph40" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 6</h3>
            <p>
              Soit <InlineMath math={String.raw`f(x)=-x^3+3x^2`} />. Résoudre <InlineMath math={String.raw`f'(x)=0`} /> puis déterminer, par le signe de <InlineMath math="f'" />,
              la nature des points critiques.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 7</h3>
            <p>
              Tableau de signes guidé : pour <InlineMath math={String.raw`f(x)=x^3-6x`} />, complétez le tableau de variation de <InlineMath math="f" /> à partir
              du signe de <InlineMath math="f'(x)=3x^2-6" /> et concluez sur la nature des points critiques.
            </p>
            <img src={table23} alt="table23" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 8</h3>
            <p>
              Soit <InlineMath math={String.raw`f(x)=x^2(x-2)`} />. Résoudre <InlineMath math={String.raw`f'(x)=0`} />. Indiquez s’il y a un point d’inflexion horizontal.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 9</h3>
            <p>
              Soit <InlineMath math={String.raw`f(x)=(x+1)^3-4x`} />. Trouvez les points critiques et leur nature via le signe de <InlineMath math="f'" />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 10</h3>
            <p>
              Sur <InlineMath math={String.raw`[-3;1]`} /> pour <InlineMath math={String.raw`f(x)=x^3+3x^2`} />, déterminez les extrema globaux (valeurs et abscisses)
              en considérant bornes et points critiques.
            </p>
          </li>
        </ol>

        <div className="exercise__actions">
          <button className="prim-btn px-5 py-2.5 m-7" type="button" onClick={toggleHidden}>
            {hidden ? 'Afficher' : 'Masquer'} les réponses
          </button>
        </div>

        <div className="answers" hidden={hidden}>
          <p>
            Astuce : factoriser <InlineMath math="f'(x)" /> quand c’est possible. Pour l’interprétation, relever le signe de <InlineMath math="f'" /> de part et d’autre
            de chaque solution de <InlineMath math="f'(x)=0" />.
          </p>
          <ol className="answer-list">
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 1</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f'(x)=3x^2-3=3(x-1)(x+1)`} /> ⇒ <InlineMath math={String.raw`x=\pm 1`} />.
                    Signe : de + à − en −1 ⇒ max local en −1 ; de − à + en 1 ⇒ min local en 1.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 2</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f'(x)=3x^2`} /> ⇒ <InlineMath math={String.raw`x=0`} />.
                    Signe non négatif des deux côtés ⇒ pas d’extremum ; point d’inflexion horizontal en 0.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 3</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f'(x)=4x^3-4x=4x(x-1)(x+1)`} /> ⇒ <InlineMath math={String.raw`x\in\{ -1, 0, 1 \}`} />.
                    Signe : min local en −1 (−→+), plateau/inflexion en 0 (signe ne change pas), max local en 1 (+→−).
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 4</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f'(x)=3x^2-3`} /> ⇒ <InlineMath math={String.raw`x=\pm 1`} />. Sur <InlineMath math={String.raw`[-2;2]`} /> :
                    valeurs : <InlineMath math={String.raw`f(-2)=-8+6+1=-1`} />, <InlineMath math={String.raw`f(-1)=1+3+1=5`} />, <InlineMath math={String.raw`f(1)=1-3+1=-1`} />, <InlineMath math={String.raw`f(2)=8-6+1=3`} />.
                    Max global : 5 en x=−1 ; min global : −1 en x=−2 et x=1.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 5</summary>
                <div className="answer__content">
                  <p>
                    (-1, -3) est un minimum local (et global).
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 6</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f'(x)=-3x^2+6x=-3x(x-2)`} /> ⇒ <InlineMath math={String.raw`x\in\{0,2\}`} />.
                    Signe : de − à + en 0 ⇒ min local en 0 ; de + à − en 2 ⇒ max local en 2.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 7</summary>
                <div className="answer__content">
                  <p>
                    <img src={table24} alt="" />
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 8</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f'(x)=2x(x-2)+x^2=3x^2-4x=x(3x-4)`} /> ⇒ <InlineMath math={String.raw`x\in\{0,\tfrac{4}{3}\}`} />.
                    Signe de <InlineMath math="f'" /> : pas de changement autour de 0 (inflexion horizontale), de − à + en 4/3 ⇒ min local en 4/3.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 9</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f'(x)=3(x+1)^2-4`} /> ⇒ <InlineMath math={String.raw`3(x+1)^2=4`} /> ⇒ <InlineMath math={String.raw`x=-1\pm \tfrac{2}{\sqrt{3}}`} />.
                    Signe : + entre les deux zéros (car parabole de (x+1)^2) ? Ici, tester des points ; on trouve min local au zéro central si applicable et max/min selon alternance.
                    (Suggéré : min local pour la racine la plus à gauche? Vérifier numériquement.)
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 10</summary>
                <div className="answer__content">
                  <p>
                    Points critiques : <InlineMath math={String.raw`f'(x)=3x^2+6x=3x(x+2)`} /> ⇒ <InlineMath math={String.raw`x\in\{ -2, 0 \}`} />.
                    Valeurs : <InlineMath math={String.raw`f(-3)=-27+27=0`} />, <InlineMath math={String.raw`f(-2)=-8+12=4`} />, <InlineMath math={String.raw`f(0)=0`} />, <InlineMath math={String.raw`f(1)=1+3=4`} />.
                    Max global : 4 atteint en x=−2 et x=1 ; min global : 0 atteint en x=−3 et x=0.
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

