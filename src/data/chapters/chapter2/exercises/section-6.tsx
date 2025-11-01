import { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';

export default function Section6Exercises() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(h => !h);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices — Approcher le nombre dérivé en a (calculatrice)</h2>
        <p className="m-4">
          Pour chaque fonction <InlineMath math="f" /> et valeur <InlineMath math="a" />, entrez sur la calculatrice la syntaxe
          <BlockMath math={String.raw`\dfrac{d}{dx}\big(f(x)\big)\bigg|_{x=a}`} />
          Indiquez une valeur arrondie à <InlineMath math={String.raw`10^{-3}`} />. Pour les fonctions trigonométriques, travaillez en radians.
        </p>

        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 1</h3>
            <p>
              <InlineMath math={String.raw`f(x)=x^3-5x^2+2x-1`} />, évaluer <InlineMath math={String.raw`f'(2)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 2</h3>
            <p>
              <InlineMath math={String.raw`f(x)=\sqrt{x^2+1}`} />, évaluer <InlineMath math={String.raw`f'(3)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 3</h3>
            <p>
              <InlineMath math={String.raw`f(x)=\dfrac{1}{x+2}`} />, évaluer <InlineMath math={String.raw`f'(1)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 4</h3>
            <p>
              <InlineMath math={String.raw`f(x)=\mathrm{e}^{2x}`} />, évaluer <InlineMath math={String.raw`f'(0)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 5</h3>
            <p>
              <InlineMath math={String.raw`f(x)=\ln(x^2+1)`} />, évaluer <InlineMath math={String.raw`f'(1)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 6</h3>
            <p>
              <InlineMath math={String.raw`f(x)=\sin(3x)`} />, évaluer <InlineMath math={String.raw`f'\!\left(\tfrac{\pi}{6}\right)`} /> (radians).
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 7</h3>
            <p>
              <InlineMath math={String.raw`f(x)=x\ln x`} /> (domaine <InlineMath math={String.raw`x>0`} />), évaluer <InlineMath math={String.raw`f'(2)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 8</h3>
            <p>
              <InlineMath math={String.raw`f(x)=\sqrt{x^2-4x+5}`} />, évaluer <InlineMath math={String.raw`f'(2)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 9</h3>
            <p>
              <InlineMath math={String.raw`f(x)=\tan x`} />, évaluer <InlineMath math={String.raw`f'(0{,}5)`} /> (radians).
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 10</h3>
            <p>
              <InlineMath math={String.raw`f(x)=\dfrac{x^3}{x^2+1}`} />, évaluer <InlineMath math={String.raw`f'(1)`} />.
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
            Indication générale : saisir la commande dérivée sur la calculatrice avec la variable <InlineMath math="x" /> et la valeur précise de <InlineMath math="a" />.
            Ci‑dessous : valeurs attendues (≈ à <InlineMath math={String.raw`10^{-3}`} /> près).
          </p>
          <ol className="answer-list">
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 1</summary>
                <div className="answer__content">
                  <p><InlineMath math={String.raw`f'(2)= -6`} />.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 2</summary>
                <div className="answer__content">
                  <p><InlineMath math={String.raw`f'(3)= \dfrac{3}{\sqrt{10}} \approx 0{,}949`} />.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 3</summary>
                <div className="answer__content">
                  <p><InlineMath math={String.raw`f'(1)= -\dfrac{1}{9} \approx -0{,}111`} />.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 4</summary>
                <div className="answer__content">
                  <p><InlineMath math={String.raw`f'(0)= 2`} />.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 5</summary>
                <div className="answer__content">
                  <p><InlineMath math={String.raw`f'(1)= 1`} />.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 6</summary>
                <div className="answer__content">
                  <p><InlineMath math={String.raw`f'\!\left(\tfrac{\pi}{6}\right)= 0`} />.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 7</summary>
                <div className="answer__content">
                  <p><InlineMath math={String.raw`f'(2)= 1+\ln 2 \approx 1{,}693`} />.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 8</summary>
                <div className="answer__content">
                  <p><InlineMath math={String.raw`f'(2)= 0`} />.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 9</summary>
                <div className="answer__content">
                  <p><InlineMath math={String.raw`f'(0{,}5)= \sec^2(0{,}5) \approx 1{,}298`} /> (radians).</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 10</summary>
                <div className="answer__content">
                  <p><InlineMath math={String.raw`f'(1)= 1`} />.</p>
                </div>
              </details>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

