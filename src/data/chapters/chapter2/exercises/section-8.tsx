import { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';

export default function Section8Exercises() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(h => !h);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices — Équation de la tangente en un point</h2>
        <p className="m-4">
          Méthode : calculer <InlineMath math="f(a)" /> et <InlineMath math="f'(a)" />, puis écrire
          <BlockMath math={String.raw`y=f(a)+f'(a)(x-a)`} />
          et, si besoin, développer en <InlineMath math="y=mx+p" /> avec <InlineMath math="m=f'(a)" />.
        </p>

        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 1</h3>
            <p>
              Soit <InlineMath math={String.raw`f(x)=x^3-3x+2`} /> et <InlineMath math="a=2" />. Donnez l’équation de la tangente à la courbe en <InlineMath math="x=2" />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 2</h3>
            <p>
              Soit <InlineMath math={String.raw`f(x)=x^2+4x-1`} /> et <InlineMath math="a=-1" />. Écrivez la tangente sous la forme <InlineMath math="y=mx+p" />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 3</h3>
            <p>
              Soit <InlineMath math={String.raw`f(x)=\dfrac{1}{x+1}`} /> et <InlineMath math="a=1" />. Déterminez l’équation de la tangente en <InlineMath math="x=1" />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 4</h3>
            <p>
              Soit <InlineMath math={String.raw`f(x)=\sqrt{x}`} /> (domaine <InlineMath math={String.raw`x\ge 0`} />) et <InlineMath math="a=4" />. Écrivez l’équation de la tangente.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 5</h3>
            <p>
              Soit <InlineMath math={String.raw`f(x)=\mathrm{e}^{2x}`} /> et <InlineMath math="a=0" />. Donnez la tangente en <InlineMath math="x=0" />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 6</h3>
            <p>
              On sait que <InlineMath math="f(a)=3" /> et <InlineMath math="f'(a)=-2" />. Donnez l’équation de la tangente en <InlineMath math="x=a" />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 7</h3>
            <p>
              Un tableau du taux d’accroissement <InlineMath math={String.raw`m_h=\dfrac{f(a+h)-f(a)}{h}`} /> pour <InlineMath math="h=\pm10^{-1},\,\pm10^{-2},\,\pm10^{-3}" />
              converge vers <InlineMath math="1{,}5" /> et on lit <InlineMath math="f(a)=2" />. Écrivez l’équation de la tangente.
            </p>
            <p>TODO : ajouter un tableau montrant <InlineMath math="m_h\to 1{,}5" /> et rappelant <InlineMath math="f(a)=2" />.</p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 8</h3>
            <p>
              Pour <InlineMath math={String.raw`f(x)=\ln(x)`} /> (domaine <InlineMath math={String.raw`x>0`} />) et <InlineMath math="a=1" />. Donnez l’équation de la tangente.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 9</h3>
            <p>
              Sur un graphique, on lit <InlineMath math="f(2)=5" /> et la pente locale <InlineMath math="f'(2)=-0{,}5" />. Écrivez l’équation de la tangente en <InlineMath math="x=2" />.
            </p>
            <p>TODO : ajouter un graphique annoté avec le point (2,5) et une pente −0,5.</p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 10</h3>
            <p>
              Soit <InlineMath math={String.raw`f(x)=x\,\mathrm{e}^{x}`} /> et <InlineMath math="a=-1" />. Donnez l’équation de la tangente.
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
            Rappel : écrire <InlineMath math={String.raw`y=f(a)+f'(a)(x-a)`} /> puis, si souhaité, développer en <InlineMath math="y=mx+p" />.
          </p>
          <ol className="answer-list">
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 1</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f(2)=8-6+2=4`} />, <InlineMath math={String.raw`f'(x)=3x^2-3`} />, donc <InlineMath math={String.raw`f'(2)=9`} />.
                    Tangente : <InlineMath math={String.raw`y=4+9(x-2)=9x-14`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 2</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f(-1)=1-4-1=-4`} />, <InlineMath math={String.raw`f'(x)=2x+4`} />, donc <InlineMath math={String.raw`f'(-1)=2`} />.
                    Tangente : <InlineMath math={String.raw`y=-4+2(x+1)=2x-2`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 3</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f'(x)=-\dfrac{1}{(x+1)^2}`} />, donc <InlineMath math={String.raw`f'(1)=-\tfrac{1}{4}`} /> et <InlineMath math={String.raw`f(1)=\tfrac{1}{2}`} />.
                    Tangente : <InlineMath math={String.raw`y=\tfrac{1}{2}-\tfrac{1}{4}(x-1)=-\tfrac{1}{4}x+\tfrac{3}{4}`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 4</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f(4)=2`} />, <InlineMath math={String.raw`f'(x)=\dfrac{1}{2\sqrt{x}}`} />, donc <InlineMath math={String.raw`f'(4)=\tfrac{1}{4}`} />.
                    Tangente : <InlineMath math={String.raw`y=2+\tfrac{1}{4}(x-4)=\tfrac{1}{4}x+1`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 5</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f(0)=1`} />, <InlineMath math={String.raw`f'(x)=2\mathrm{e}^{2x}`} />, donc <InlineMath math={String.raw`f'(0)=2`} />.
                    Tangente : <InlineMath math={String.raw`y=1+2(x-0)=2x+1`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 6</summary>
                <div className="answer__content">
                  <p>Tangente : <InlineMath math={String.raw`y=3-2(x-a)`} /> ou encore <InlineMath math={String.raw`y=-2x+(3+2a)`} />.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 7</summary>
                <div className="answer__content">
                  <p>
                    On lit <InlineMath math={String.raw`f'(a)=1{,}5`} /> et <InlineMath math="f(a)=2" /> ; tangente :
                    <InlineMath math={String.raw`y=2+1{,}5\,(x-a)`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 8</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f(1)=0`} />, <InlineMath math={String.raw`f'(x)=\dfrac{1}{x}`} />, donc <InlineMath math={String.raw`f'(1)=1`} />.
                    Tangente : <InlineMath math={String.raw`y=0+1\cdot(x-1)=x-1`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 9</summary>
                <div className="answer__content">
                  <p>
                    Tangente : <InlineMath math={String.raw`y=5-0{,}5\,(x-2)=-\tfrac{1}{2}x+6`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 10</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f'(x)=\mathrm{e}^{x}(1+x)`} />, d’où <InlineMath math={String.raw`f'(-1)=0`} /> et <InlineMath math={String.raw`f(-1)=-\tfrac{1}{\mathrm{e}}`} />.
                    Tangente horizontale : <InlineMath math={String.raw`y=-\tfrac{1}{\mathrm{e}}`} />.
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

