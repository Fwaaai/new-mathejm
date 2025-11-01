import { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import table19 from '/src/assets/img/tables/table19.png';
import table20 from '/src/assets/img/tables/table20.png';
import graph28 from '/src/assets/img/graphs/graph28.png';
export default function Section4Exercises() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(h => !h);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices — Non‑dérivabilité en a (par calcul)</h2>
        <p className="m-4">
          Objectif : établir que <InlineMath math="f" /> n’est pas dérivable en <InlineMath math="a" /> en s’appuyant sur la
          définition via le taux d’accroissement, et/ou sur l’absence de continuité, ou encore sur une « pente infinie ».
        </p>

        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 1</h3>
            <p>
              Montrer que <InlineMath math={String.raw`f(x)=\dfrac{1}{x}`} /> n’est pas dérivable en <InlineMath math="a=0" />.
              Indication : vérifier d’abord la continuité en <InlineMath math="0" />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 2</h3>
            <p>
              Étudier à l’aide de la définition la dérivabilité de <InlineMath math={String.raw`f(x)=\sqrt[3]{x}`} /> en <InlineMath math="0" />.
              Conclure.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 3</h3>
            <p>
              À partir du taux d’accroissement, montrer que <InlineMath math={String.raw`f(x)=|x|`} /> n’est pas dérivable en <InlineMath math="0" />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 4</h3>
            <p>
              Soit <InlineMath math={String.raw`f(x)=\dfrac{x^2-1}{x-1}`} /> définie sur <InlineMath math={String.raw`\mathbb{R}\setminus{1\\}`} />.
              Étudier la dérivabilité en <InlineMath math="a=1" />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 5</h3>
            <p>
              On considère la fonction par morceaux <InlineMath math={String.raw`f(x)=\begin{cases}x+1 & x<0,\\ x^2 & x\ge 0.\end{cases}`} />.
              La fonction est‑elle dérivable en <InlineMath math="0" /> ? Justifier (continuité puis définition si nécessaire).
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 6</h3>
            <p>
              Un tableau des valeurs de <InlineMath math={String.raw`\dfrac{f(a+h)-f(a)}{h}`} /> (pour <InlineMath math="h" /> positif et négatif)
              montre que ces valeurs croissent en grandeur sans borne quand <InlineMath math="h\to 0" />.
              Que conclure sur la dérivabilité de <InlineMath math="f" /> en <InlineMath math="a" /> ?
            </p>
            <img src={table19} alt="" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 7</h3>
            <p>
              Un tableau indique <InlineMath math={String.raw`\dfrac{f(a+h)-f(a)}{h} \to 2`} /> quand <InlineMath math="h\to 0^-" /> et
              <InlineMath math={String.raw`\dfrac{f(a+h)-f(a)}{h} \to 3`} /> quand <InlineMath math="h\to 0^+" />.
              La dérivée en <InlineMath math="a" /> existe‑t‑elle ? Conclure sur la dérivabilité.
            </p>
            <img src={table20} alt="" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 8</h3>
            <p>
              D’après le graphique, la courbe de <InlineMath math="f" /> a une tangente verticale en <InlineMath math="x=0" />.
              Quelle conclusion tirer sur <InlineMath math="f'(0)" /> et sur la dérivabilité en <InlineMath math="0" /> ?
            </p>
            <img src={graph28} alt="" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 9</h3>
            <p>
              Étudier par la définition la dérivabilité de <InlineMath math={String.raw`f(x)=\sqrt[3]{x}+x`} /> en <InlineMath math="0" />.
              Conclure.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 10</h3>
            <p>
              Étudier par la définition la dérivabilité de <InlineMath math={String.raw`f(x)=|x|^{1/3}`} /> en <InlineMath math="0" />.
              Préciser le comportement unilatéral du taux d’accroissement.
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
            Rappels : (i) pas de continuité ⇒ pas de dérivabilité ; (ii) pentes unilatérales différentes ⇒ pas de dérivée ;
            (iii) pente « infinie » (tangente verticale) ⇒ pas de dérivée finie.
          </p>
          <ol className="answer-list">
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 1</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f(x)=\tfrac{1}{x}`} /> n’est pas définie en 0, donc pas continue en 0 ; elle n’est
                    pas dérivable en 0. On peut aussi invoquer l’asymptote verticale.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 2</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\frac{\sqrt[3]{h}-0}{h}=h^{-2/3}=\frac{1}{h^{2/3}}`} />
                  <p>Quand <InlineMath math="h\to 0" />, cela diverge vers <InlineMath math="+\infty" /> ; la dérivée finie n’existe pas ⇒ non‑dérivable en 0.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 3</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\frac{|h|-0}{h}=\frac{|h|}{h}=\begin{cases}1 & h>0,\\ -1 & h<0,\end{cases}`} />
                  <p>Les limites unilatérales diffèrent ; la limite bilatérale n’existe pas ⇒ pas de dérivée en 0.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 4</summary>
                <div className="answer__content">
                  <p>
                    La fonction n’est pas définie (trou) en 1, donc pas continue ; par conséquent, pas dérivable en 1.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 5</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`\lim_{x\to 0^-} f(x)=1`} /> et <InlineMath math={String.raw`\lim_{x\to 0^+} f(x)=0`} /> ; il y a saut donc pas de
                    continuité en 0 ⇒ non‑dérivable en 0.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 6</summary>
                <div className="answer__content">
                  <p>
                    Le taux d’accroissement diverge en grandeur ; on parle de pente infinie/tangente verticale : la dérivée finie
                    n’existe pas ⇒ non‑dérivable en <InlineMath math="a" />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 7</summary>
                <div className="answer__content">
                  <p>
                    Les limites unilatérales du taux d’accroissement (2 vs 3) diffèrent ; la limite bilatérale n’existe pas ⇒ pas de dérivée en <InlineMath math="a" />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 8</summary>
                <div className="answer__content">
                  <p>
                    Tangente verticale ⇒ pente « infinie » ; la dérivée finie n’existe pas ⇒ non‑dérivable en <InlineMath math="a" />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 9</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\frac{\sqrt[3]{h}+h}{h}=h^{-2/3}+1`} />
                  <p>Quand <InlineMath math="h\to 0" />, <InlineMath math={String.raw`h^{-2/3}\to +\infty`} /> ; somme → <InlineMath math="+\infty" />. Pas de dérivée finie ⇒ non‑dérivable en 0.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 10</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\frac{|h|^{1/3}-0}{h}=\frac{|h|^{1/3}}{h}=\operatorname{sgn}(h)\,|h|^{-2/3}`} />
                  <p>Pour <InlineMath math="h>0" />, cela vaut <InlineMath math={String.raw`|h|^{-2/3}\to +\infty`} /> ; pour <InlineMath math="h<0" />, cela vaut <InlineMath math={String.raw`-\,|h|^{-2/3}\to -\infty`} />.
                    Les limites unilatérales sont infinies et de signes opposés ⇒ pas de dérivée.</p>
                </div>
              </details>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

