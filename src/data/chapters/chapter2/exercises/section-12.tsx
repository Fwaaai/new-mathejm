import { useState } from 'react';
import { InlineMath,} from 'react-katex';
import graph39 from '/src/assets/img/graphs/graph39.png';

export default function Section12Exercises() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(h => !h);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices — Tangentes parallèles: résoudre f'(x) = f'(a)</h2>
        <p className="m-4">
          Objectif: pour une fonction donnée et un point d’appui <InlineMath math="a" />, déterminer les abscisses <InlineMath math="x" /> telles que
          les tangentes en <InlineMath math="x" /> et <InlineMath math="a" /> soient parallèles, c’est‑à‑dire <InlineMath math={String.raw`f'(x)=f'(a)`} />.
        </p>

        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 1</h3>
            <p>
              Soit <InlineMath math={String.raw`f(x)=x^3-3x`} /> et <InlineMath math="a=-1" />. Résoudre <InlineMath math={String.raw`f'(x)=f'(-1)`} /> puis, si demandé,
              donner les solutions <InlineMath math="x\ne a" />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 2</h3>
            <p>
              Soit <InlineMath math={String.raw`f(x)=x^2+4x-1`} /> et <InlineMath math="a=0" />. Résoudre <InlineMath math={String.raw`f'(x)=f'(0)`} />. Y a‑t‑il des solutions
              autres que <InlineMath math="x=a" /> ?
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 3</h3>
            <p>
              Soit <InlineMath math={String.raw`f(x)=x^4`} /> et <InlineMath math="a=1" />. Résoudre <InlineMath math={String.raw`f'(x)=f'(1)`} /> et conclure sur l’existence
              d’un autre point que <InlineMath math="x=1" /> ayant une tangente parallèle.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 4</h3>
            <p>
              Soit <InlineMath math={String.raw`f(x)=x^3-6x`} /> et <InlineMath math="a=-1" />. Résoudre <InlineMath math={String.raw`f'(x)=f'(-1)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 5</h3>
            <p>
              Soit <InlineMath math={String.raw`f(x)=x^3+x`} /> et <InlineMath math="a=0" />. Résoudre <InlineMath math={String.raw`f'(x)=f'(0)`} /> et commenter.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 6</h3>
            <p>
              Soit <InlineMath math={String.raw`f(x)=x^3-3x^2+2`} /> et <InlineMath math="a=2" />. Résoudre <InlineMath math={String.raw`f'(x)=f'(2)`} /> puis fournir la/les solution(s)
              distincte(s) de <InlineMath math="x=2" />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 7</h3>
            <p>
              Lecture graphique guidée: pour <InlineMath math={String.raw`f(x)=x^3-3x+1`} /> au point <InlineMath math="a=1" />, tracer la tangente et lire sa pente.
              Résoudre ensuite <InlineMath math={String.raw`f'(x)=f'(1)`} /> par le calcul.
            </p>
            <img src={graph39} alt="" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 8</h3>
            <p>
              Soit <InlineMath math={String.raw`f(x)=-2x^3+5x`} /> et <InlineMath math="a=-1" />. Résoudre <InlineMath math={String.raw`f'(x)=f'(-1)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 9</h3>
            <p>
              Cas affine: <InlineMath math={String.raw`f(x)=2x-3`} /> et <InlineMath math="a=4" />. Discuter l’ensemble des <InlineMath math="x" /> tels que
              <InlineMath math={String.raw`f'(x)=f'(a)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 10</h3>
            <p>
              Domaine à respecter: <InlineMath math={String.raw`f(x)=\dfrac{x^2-1}{x-1}`} /> définie sur <InlineMath math={String.raw`\mathbb{R}\setminus{1\\}`} /> et <InlineMath math="a=0" />.
              Résoudre <InlineMath math={String.raw`f'(x)=f'(0)`} /> et préciser le domaine des solutions.
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
            Méthode: calculer <InlineMath math="f'(x)" /> et <InlineMath math="f'(a)" />, résoudre l’équation <InlineMath math={String.raw`f'(x)=f'(a)`} />, puis filtrer selon la consigne
            (garder/retirer <InlineMath math="x=a" />) et le domaine de définition.
          </p>
          <ol className="answer-list">
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 1</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f'(x)=3x^2-3`} />, <InlineMath math={String.raw`f'(-1)=0`} /> ⇒ <InlineMath math={String.raw`3x^2-3=0`} /> ⇒ <InlineMath math={String.raw`x=\pm 1`} />.
                    Distinct de <InlineMath math="a=-1" />: <InlineMath math="x=1" />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 2</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f'(x)=2x+4`} />, <InlineMath math={String.raw`f'(0)=4`} /> ⇒ <InlineMath math={String.raw`2x+4=4`} /> ⇒ <InlineMath math="x=0" /> seulement.
                    Pas d’autre solution que <InlineMath math="x=a" />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 3</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f'(x)=4x^3`} />, <InlineMath math={String.raw`f'(1)=4`} /> ⇒ <InlineMath math={String.raw`4x^3=4`} /> ⇒ <InlineMath math={String.raw`x=1`} /> seulement.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 4</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f'(x)=3x^2-6`} />, <InlineMath math={String.raw`f'(-1)=-3`} /> ⇒ <InlineMath math={String.raw`3x^2-6=-3`} /> ⇒ <InlineMath math={String.raw`x^2=1`} /> ⇒ <InlineMath math={String.raw`x=\pm 1`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 5</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f'(x)=3x^2+1`} />, <InlineMath math={String.raw`f'(0)=1`} /> ⇒ <InlineMath math={String.raw`3x^2+1=1`} /> ⇒ <InlineMath math={String.raw`x=0`} /> seulement.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 6</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f'(x)=3x^2-6x`} />, <InlineMath math={String.raw`f'(2)=0`} /> ⇒ <InlineMath math={String.raw`3x(x-2)=0`} /> ⇒ <InlineMath math={String.raw`x\in\{0,2\}`} />.
                    Distinct de 2 : <InlineMath math="x=0" />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 7</summary>
                <div className="answer__content">
                  <p>
                    Par le calcul : <InlineMath math={String.raw`f'(x)=3x^2-3`} />, <InlineMath math={String.raw`f'(1)=0`} /> ⇒ solutions <InlineMath math={String.raw`x=\pm 1`} />.
                    Graphiquement, on vérifie que les tangentes en −1 et 1 sont parallèles.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 8</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f'(x)=-6x^2+5`} />, <InlineMath math={String.raw`f'(-1)=-1`} /> ⇒ <InlineMath math={String.raw`-6x^2+5=-1`} /> ⇒ <InlineMath math={String.raw`x^2=1`} /> ⇒ <InlineMath math={String.raw`x=\pm 1`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 9</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f'(x)=2`} /> constant ⇒ <InlineMath math={String.raw`f'(x)=f'(a)`} /> pour tout <InlineMath math="x" />.
                    Toutes les tangentes sont parallèles.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 10</summary>
                <div className="answer__content">
                  <p>
                    Sur le domaine <InlineMath math={String.raw`\mathbb{R}\\\{1\\}`} />, <InlineMath math={String.raw`f(x)=x+1`} /> donc <InlineMath math={String.raw`f'(x)=1`} />.
                    <InlineMath math={String.raw`f'(0)=1`} /> ⇒ <InlineMath math={String.raw`f'(x)=f'(0)`} /> pour tout <InlineMath math={String.raw`x\ne 1`} />.
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

