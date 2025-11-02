import { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import diagram9 from '/src/assets/img/diagrams/diagram9.png';
import diagram10 from '/src/assets/img/diagrams/diagram10.png';

export default function Section11Exercises() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(h => !h);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices — Chemins sur essais indépendants</h2>
        <p className="m-4">
          Ces exercices utilisent uniquement l’indépendance et le produit le long d’un chemin.
          Pour une suite de <InlineMath math={String.raw`n`} /> essais indépendants (succès de probabilité
          <InlineMath math={String.raw`p`} /> à chaque essai), la probabilité d’une séquence précise est le produit des
          probabilités de ses étapes.
        </p>

        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 1</h3>
            <p>
              Trois essais indépendants de probabilité de succès <InlineMath math={String.raw`p=0{,}4`} />.
              Quelle est la probabilité du chemin <InlineMath math={String.raw`S\to E\to S`} /> ?
            </p>
              <img src={diagram9} alt="Diagramme 9" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 2</h3>
            <p>
              Quatre essais indépendants, <InlineMath math={String.raw`p=0{,}3`} />. Probabilité de la séquence
              <InlineMath math={String.raw`E\to E\to S\to S`} />.
            </p>
              <img src={diagram10} alt="Diagramme 10" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 3</h3>
            <p>
              Trois essais indépendants, <InlineMath math={String.raw`p=0{,}7`} />. Donnez
              <InlineMath math={String.raw`P(SSS)`} /> et <InlineMath math={String.raw`P(EEE)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 4</h3>
            <p>
              Cinq essais indépendants, <InlineMath math={String.raw`p=\tfrac12`} />. Probabilité de la séquence
              <InlineMath math={String.raw`S\,S\,E\,S\,E`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 5</h3>
            <p>
              Deux essais indépendants, <InlineMath math={String.raw`p=0{,}6`} />. Calculez
              <InlineMath math={String.raw`P(SE)`} /> et <InlineMath math={String.raw`P(ES)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 6</h3>
            <p>
              Deux événements indépendants <InlineMath math={String.raw`A`} /> et <InlineMath math={String.raw`B`} /> vérifient
              <InlineMath math={String.raw`P(A)=0{,}6`} /> et <InlineMath math={String.raw`P(B)=0{,}25`} />.
              Calculez <InlineMath math={String.raw`P(A\cap B)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 7</h3>
            <p>
              Quatre essais indépendants, <InlineMath math={String.raw`p=\tfrac23`} />. Probabilité du chemin
              <InlineMath math={String.raw`S\,E\,E\,S`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 8</h3>
            <p>
              Exprimez en fonction de <InlineMath math={String.raw`p`} /> la probabilité du chemin
              <InlineMath math={String.raw`S\,E\,S\,E`} /> sur quatre essais indépendants.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 9</h3>
            <p>
              Trois essais indépendants, <InlineMath math={String.raw`p=0{,}25`} />. Probabilité du chemin
              <InlineMath math={String.raw`E\,S\,E`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 10</h3>
            <p>
              Cinq essais indépendants, <InlineMath math={String.raw`p=0{,}8`} />. Probabilité du chemin
              <InlineMath math={String.raw`S\,S\,S\,S\,S`} />.
            </p>
          </li>
        </ol>

        <div className="exercise__actions">
          <button className="prim-btn px-5 py-2.5 m-7" type="button" onClick={toggleHidden}>
            {hidden ? "Afficher" : "Masquer"} les réponses
          </button>
        </div>

        <div className="answers" hidden={hidden}>
          <p>
            Indépendance: produit le long du chemin. Pour un succès de proba <InlineMath math={String.raw`p`} /> et un échec de
            proba <InlineMath math={String.raw`1-p`} />, multiplier les facteurs dans l’ordre de la séquence.
          </p>
          <ol className="answer-list">
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 1</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(SES)=0{,}4\times0{,}6\times0{,}4=0{,}096`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 2</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(EESS)=0{,}7\times0{,}7\times0{,}3\times0{,}3=0{,}0441`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 3</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(SSS)=0{,}7^3=0{,}343,\quad P(EEE)=0{,}3^3=0{,}027`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 4</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(S\,S\,E\,S\,E)=\big(\tfrac12\big)^5=\tfrac{1}{32}=0{,}03125`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 5</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(SE)=0{,}6\times0{,}4=0{,}24,\quad P(ES)=0{,}4\times0{,}6=0{,}24`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 6</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A\cap B)=0{,}6\times0{,}25=0{,}15`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 7</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(SEES)=\big(\tfrac23\big)\big(\tfrac13\big)\big(\tfrac13\big)\big(\tfrac23\big)=\tfrac{4}{81}\approx0{,}04938`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 8</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(SESE)=p(1-p)p(1-p)=p^2(1-p)^2`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 9</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(ESE)=0{,}75\times0{,}25\times0{,}75=\tfrac{9}{64}=0{,}140625`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 10</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(SSSSS)=0{,}8^5=0{,}32768`} />
                </div>
              </details>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

