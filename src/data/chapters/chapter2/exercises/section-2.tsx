import { useState } from 'react';
import { InlineMath, } from 'react-katex';
import graph16 from '/src/assets/img/graphs/graph16.png';
import graph17 from '/src/assets/img/graphs/graph17.png';
import graph18 from '/src/assets/img/graphs/graph18.png';
import graph27 from '/src/assets/img/graphs/graph27.png';
import table17 from '/src/assets/img/tables/table17.png';
import table18 from '/src/assets/img/tables/table18.png';

export default function Section2Exercises() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(h => !h);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices — Dérivabilité (lecture graphique)</h2>
        <p className="m-4">
          On s’appuie sur la définition <InlineMath math={String.raw`f'(a)=\lim_{h\to 0}\dfrac{f(a+h)-f(a)}{h}`} /> et son interprétation:
          existence d’une pente de tangente unique et finie. La différentiabilité implique la continuité.
        </p>

        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 1</h3>
            <p>
              Sur un graphique, la courbe de <InlineMath math="f" /> est lisse au voisinage de <InlineMath math="x=0" /> et ne présente ni angle vif ni trou.
              La pente semble bien définie. <strong>La fonction est‑elle dérivable en</strong> <InlineMath math="0" />?
            </p>
            <img src={graph16} className="img" alt="graphique" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 2</h3>
            <p>
              On observe un angle vif en <InlineMath math="x=0" />
              <strong>La fonction est‑elle dérivable en</strong> <InlineMath math="0" />? Justifiez par les pentes à gauche et à droite.
            </p>
            <img src={graph17} className="img" alt="graphique" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 3</h3>
            <p>
              Au voisinage de <InlineMath math="x=0" />, la courbe présente une asymptote verticale. 
              <strong>La limite du taux d’accroissement</strong> existe‑t‑elle? <strong>La fonction est‑elle dérivable en</strong> <InlineMath math="0" />?
            </p>
            <img src={graph18} className="img" alt="graphique" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 4</h3>
            <p>
              Considérez <InlineMath math={String.raw`f(x)=\dfrac{x^2-4}{x-2}`} />. Le graphe montre un «trou» en <InlineMath math="x=2" /> (discontinuité amovible).
              <strong>La fonction est‑elle dérivable en</strong> <InlineMath math="2" />? Expliquez brièvement.
            </p>
            <img src={graph27} className="img" alt="graphique" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 5</h3>
            <p>
              Un tableau de <InlineMath math={String.raw`\dfrac{f(a+h)-f(a)}{h}`} /> (pour des <InlineMath math="h" /> positifs et négatifs)
              donne des valeurs qui s’approchent toutes de <InlineMath math="1{,}5" />.
              <strong>Que conclure pour</strong> <InlineMath math="f'(a)" />?
            </p>
            <img src={table17} className="img" alt="graphique" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 6</h3>
            <p>
              Un tableau de <InlineMath math={String.raw`\dfrac{f(a+h)-f(a)}{h}`} /> montre des valeurs proches de <InlineMath math="-2" />
              pour <InlineMath math="h&lt;0" /> et proches de <InlineMath math="-1{,}7" /> pour <InlineMath math="h&gt;0" />.
              <strong>La dérivée en</strong> <InlineMath math="a" /> existe‑t‑elle? Justifiez.
            </p>
            <img src={table18} className="img" alt="graphique" />
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 7</h3>
            <p>
              Sur un graphique, les droites «tangentes» à gauche et à droite de <InlineMath math="x=a" /> semblent parallèles (même pente),
              mais la courbe présente un saut (discontinuité) en <InlineMath math="a" />.
              <strong>La fonction est‑elle dérivable en</strong> <InlineMath math="a" />?
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 8</h3>
            <p>
              On lit sur un graphique une tangente horizontale en <InlineMath math="x=b" />.
              <strong>Que peut‑on dire de</strong> <InlineMath math="f'(b)" />? Interprétez géométriquement.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 9</h3>
            <p>
              Au point <InlineMath math="x=c" />, la courbe semble avoir une tangente verticale. 
              <strong>La dérivée</strong> <InlineMath math="f'(c)" /> <strong>existe‑t‑elle</strong> au sens fini? Concluez sur la dérivabilité en <InlineMath math="c" />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 10</h3>
            <p>
              En utilisant directement la définition, étudiez la dérivabilité de <InlineMath math="f(x)=|x|" /> en <InlineMath math="0" />
              via le taux d’accroissement <InlineMath math={String.raw`\dfrac{f(0+h)-f(0)}{h}=`} /> <InlineMath math={String.raw`\dfrac{|h|}{h}`} />.
              Concluez.
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
            Idées clés: dérivabilité ⇔ pente de tangente unique et finie au point et implique continuité. Angles vifs, discontinuités, asymptotes
            ou tangente verticale empêchent la dérivabilité (au sens d’une dérivée finie).
          </p>
          <ol className="answer-list">
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 1</summary>
                <div className="answer__content">
                  Oui. La courbe est lisse et continue au voisinage de <InlineMath math="a" /> et la pente locale est bien définie;
                  la limite du taux d’accroissement existe et est finie: <InlineMath math="f'(a)" /> existe.
                </div>
              </details>
            </li>
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 2</summary>
                <div className="answer__content">
                  Non. Pour <InlineMath math="f(x)=|x|" />, la pente à gauche vaut <InlineMath math="-1" /> et à droite <InlineMath math="1" />; les limites unilatérales du taux d’accroissement diffèrent.
                </div>
              </details>
            </li>
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 3</summary>
                <div className="answer__content">
                  Non. Il y a asymptote verticale en 0; <InlineMath math="f" /> n’est pas définie en 0 et les pentes «explosent». La dérivée en 0 n’existe pas.
                </div>
              </details>
            </li>
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 4</summary>
                <div className="answer__content">
                  Non. La fonction n’est pas continue en 2 (trou), or la dérivabilité implique la continuité; on ne peut pas avoir <InlineMath math="f'(2)" />.
                </div>
              </details>
            </li>
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 5</summary>
                <div className="answer__content">
                  Les taux d’accroissement convergent vers 1,5 des deux côtés; on conclut <InlineMath math="f'(a)=1{,}5" /> (dérivée finie et unique).
                </div>
              </details>
            </li>
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 6</summary>
                <div className="answer__content">
                  Les limites unilatérales du taux d’accroissement diffèrent (~−2 vs −1,7); la limite bilatérale n’existe pas donc <InlineMath math="f'(a)" /> n’existe pas.
                </div>
              </details>
            </li>
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 7</summary>
                <div className="answer__content">
                  Non. Malgré des pentes locales semblant égales, il y a discontinuité en <InlineMath math="a" /> ; or sans continuité, pas de dérivabilité.
                </div>
              </details>
            </li>
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 8</summary>
                <div className="answer__content">
                  Tangente horizontale ⇒ pente nulle; on lit <InlineMath math="f'(b)=0" />.
                </div>
              </details>
            </li>
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 9</summary>
                <div className="answer__content">
                  Tangente verticale ⇒ pente «infinie»; la dérivée finie n’existe pas en <InlineMath math="c" />. On dit que la fonction n’est pas dérivable au sens usuel.
                </div>
              </details>
            </li>
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 10</summary>
                <div className="answer__content">
                  Pour <InlineMath math="h&gt;0" />, <InlineMath math={String.raw`\dfrac{|h|}{h}=1`} />; pour <InlineMath math="h&lt;0" />, <InlineMath math={String.raw`\dfrac{|h|}{h}=-1`} />.
                  Les limites unilatérales diffèrent, donc la limite bilatérale n’existe pas: <InlineMath math="f'_{|x=0}" /> n’existe pas.
                </div>
              </details>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

