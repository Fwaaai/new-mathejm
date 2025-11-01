import { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';

export default function Section3Exercises() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(h => !h);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices — Tester la dérivabilité en a par calcul</h2>
        <p className="m-4">
          On utilise la définition <InlineMath math={String.raw`f'(a)=\lim_{h\to 0}\dfrac{f(a+h)-f(a)}{h}`} />. D’abord, vérifier la
          continuité en <InlineMath math="a" />; si la fonction n’est pas continue en <InlineMath math="a" />, elle n’est pas dérivable en
          ce point.
        </p>

        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 1</h3>
            <p>
              Montrer par la définition que <InlineMath math="f(x)=x^2" /> est dérivable en <InlineMath math="a=1" /> et calculer
              <InlineMath math="f'(1)" />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 2</h3>
            <p>
              En utilisant la définition, déterminer <InlineMath math="f'(a)" /> pour <InlineMath math="f(x)=x^2" /> (résultat en fonction de
              <InlineMath math="a" />).
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 3</h3>
            <p>
              Tester par la définition la dérivabilité de <InlineMath math="f(x)=3x+1" /> en <InlineMath math="a=-2" /> et donner
              <InlineMath math="f'(-2)" />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 4</h3>
            <p>
              Étudier la dérivabilité de <InlineMath math={String.raw`f(x)=\dfrac{1}{x}`} /> en <InlineMath math="a=2" /> par la définition et
              calculer <InlineMath math="f'(2)" /> si elle existe.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 5</h3>
            <p>
              Étudier la dérivabilité de <InlineMath math={String.raw`f(x)=\sqrt{x}`} /> en <InlineMath math="a=4" /> via la définition (rationaliser
              si nécessaire) et donner <InlineMath math="f'(4)" />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 6</h3>
            <p>
              Considérer <InlineMath math={String.raw`f(x)=\dfrac{x^2-4}{x-2}`} /> définie sur <InlineMath math={String.raw`\mathbb{R} \setminus \{2\}`} />.
              Tester la dérivabilité en <InlineMath math="a=2" /> en suivant la procédure (continuité puis définition).
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 7</h3>
            <p>
              Soit <InlineMath math={String.raw`f(x)=\begin{cases}x^2 & \text{si } x\ne 1,\\ 3 & \text{si } x=1.\end{cases}`} />.
              La fonction est‑elle dérivable en <InlineMath math="a=1" /> ? Justifier par la continuité puis la définition.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 8</h3>
            <p>
              Étudier la dérivabilité de <InlineMath math={String.raw`f(x)=|x|`} /> en <InlineMath math="a=0" /> à l’aide de la définition du taux
              d’accroissement.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 9</h3>
            <p>
              Par la définition, calculer <InlineMath math="f'(-1)" /> pour <InlineMath math={String.raw`f(x)=x^2+2x-3`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 10</h3>
            <p>
              À partir de la définition, montrer que pour toute constante <InlineMath math="k" />, la fonction
              <InlineMath math={String.raw`f(x)=k`} /> est dérivable en tout point et donner <InlineMath math="f'(a)" />.
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
            Méthode : vérifier la continuité en <InlineMath math="a" />, puis traiter <InlineMath math={String.raw`\dfrac{f(a+h)-f(a)}{h}`} /> et prendre la
            limite quand <InlineMath math="h\to 0" />. Une limite finie unique ⇔ dérivabilité en <InlineMath math="a" />.
          </p>
          <ol className="answer-list">
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 1</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\frac{f(1+h)-f(1)}{h}=\frac{(1+h)^2-1}{h}=\frac{1+2h+h^2-1}{h}=2+h`} />
                  <p>Donc <InlineMath math={String.raw`f'(1)=\lim_{h\to 0}(2+h)=2`} /> ; <InlineMath math="f" /> est dérivable en 1.</p>
                </div>
              </details>
            </li>
            
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 2</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\frac{f(a+h)-f(a)}{h}=\frac{(a+h)^2-a^2}{h}=\frac{2ah+h^2}{h}=2a+h`} />
                  <p>Donc <InlineMath math={String.raw`f'(a)=\lim_{h\to 0}(2a+h)=2a`} /> (dérivable pour tout <InlineMath math="a" />).</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 3</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\frac{f(-2+h)-f(-2)}{h}=\frac{3(-2+h)+1-(3(-2)+1)}{h}=\frac{3h}{h}=3`} />
                  <p><InlineMath math="f'(-2)=3" /> ; une droite affine est dérivable partout et la pente vaut le coefficient directeur.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 4</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\frac{f(2+h)-f(2)}{h}=\frac{\tfrac{1}{2+h}-\tfrac{1}{2}}{h}=\frac{\tfrac{2-(2+h)}{2(2+h)}}{h}=\frac{\tfrac{-h}{2(2+h)}}{h}= -\frac{1}{2(2+h)}`} />
                  <p>Donc <InlineMath math={String.raw`f'(2)=\lim_{h\to 0} -\dfrac{1}{2(2+h)}=-\dfrac{1}{4}`} />.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 5</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\frac{\sqrt{4+h}-\sqrt{4}}{h}=\frac{\sqrt{4+h}-2}{h}\cdot\frac{\sqrt{4+h}+2}{\sqrt{4+h}+2}=\frac{(4+h)-4}{h(\sqrt{4+h}+2)}=\frac{1}{\sqrt{4+h}+2}`} />
                  <p>Donc <InlineMath math={String.raw`f'(4)=\lim_{h\to 0}\dfrac{1}{\sqrt{4+h}+2}=\dfrac{1}{4}`} /> (continuité assurée sur <InlineMath math={String.raw`x\ge 0`} />).</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 6</summary>
                <div className="answer__content">
                  <p>La fonction n’est pas définie en <InlineMath math="2" /> (trou) et donc pas continue ; elle n’est pas dérivable en <InlineMath math="2" />.</p>
                  <p>Remarque : prolongée par continuité (<InlineMath math={String.raw`f(2)=4`} />) on obtiendrait une fonction dérivable avec <InlineMath math={String.raw`f'(2)=4`} />.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 7</summary>
                <div className="answer__content">
                  <p>La limite de <InlineMath math="x^2" /> en 1 vaut 1, mais la valeur imposée <InlineMath math="f(1)=3" /> crée une discontinuité ; donc non dérivable en 1.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 8</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\frac{|0+h|-|0|}{h}=\frac{|h|}{h}=\begin{cases}1 & h&gt;0,\\ -1 & h&lt;0.\end{cases}`} />
                  <p>Les limites unilatérales diffèrent ; la limite bilatérale n’existe pas : <InlineMath math={String.raw`f'_{|x=0}`} /> n’existe pas.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 9</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\frac{f(-1+h)-f(-1)}{h}=\frac{((-1+h)^2+2(-1+h)-3)-((-1)^2+2(-1)-3)}{h}=\frac{(1-2h+h^2-2+2h-3)-(1-2-3)}{h}=\frac{h^2}{h}=1\cdot h`} />
                  <p>Plus directement, en développant proprement : <InlineMath math={String.raw`\frac{(-1+h)^2-(-1)^2}{h}+\frac{2(-1+h)-2(-1)}{h}=\frac{-2h+h^2}{h}+\frac{2h}{h}=-2+h+2=h`} />
                    donc <InlineMath math={String.raw`f'(-1)=\lim_{h\to 0} h=0`} />.</p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 10</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\frac{f(a+h)-f(a)}{h}=\frac{k-k}{h}=0`} />
                  <p>La limite vaut 0 pour tout <InlineMath math="a" /> ; une fonction constante est dérivable partout et <InlineMath math={String.raw`f'(a)=0`} />.</p>
                </div>
              </details>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

