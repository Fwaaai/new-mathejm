import { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import graph32 from '/src/assets/img/graphs/graph32.png';
import table21 from '/src/assets/img/tables/table21.png';

export default function Section7Exercises() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(h => !h);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices — Notion de tangente en un point</h2>
        <p className="m-4">
          On part de la sécante de pente <InlineMath math={String.raw`m_h=\dfrac{f(a+h)-f(a)}{h}`} /> et on fait tendre <InlineMath math="h\to 0" />.
          Si la limite existe et est finie, la tangente en <InlineMath math="a" /> existe et sa pente vaut <InlineMath math="f'(a)" />.
        </p>

        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 1</h3>
            <p>
              À partir d’un graphique lisse de <InlineMath math="y=f(x)" /> au voisinage de <InlineMath math="x=1" />, estimez la pente de la
              tangente en lisant un « petit triangle » (élévation/déplacement). Donnez ensuite l’équation locale de la tangente
              sous la forme <InlineMath math={String.raw`y=f(a)+f'(a)(x-a)`} />.
            </p>
            <img src={graph32} className="img" alt="graphique" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 2</h3>
            <p>
              Pour <InlineMath math="f(x)=x^2" /> et <InlineMath math="a=2" />, utilisez la définition avec <InlineMath math="m_h" /> pour obtenir
              <InlineMath math="f'(2)" /> et l’équation de la tangente en <InlineMath math="x=2" />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 3</h3>
            <p>
              Étudier l’existence d’une tangente à la courbe de <InlineMath math="y=|x|" /> en <InlineMath math="x=0" />. Conclure.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 4</h3>
            <p>
              Pour <InlineMath math={String.raw`f(x)=\sqrt[3]{x}`} /> au point <InlineMath math="a=0" />, discuter la nature de la tangente (si elle existe)
              et préciser son équation.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 5</h3>
            <p>
              Pour <InlineMath math={String.raw`f(x)=\dfrac{1}{x}`} /> et <InlineMath math="a=1" />, calculez <InlineMath math="f'(1)" /> et donnez l’équation de la tangente.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 6</h3>
            <p>
              À l’aide d’un tableau de taux d’accroissement <InlineMath math={String.raw`m_h`} /> pour <InlineMath math="h=\pm 10^{-1},\,\pm 10^{-2},\,\pm 10^{-3}" />, on lit
              des valeurs proches de <InlineMath math="2{,}50" />. Que peut‑on conclure sur la tangente en <InlineMath math="a" /> ? Donnez son équation
              si <InlineMath math="f(a)=4" />.
            </p>
            <img src={table21} className="img" alt="tableau" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 7</h3>
            <p>
              Pour <InlineMath math="f(x)=x^3" /> en <InlineMath math="a=-1" />, donnez la pente de la tangente et son équation.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 8</h3>
            <p>
              On sait que <InlineMath math="f" /> est dérivable en <InlineMath math="a" /> avec <InlineMath math="f(a)=2" /> et <InlineMath math="f'(a)=-0{,}5" />.
              Écrivez l’équation de la tangente en <InlineMath math="x=a" />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 9</h3>
            <p>
              Un graphique montre une tangente verticale en <InlineMath math="x=2" />. Quelle est l’équation de cette tangente ?
              La fonction est‑elle dérivable (au sens usuel) en <InlineMath math="2" /> ?
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 10</h3>
            <p>
              Soit <InlineMath math={String.raw`f(x)=\begin{cases}-2x & x<0,\\ x & x\ge 0.\end{cases}`} /> Étudiez l’existence d’une tangente en <InlineMath math="0" />
              en comparant les pentes des sécantes à gauche et à droite.
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
            Idées clés : la tangente existe si la limite des pentes de sécantes est finie et unique. En cas de pente infinie, tangente
            verticale (<InlineMath math="x=\text{const}" />) et dérivée finie inexistante. Angle vif : pas de tangente unique.
          </p>
          <ol className="answer-list">
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 1</summary>
                <div className="answer__content">
                  <p>
                    On lit une pente approximative <InlineMath math="f'(a)\approx m" /> qui est 5, dans ce cas. (f(1) = 1, f(1,1) = 1,5)
                    L’équation s’écrit <InlineMath math={String.raw`y=f(a)+m(x-a)`} />.
                    Alors, 
                    <BlockMath math={String.raw`y=1+5(x-1)=5x-4`} />
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 2</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`m_h=\dfrac{(2+h)^2-2^2}{h}=\dfrac{4+4h+h^2-4}{h}=4+h`} />
                  <p>
                    <InlineMath math={String.raw`f'(2)=\lim_{h\to 0}(4+h)=4`} /> et <InlineMath math="f(2)=4" />.
                    Tangente : <InlineMath math={String.raw`y=f(2)+f'(2)(x-2)=4+4(x-2)=4x-4`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 3</summary>
                <div className="answer__content">
                  <p>
                    En 0, <InlineMath math="|x|" /> a un angle vif : pentes unilatérales différentes (−1 et 1). Pas de tangente unique en 0.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 4</summary>
                <div className="answer__content">
                  <p>
                    En 0, la pente « explose » pour <InlineMath math="\sqrt[3]{x}" /> : tangente verticale d’équation <InlineMath math="x=0" />. Pas de dérivée finie.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 5</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f'(x)=-\dfrac{1}{x^2}`} />, donc <InlineMath math="f'(1)=-1" />.
                    Tangente : <InlineMath math={String.raw`y=f(1)+f'(1)(x-1)=1-1\cdot(x-1)=-x+2`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 6</summary>
                <div className="answer__content">
                  <p>
                    Les <InlineMath math="m_h" /> convergent vers <InlineMath math="2{,}5" /> ; donc <InlineMath math="f'(a)=2{,}5" /> et la tangente est
                    <InlineMath math={String.raw`y=f(a)+2{,}5\,(x-a)=4+2{,}5(x-a)`} />.
                  </p>
                </div>

              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 7</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`f'(x)=3x^2`} />, donc <InlineMath math="f'(-1)=3" /> et <InlineMath math="f(-1)=-1" />.
                    Tangente : <InlineMath math={String.raw`y=-1+3(x+1)=3x+2`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 8</summary>
                <div className="answer__content">
                  <p>
                    Tangente : <InlineMath math={String.raw`y=f(a)+f'(a)(x-a)=2-0{,}5(x-a)`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 9</summary>
                <div className="answer__content">
                  <p>
                    Équation de la tangente : <InlineMath math="x=2" />. La dérivée finie n’existe pas en 2 (pente infinie) ; au sens usuel,
                    <InlineMath math="f" /> n’est pas dérivable en 2.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 10</summary>
                <div className="answer__content">
                  <p>
                    Pente à gauche : 2 (car <InlineMath math="-2x" /> en 0−), pente à droite : 1 (car <InlineMath math="x" /> en 0+). Elles diffèrent ;
                    il n’y a pas de tangente unique en 0.
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

