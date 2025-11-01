import { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';

export default function Section11Exercises() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(h => !h);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices — Approximation affine (linéarisation)</h2>
        <p className="m-4">
          Au voisinage de <InlineMath math="a" />, on approche <InlineMath math="f(x)" /> par
          <BlockMath math={String.raw`L_a(x)=f(a)+f'(a)(x-a)`} />
          et pour <InlineMath math={String.raw`x=a+h`} />, cela donne <InlineMath math={String.raw`f(a+h)\approx f(a)+f'(a)h`} />.
        </p>

        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 1</h3>
            <p>
              Pour <InlineMath math={String.raw`f(x)=x^2`} /> en <InlineMath math="a=2" />,
              écrivez <InlineMath math="L_a(x)" /> puis approximez <InlineMath math={String.raw`f(2{,}05)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 2</h3>
            <p>
              Pour <InlineMath math={String.raw`f(x)=\sqrt{x}`} /> en <InlineMath math="a=4" />,
              écrivez <InlineMath math="L_4(x)" /> puis approximez <InlineMath math={String.raw`\sqrt{4{,}1}`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 3</h3>
            <p>
              Pour <InlineMath math={String.raw`f(x)=x^3-3x^2+1`} /> approchez <InlineMath math={String.raw`f(1{,}02)`} />
              en choisissant un point d’appui pertinent <InlineMath math="a" />. Donnez <InlineMath math="L_a(x)" /> et la valeur approchée.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 4</h3>
            <p>
              On connaît <InlineMath math="f(a)=2" /> et <InlineMath math="f'(a)=-3" />. Donnez <InlineMath math="L_a(x)" /> puis estimez
              <InlineMath math={String.raw`f(a+0{,}1)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 5</h3>
            <p>
              À partir d’un graphique de <InlineMath math={String.raw`f(x)=x^2+1`} /> en <InlineMath math="a=1" />,
              écrivez <InlineMath math="L_1(x)" /> et donnez une approximation de <InlineMath math={String.raw`f(1{,}1)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 6</h3>
            <p>
              Pour <InlineMath math={String.raw`f(x)=\sqrt{x}`} /> en <InlineMath math="a=9" />,
              estimez <InlineMath math={String.raw`\sqrt{9{,}2}`} /> via <InlineMath math="L_9(x)" /> et donnez l’erreur absolue
              <InlineMath math={String.raw`|f(x)-L_9(x)|`} /> (valeur numérique).
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 7</h3>
            <p>
              Pour <InlineMath math={String.raw`f(x)=\dfrac{1}{x+1}`} /> en <InlineMath math="a=0" />,
              écrivez <InlineMath math="L_0(x)" /> puis approximez <InlineMath math={String.raw`f(0{,}1)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 8</h3>
            <p>
              Pour <InlineMath math={String.raw`f(x)=x^3`} /> en <InlineMath math="a=0" />,
              comparez l’approximation de <InlineMath math={String.raw`f(0{,}2)`} /> et de <InlineMath math={String.raw`f(1)`} /> via <InlineMath math="L_0(x)" />.
              Commentez la qualité des résultats.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 9</h3>
            <p>
              On vous donne <InlineMath math={String.raw`L_a(x)=5+0{,}4(x-a)`} /> comme approximation affine de <InlineMath math="f" /> au voisinage de <InlineMath math="a" />.
              Retrouver <InlineMath math="f(a)" /> et <InlineMath math="f'(a)" /> puis estimer <InlineMath math={String.raw`f(a-0{,}05)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 10</h3>
            <p>
              Pour <InlineMath math={String.raw`f(x)=x^2+3x`} />, approximez <InlineMath math={String.raw`f(2{,}1)`} />
              (i) avec <InlineMath math="a=2" /> puis (ii) avec <InlineMath math="a=3" />.
              Laquelle des deux approximations est la plus pertinente ? Expliquez.
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
            Rappel : <InlineMath math={String.raw`L_a(x)=f(a)+f'(a)(x-a)`} /> et <InlineMath math={String.raw`f(a+h)\approx f(a)+f'(a)h`} /> pour <InlineMath math="|h|" /> petit.
          </p>
          <ol className="answer-list">
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 1</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f(2)=4`} />, <InlineMath math={String.raw`f'(x)=2x`} />, <InlineMath math={String.raw`f'(2)=4`} />.
                    <InlineMath math={String.raw`L_2(x)=4+4(x-2)`} /> ⇒ <InlineMath math={String.raw`L_2(2{,}05)=4+4\times 0{,}05=4{,}2`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 2</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f(4)=2`} />, <InlineMath math={String.raw`f'(x)=\tfrac{1}{2\sqrt{x}}`} />, <InlineMath math={String.raw`f'(4)=\tfrac{1}{4}`} />.
                    <InlineMath math={String.raw`L_4(x)=2+\tfrac{1}{4}(x-4)`} /> ⇒ <InlineMath math={String.raw`L_4(4{,}1)=2+\tfrac{1}{4}\cdot 0{,}1=2{,}025`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 3</summary>
                <div className="answer__content">
                  <p>
                    Choix naturel <InlineMath math="a=1" />. <InlineMath math={String.raw`f(1)= -1`} />, <InlineMath math={String.raw`f'(x)=3x^2-6x`} />, <InlineMath math={String.raw`f'(1)=-3`} />.
                    <InlineMath math={String.raw`L_1(x)=-1-3(x-1)`} /> ⇒ <InlineMath math={String.raw`L_1(1{,}02)=-1-3(0{,}02)=-1{,}06`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 4</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`L_a(x)=2-3(x-a)`} /> ⇒ <InlineMath math={String.raw`f(a+0{,}1)\approx 2-3\times 0{,}1=1{,}7`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 5</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math="f(1)=2" />, <InlineMath math="f'(1)=2" /> ⇒ <InlineMath math={String.raw`L_1(x)=2+2(x-1)=2x`} /> ⇒
                    <InlineMath math={String.raw`L_1(1{,}1)=2(1{,}1)=2{,}2`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 6</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math="f(9)=3" />, <InlineMath math={String.raw`f'(9)=\tfrac{1}{6}`} /> ⇒
                    <InlineMath math={String.raw`L_9(9{,}2)=3+\tfrac{1}{6}\cdot 0{,}2=3{,}033\overline{3}`} />.
                    Erreur absolue ≈ <InlineMath math={String.raw`|\sqrt{9{,}2}-3{,}033\overline{3}|\approx 0{,}000`} /> (à préciser à la calculatrice).
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 7</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math="f(0)=1" />, <InlineMath math={String.raw`f'(x)=-\dfrac{1}{(x+1)^2}`} />, <InlineMath math={String.raw`f'(0)=-1`} /> ⇒
                    <InlineMath math={String.raw`L_0(x)=1-1\cdot(x-0)=1-x`} /> ⇒ <InlineMath math={String.raw`L_0(0{,}1)=0{,}9`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 8</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`L_0(x)=f(0)+f'(0)x`} /> avec <InlineMath math="f(0)=0" />, <InlineMath math="f'(0)=0" /> ⇒ <InlineMath math="L_0(x)=0" />.
                    Pour <InlineMath math="x=0{,}2" /> l’approximation (0) reste proche (<InlineMath math="0{,}008" /> exact) ; pour <InlineMath math="x=1" /> l’erreur est forte (<InlineMath math="1" /> exact).
                    Plus <InlineMath math="x" /> est proche de 0, meilleure est l’approximation.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 9</summary>
                <div className="answer__content">
                  <p>
                    On lit directement <InlineMath math="f(a)=5" /> et <InlineMath math="f'(a)=0{,}4" />. Donc
                    <InlineMath math={String.raw`f(a-0{,}05)\approx 5+0{,}4(-0{,}05)=5-0{,}02=4{,}98`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 10</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math="f(2)=10" />, <InlineMath math={String.raw`f'(x)=2x+3`} /> ⇒ <InlineMath math={String.raw`f'(2)=7`} />.
                    (i) <InlineMath math={String.raw`L_2(2{,}1)=10+7\cdot 0{,}1=10{,}7`} /> ; (ii) <InlineMath math="f(3)=18" />, <InlineMath math={String.raw`f'(3)=9`} /> ⇒
                    <InlineMath math={String.raw`L_3(2{,}1)=18+9\cdot(-0{,}9)=9{,}9`} />. La valeur cherchée est <InlineMath math="f(2{,}1)= (2{,}1)^2+3(2{,}1)=4{,}41+6{,}3=10{,}71" />.
                    L’approximation la plus pertinente est celle centrée en <InlineMath math="a=2" /> (plus proche de 2,1).
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

