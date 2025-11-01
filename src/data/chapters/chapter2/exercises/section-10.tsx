import { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import graph36 from '/src/assets/img/graphs/graph36.png';
import graph37 from '/src/assets/img/graphs/graph37.png';
import graph38 from '/src/assets/img/graphs/graph38.png';

export default function Section10Exercises() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(h => !h);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices — Intersections de la tangente avec les axes</h2>
        <p className="m-4">
          Rappels : si <InlineMath math="f" /> est dérivable en <InlineMath math="a" />, la tangente a pour équation
          <BlockMath math={String.raw`y=f(a)+f'(a)(x-a)`} />
          Intersections : avec l’axe des ordonnées <InlineMath math="(x=0)" /> : <InlineMath math={String.raw`(0,\,f(a)-a\,f'(a))`} />.
          Avec l’axe des abscisses <InlineMath math="(y=0)" /> (si <InlineMath math="f'(a)\ne 0" />) :
          <InlineMath math={String.raw`\big(a-\tfrac{f(a)}{f'(a)},\,0\big)`} />.
        </p>

        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 1</h3>
            <p>
              Soit <InlineMath math={String.raw`f(x)=x^2-3x+2`} /> et <InlineMath math="a=1" />. Donnez l’équation de la tangente en <InlineMath math="x=1" />
              puis ses intersections avec les axes.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 2</h3>
            <p>
              Soit <InlineMath math={String.raw`f(x)=x^3`} /> et <InlineMath math="a=-1" />. Donnez l’équation de la tangente et les coordonnées des
              points d’intersection avec les axes.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 3</h3>
            <p>
              On sait que <InlineMath math="f(a)=3" /> et <InlineMath math="f'(a)=-2" />. Donnez directement les intersections de la tangente avec les axes.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 4</h3>
            <p>
              On sait que <InlineMath math="f(a)=-1" /> et <InlineMath math="f'(a)=4" />. Donnez les coordonnées des points d’intersection avec les axes.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 5</h3>
            <p>
              Lecture graphique : au point <InlineMath math="a=0" /> de la courbe <InlineMath math={String.raw`f(x)=x^2+1`} />, tracer la tangente et lire
              ses intersections avec les axes.
            </p>
            <img src={graph36} className="img" alt="graphique" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 6</h3>
            <p>
              Soit <InlineMath math={String.raw`f(x)=2x^2-x+1`} /> en <InlineMath math="a=1" />. Calculez la tangente puis ses intersections avec les axes.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 7</h3>
            <p>
              Cas horizontal : <InlineMath math={String.raw`f(x)=(x-1)^2+2`} /> en <InlineMath math="a=1" />. Donnez l’équation de la tangente et discutez
              l’existence des intersections avec <InlineMath math="y=0" /> et <InlineMath math="x=0" />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 8</h3>
            <p>
              Soit <InlineMath math={String.raw`f(x)=-x^2+4x`} /> et <InlineMath math="a=2" />. Donnez la tangente et ses intersections avec les axes.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 9</h3>
            <p>
              Lecture/validation : pour <InlineMath math={String.raw`f(x)=x^2-4x+3`} /> au point <InlineMath math="a=1" />, écrivez la tangente et ses intersections.
              Vérifiez sur un graphique.
            </p>
            <img src={graph37} className="img" alt="graphique" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 10</h3>
            <p>
              Cas « vertical » (référence) : pour la courbe <InlineMath math={String.raw`f(x)=(x-1)^{1/3}+1`} /> au point <InlineMath math="a=1" />,
              on admet que la tangente est verticale <InlineMath math="x=1" />. Indiquez les intersections de cette tangente avec les axes.
            </p>
            <img src={graph38} className="img" alt="graphique" /> 
          </li>
        </ol>

        <div className="exercise__actions">
          <button className="prim-btn px-5 py-2.5 m-7" type="button" onClick={toggleHidden}>
            {hidden ? 'Afficher' : 'Masquer'} les réponses
          </button>
        </div>

        <div className="answers" hidden={hidden}>
          <p>
            Formules utiles : ordonnée à l’origine <InlineMath math={String.raw`y_0=f(a)-a\,f'(a)`} /> ; abscisse à l’origine (si <InlineMath math="f'(a)\ne 0" />)
            <InlineMath math={String.raw`x_0=a-\dfrac{f(a)}{f'(a)}`} />.
          </p>
          <ol className="answer-list">
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 1</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f(1)=0`} />, <InlineMath math={String.raw`f'(x)=2x-3`} />, donc <InlineMath math={String.raw`f'(1)=-1`} />.
                    Tangente : <InlineMath math={String.raw`y=0-1\,(x-1)=-x+1`} />. Intersections : <InlineMath math={String.raw`(0,1)`} /> et <InlineMath math={String.raw`(1,0)`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 2</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f(-1)=-1`} />, <InlineMath math={String.raw`f'(x)=3x^2`} />, donc <InlineMath math={String.raw`f'(-1)=3`} />.
                    Tangente : <InlineMath math={String.raw`y=-1+3(x+1)=3x+2`} />. Intersections : <InlineMath math={String.raw`(0,2)`} /> et <InlineMath math={String.raw`(-\tfrac{2}{3},0)`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 3</summary>
                <div className="answer__content">
                  <p>
                    Ordonnée : <InlineMath math={String.raw`y_0 = f(a)-a\,f'(a)=3-(-2)a=3+2a`} />.
                    Abscisse (car <InlineMath math="f'(a)\ne 0" />) : <InlineMath math={String.raw`x_0=a-\dfrac{3}{-2}=a+\tfrac{3}{2}`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 4</summary>
                <div className="answer__content">
                  <p>
                    Ordonnée : <InlineMath math={String.raw`y_0=f(a)-a\,f'(a)=-1-4a`} />. Abscisse : <InlineMath math={String.raw`x_0=a-\dfrac{-1}{4}=a+\tfrac{1}{4}`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 5</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math="f(0)=1" />, <InlineMath math="f'(0)=0" /> ⇒ tangente horizontale <InlineMath math="y=1" />.
                    Intersections : avec <InlineMath math="x=0" /> : <InlineMath math="(0,1)" /> ; avec <InlineMath math="y=0" /> : aucune.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 6</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f(1)=2-1+1=2`} />, <InlineMath math={String.raw`f'(x)=4x-1`} />, <InlineMath math={String.raw`f'(1)=3`} />.
                    Tangente : <InlineMath math={String.raw`y=2+3(x-1)=3x-1`} />.
                    Intersections : <InlineMath math={String.raw`(0,-1)`} /> et <InlineMath math={String.raw`(\tfrac{1}{3},0)`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 7</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math="f'(1)=0" /> ⇒ tangente horizontale <InlineMath math="y=f(1)=2" />.
                    Intersections : avec <InlineMath math="y=0" /> aucune (sauf si <InlineMath math="f(1)=0" />) ; avec <InlineMath math="x=0" /> : <InlineMath math="(0,2)" />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 8</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f(2)=-4+8=4`} />, <InlineMath math={String.raw`f'(x)=-2x+4`} />, <InlineMath math={String.raw`f'(2)=0`} /> ⇒ tangente horizontale
                    <InlineMath math="y=4" />. Intersections : <InlineMath math="(0,4)" /> et aucune avec <InlineMath math="y=0" />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 9</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f(1)=0`} />, <InlineMath math={String.raw`f'(x)=2x-4`} />, <InlineMath math={String.raw`f'(1)=-2`} />.
                    Tangente : <InlineMath math={String.raw`y= -2(x-1)= -2x+2`} />. Intersections : <InlineMath math="(0,2)" /> et <InlineMath math="(1,0)" />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 10</summary>
                <div className="answer__content">
                  <p>
                    Tangente verticale <InlineMath math="x=1" />. Intersections : avec l’axe des abscisses <InlineMath math="(1,0)" /> ; avec l’axe des ordonnées : aucune
                    (sauf si <InlineMath math="a=0" />).
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

