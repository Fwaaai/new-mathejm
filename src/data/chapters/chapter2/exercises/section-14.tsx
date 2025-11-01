import { useState } from 'react';
import { InlineMath,} from 'react-katex';

export default function Section14Exercises() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(h => !h);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices — Tangente passant par l’origine</h2>
        <p className="m-4">
          Condition à résoudre pour <InlineMath math="a" />: <InlineMath math={String.raw`-a\,f'(a)+f(a)=0`} />.
          Puis donner, pour chaque solution, l’équation de la tangente <InlineMath math={String.raw`y=f(a)+f'(a)(x-a)`} /> et vérifier qu’elle passe par (0,0).
        </p>

        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 1</h3>
            <p>
              <InlineMath math={String.raw`f(x)=x^2+4`} />. Trouver les valeurs de <InlineMath math="a" /> telles que la tangente en <InlineMath math="a" /> passe par l’origine.
              Donner les équations des tangentes obtenues.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 2</h3>
            <p>
              <InlineMath math={String.raw`f(x)=x^3+5x+16`} />. Résoudre <InlineMath math={String.raw`-a\,f'(a)+f(a)=0`} /> et écrire l’équation de la tangente.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 3</h3>
            <p>
              <InlineMath math={String.raw`f(x)=x^3-3x+2`} />. Déterminer <InlineMath math="a" /> et la tangente correspondante.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 4</h3>
            <p>
              <InlineMath math={String.raw`f(x)=x^2+9`} />. Déterminer <InlineMath math="a" /> et donner les équations des tangentes.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 5</h3>
            <p>
              <InlineMath math={String.raw`f(x)=x^3+x+54`} />. Trouver <InlineMath math="a" /> et l’équation de la tangente.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 6</h3>
            <p>
              <InlineMath math={String.raw`f(x)=x^2`} />. Résoudre la condition et préciser la tangente correspondante.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 7</h3>
            <p>
              <InlineMath math={String.raw`f(x)=x^3-7x-16`} />. Trouver <InlineMath math="a" /> puis l’équation de la tangente.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 8</h3>
            <p>
              Cas constant : <InlineMath math={String.raw`f(x)=1`} />. Discuter l’existence de <InlineMath math="a" /> tel que la tangente en <InlineMath math="a" /> passe par l’origine.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 9</h3>
            <p>
              Cas nul : <InlineMath math={String.raw`f(x)=0`} />. Discuter l’ensemble des <InlineMath math="a" /> convenables et donner la tangente.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 10</h3>
            <p>
              <InlineMath math={String.raw`f(x)=-2x^3+x-32`} />. Résoudre <InlineMath math={String.raw`-a\,f'(a)+f(a)=0`} /> et donner l’équation de la tangente.
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
            Méthode : calculer <InlineMath math="f'(x)" />, résoudre <InlineMath math={String.raw`-a\,f'(a)+f(a)=0`} />, puis écrire la tangente.
          </p>
          <ol className="answer-list">
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 1</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math="f'(x)=2x" /> ⇒ <InlineMath math={String.raw`-a\cdot 2a+(a^2+4)=0`} /> ⇒ <InlineMath math={String.raw`4-a^2=0`} /> ⇒ <InlineMath math={String.raw`a=\pm 2`} />.
                    Tangentes : <InlineMath math="a=2" /> : <InlineMath math={String.raw`y=8+4(x-2)=4x`} /> ; <InlineMath math="a=-2" /> : <InlineMath math={String.raw`y=8-4(x+2)=-4x`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 2</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math="f'(x)=3x^2+5" /> ⇒ <InlineMath math={String.raw`-a(3a^2+5)+(a^3+5a+16)=0`} /> ⇒ <InlineMath math={String.raw`-2a^3+16=0`} /> ⇒ <InlineMath math="a=2" />.
                    Tangente : <InlineMath math={String.raw`y=f(2)+f'(2)(x-2)= (8+10+16)+(3\cdot 4+5)(x-2)=34+17(x-2)=17x`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 3</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math="f'(x)=3x^2-3" /> ⇒ <InlineMath math={String.raw`-a(3a^2-3)+(a^3-3a+2)=0`} /> ⇒ <InlineMath math={String.raw`-2a^3+2=0`} /> ⇒ <InlineMath math="a=1" />.
                    Tangente : <InlineMath math={String.raw`y=f(1)+f'(1)(x-1)=0+0\cdot(x-1)=0`} /> (axe des abscisses).
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 4</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math="f'(x)=2x" /> ⇒ <InlineMath math={String.raw`-2a^2+(a^2+9)=0`} /> ⇒ <InlineMath math={String.raw`9-a^2=0`} /> ⇒ <InlineMath math={String.raw`a=\pm 3`} />.
                    Tangentes : <InlineMath math="a=3" /> : <InlineMath math={String.raw`y=18+6(x-3)=6x`} /> ; <InlineMath math="a=-3" /> : <InlineMath math={String.raw`y=18-6(x+3)=-6x`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 5</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math="f'(x)=3x^2+1" /> ⇒ <InlineMath math={String.raw`-a(3a^2+1)+(a^3+a+54)=0`} /> ⇒ <InlineMath math={String.raw`-2a^3+54=0`} /> ⇒ <InlineMath math="a=3" />.
                    Tangente : <InlineMath math={String.raw`y=f(3)+f'(3)(x-3)=(27+3+54)+(27+1)(x-3)=84+28(x-3)=28x`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 6</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math="f'(x)=2x" /> ⇒ <InlineMath math={String.raw`-a\cdot 2a + a^2=0`} /> ⇒ <InlineMath math={String.raw`-a^2=0`} /> ⇒ <InlineMath math="a=0" />.
                    Tangente : <InlineMath math={String.raw`y=f(0)+f'(0)(x-0)=0`} /> (axe des abscisses).
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 7</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math="f'(x)=3x^2-7" /> ⇒ <InlineMath math={String.raw`-a(3a^2-7)+(a^3-7a-16)=0`} /> ⇒ <InlineMath math={String.raw`-2a^3-16=0`} /> ⇒ <InlineMath math="a=-2" />.
                    Tangente : <InlineMath math={String.raw`y=f(-2)+f'(-2)(x+2)=(-8+14-16)+(12-7)(x+2)=-10+5(x+2)=5x`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 8</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math="f'(x)=0" /> et <InlineMath math="f(a)=1" /> ⇒ équation <InlineMath math={String.raw`-a\cdot 0 + 1 = 0`} /> impossible. Aucune solution.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 9</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math="f\equiv 0" /> ⇒ <InlineMath math="f'(a)=0" /> et <InlineMath math={String.raw`-a\cdot 0 + 0 = 0`} /> vraie pour tout <InlineMath math="a" />.
                    Toute tangente est <InlineMath math="y=0" /> et passe par l’origine pour tout <InlineMath math="a" />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 10</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math="f'(x)=-6x^2+1" /> ⇒ <InlineMath math={String.raw`-a(-6a^2+1)+(-2a^3+a-32)=0`} /> ⇒ <InlineMath math={String.raw`6a^3-a-2a^3+a-32=0`} /> ⇒
                    <InlineMath math={String.raw`4a^3-32=0`} /> ⇒ <InlineMath math="a=2" />. Tangente : <InlineMath math={String.raw`y=f(2)+f'(2)(x-2)=(-16+2-32)+(-24+1)(x-2)=-46-23(x-2)=-23x`} />.
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

