import { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import graph33 from '/src/assets/img/graphs/graph33.png';
import graph34 from '/src/assets/img/graphs/graph34.png';
import graph35 from '/src/assets/img/graphs/graph35.png';
export default function Section9Exercises() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(h => !h);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices — Nombre dérivé: graphique et calcul</h2>
        <p className="m-4">
          Deux approches complémentaires : lecture graphique de la pente de la tangente (<InlineMath math={String.raw`m=\dfrac{\Delta y}{\Delta x}`} />)
          et calcul via le taux d’accroissement <InlineMath math={String.raw`\dfrac{f(a+h)-f(a)}{h}`} /> puis la limite quand <InlineMath math="h\to 0" />.
        </p>

        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 1</h3>
            <p>
              Lecture graphique : la tangente en <InlineMath math="x=a" /> passe par <InlineMath math="A(1,1)" /> et <InlineMath math="B(2,4)" />.
              Estimez <InlineMath math="f'(a)" />.
            </p>
            <img src={graph33} className="img" alt="graphique" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 2</h3>
            <p>
              Lecture graphique : la tangente en <InlineMath math="x=a" /> passe par <InlineMath math="C(-1,3)" /> et <InlineMath math="D(3,1)" />.
              Estimez <InlineMath math="f'(a)" /> et précisez le signe de la pente.
            </p>
            <img src={graph34} className="img" alt="graphique" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 3</h3>
            <p>
              Par le calcul : pour <InlineMath math="f(x)=x^2" /> et <InlineMath math="a=1" />, retrouvez <InlineMath math="f'(1)" /> via le taux d’accroissement.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 4</h3>
            <p>
              Par le calcul : pour <InlineMath math="f(x)=x^3-3x" /> et <InlineMath math="a=2" />, calculez <InlineMath math="f'(2)" /> par la définition.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 5</h3>
            <p>
              Lecture graphique : on lit sur la tangente en <InlineMath math="x=a" /> une élévation <InlineMath math={String.raw`\Delta y=-2`} /> quand
              <InlineMath math={String.raw`\Delta x=4`} />. Estimez <InlineMath math="f'(a)" />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 6</h3>
            <p>
              Par le calcul : pour <InlineMath math="f(x)=x^2+2x-3" /> et <InlineMath math="a=-1" />, calculez <InlineMath math="f'(-1)" /> via la définition.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 7</h3>
            <p>
              Lecture graphique : la tangente en <InlineMath math="x=b" /> est horizontale. Que vaut <InlineMath math="f'(b)" /> ?
            </p>
            <img src={graph35} className="img" alt="graphique" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 8</h3>
            <p>
              Lecture graphique : la tangente en <InlineMath math="x=c" /> est décroissante et fait une chute de 5 unités quand <InlineMath math="x" /> augmente de 2 unités.
              Donnez <InlineMath math="f'(c)" />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 9</h3>
            <p>
              Par le calcul : pour <InlineMath math="f(x)=4x^2-5x+1" /> et <InlineMath math="a=0" />, calculez <InlineMath math="f'(0)" />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 10</h3>
            <p>
              Mixte : pour <InlineMath math="f(x)=x^3" /> et <InlineMath math="a=-1" />, (i) lisez graphiquement le signe de <InlineMath math="f'(-1)" /> puis
              (ii) confirmez par le calcul de la dérivée que la valeur est cohérente.
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
            Lectures de pente : <InlineMath math={String.raw`m=\dfrac{\Delta y}{\Delta x}`} />. Calculs : traiter le taux d’accroissement puis la limite. Vérifier signe et ordre de grandeur.
          </p>
          <ol className="answer-list">
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 1</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`m=\dfrac{4-1}{2-1}=3`} />
                  <p>Donc <InlineMath math="f'(a)\approx 3" /> (estimation graphique).</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 2</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`m=\dfrac{1-3}{3-(-1)}=\dfrac{-2}{4}=-0{,}5`} />
                  <p><InlineMath math="f'(a)\approx -0{,}5" /> (pente négative).</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 3</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\dfrac{(1+h)^2-1}{h}=\dfrac{2h+h^2}{h}=2+h`} />
                  <p><InlineMath math={String.raw`f'(1)=\lim_{h\to 0}(2+h)=2`} />.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 4</summary>
                <div className="answer__content">
                  <p><InlineMath math={String.raw`f'(x)=3x^2-3`} />, donc <InlineMath math={String.raw`f'(2)=9`} />.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 5</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`m=\dfrac{-2}{4}=-0{,}5`} />
                  <p><InlineMath math="f'(a)\approx -0{,}5" />.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 6</summary>
                <div className="answer__content">
                  <p><InlineMath math={String.raw`f'(x)=2x+2`} />, donc <InlineMath math={String.raw`f'(-1)=0`} />.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 7</summary>
                <div className="answer__content">
                  <p>Tangente horizontale ⇒ pente nulle ; <InlineMath math="f'(b)=0" />.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 8</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`m=\dfrac{-5}{2}=-2{,}5`} />
                  <p><InlineMath math="f'(c)\approx -2{,}5" />.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 9</summary>
                <div className="answer__content">
                  <p><InlineMath math={String.raw`f'(x)=8x-5`} />, donc <InlineMath math={String.raw`f'(0)=-5`} />.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 10</summary>
                <div className="answer__content">
                  <p>Signe : pour <InlineMath math="x^3" />, la pente en <InlineMath math="x=-1" /> est positive (courbe croissante). Calcul :
                    <InlineMath math={String.raw`f'(x)=3x^2`} />, donc <InlineMath math={String.raw`f'(-1)=3`} />.</p>
                </div>
              </details>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
