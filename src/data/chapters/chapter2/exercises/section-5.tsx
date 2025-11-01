import { useState } from 'react';
import { InlineMath } from 'react-katex';
import graph29 from '/src/assets/img/graphs/graph29.png';
import graph30 from '/src/assets/img/graphs/graph30.png';
import graph31 from '/src/assets/img/graphs/graph31.png';

export default function Section5Exercises() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(h => !h);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices — Points non dérivables (lecture graphique)</h2>
        <p className="m-4">
          On identifie sur des graphes les situations empêchant l’existence d’une tangente unique et non verticale :
          angle vif, tangente verticale, discontinuité (saut/trou) ou absence de courbe dans un voisinage.
        </p>

        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 1</h3>
            <p>
              Listez les abscisses des points non dérivables et justifiez brièvement pour chacun.
            </p>
            <img src={graph29} className="img" alt="graphique" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 2</h3>
            <p>
              En observant la courbe de <InlineMath math="y=|x-1|" />, déterminer si la fonction est dérivable en
              <InlineMath math="x=1" />. Justifiez par l’existence (ou non) d’une tangente bien définie.
            </p>
            <img src={graph30} className="img" alt="graphique" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 3</h3>
            <p>
              Sur un graphique, la courbe semble avoir une tangente verticale en <InlineMath math="x=a" />.
              Que conclure pour la dérivabilité en <InlineMath math="a" /> ?
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 4</h3>
            <p>
              Une courbe présente un « trou » (point manquant) en <InlineMath math="x=3" />, mais les branches de gauche et de droite
              semblent s’aligner. La fonction est‑elle dérivable en <InlineMath math="x=3" /> ?
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 5</h3>
            <p>
              On observe une discontinuité par saut en <InlineMath math="x=b" />.
              Est‑il possible de définir une tangente en ce point ? Concluez sur la dérivabilité.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 6</h3>
            <p>
              La courbe n’existe pas pour <InlineMath math="x<0" /> et est régulière pour <InlineMath math="x>0" />.
              Quid de la dérivabilité en <InlineMath math="x=0" /> dans ce contexte de « bord de domaine » ?
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 7</h3>
            <p>
              À partir d’un tableau de pentes locales estimées (gauche/droite) autour de <InlineMath math="x=a" />,
              on lit des valeurs qui ne coïncident pas.
              La fonction est‑elle dérivable en <InlineMath math="a" /> ?
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 8</h3>
            <p>
              Sur la courbe de <InlineMath math="y=|x|" />, indiquez les points non dérivables et justifiez votre réponse.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 9</h3>
            <p>
              Sur la courbe de <InlineMath math={String.raw`y=\sqrt[3]{x}`} />, discutez la dérivabilité en <InlineMath math="x=0" />.
              Appuyez‑vous sur l’allure « verticale » de la tangente.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 10</h3>
            <p>
              Un graphique lisse et continu est fourni ; aucune cassure ni tangente verticale n’est visible.
              Quelles conclusions peut‑on tirer quant à la dérivabilité sur l’intervalle montré ?
            </p>
            <img src={graph31} className="img" alt="graphique" />
          </li>
        </ol>

        <div className="exercise__actions">
          <button className="prim-btn px-5 py-2.5 m-7" type="button" onClick={toggleHidden}>
            {hidden ? 'Afficher' : 'Masquer'} les réponses
          </button>
        </div>

        <div className="answers" hidden={hidden}>
          <p>
            Principes : pas de continuité ⇒ pas de dérivabilité ; pentes gauche/droite différentes ⇒ pas de dérivée ;
            tangente verticale ⇒ dérivée finie inexistante ; angle vif ⇒ changement brutal de direction ⇒ non‑dérivable.
          </p>
          <ol className="answer-list">
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 1</summary>
                <div className="answer__content">
                  Non dérivable en <InlineMath math="x=0" /> (angle vif, pentes unilatérales différentes),
                  en <InlineMath math="x=1" /> (tangente verticale, pente « infinie »),
                  et en <InlineMath math="x=2" /> (saut, discontinuité).
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 2</summary>
                <div className="answer__content">
                  Non dérivable en <InlineMath math="x=1" /> à cause d’un angle vif (graphique en V). Ailleurs, la courbe est lisse.
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 3</summary>
                <div className="answer__content">
                  Tangente verticale en <InlineMath math="a" /> ⇒ la dérivée finie n’existe pas ; <InlineMath math="f" /> n’est pas dérivable en <InlineMath math="a" />.
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 4</summary>
                <div className="answer__content">
                  Même si les branches semblent s’aligner, la valeur au point manque (trou) ; pas de continuité ⇒ pas de dérivabilité en 3.
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 5</summary>
                <div className="answer__content">
                  Saut ⇒ pas de courbe continue au point ; on ne peut pas définir une tangente unique ⇒ non‑dérivable en <InlineMath math="b" />.
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 6</summary>
                <div className="answer__content">
                  Le point <InlineMath math="0" /> est un bord du domaine ; il manque un voisinage bilatéral.
                  Dans ce cadre, la dérivée usuelle n’est pas définie (au mieux, dérivée unilatérale).
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 7</summary>
                <div className="answer__content">
                  Les pentes estimées à gauche et à droite ne coïncident pas ; la limite bilatérale n’existe pas ⇒ non‑dérivable en <InlineMath math="a" />.
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 8</summary>
                <div className="answer__content">
                  Non dérivable en <InlineMath math="x=0" /> (sommet en V). La courbe est lisse ailleurs ⇒ dérivable pour <InlineMath math={String.raw`x\ne 0`} />.
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 9</summary>
                <div className="answer__content">
                  La tangente est verticale en 0 (pente « infinie ») ; la dérivée finie n’existe pas ⇒ non‑dérivable en 0.
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 10</summary>
                <div className="answer__content">
                  Courbe lisse et continue, sans angle vif, sans tangente verticale ni discontinuité : la fonction est dérivable en chaque
                  point de l’intervalle observé.
                </div>
              </details>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

