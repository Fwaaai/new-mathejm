import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import graph16 from "/src/assets/img/graphs/graph16.png";
import graph17 from "/src/assets/img/graphs/graph17.png";
import graph18 from "/src/assets/img/graphs/graph18.png";
import graph19 from "/src/assets/img/graphs/graph19.png";

export default function Section2(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>

        <ol className="list list-1" type="1">
          <li>
            <h3 className="text-xl font-semibold p-2">Définition (rappel)</h3>
            <p>
              La dérivabilité de <InlineMath math="f" /> signifie que la limite suivante existe et
              est finie :
            </p>
            <BlockMath
              math={String.raw`\displaystyle f'(x)=\lim_{h\to 0} \frac{f(x+h)-f(x)}{h}`}
            />
            <p>
              Graphiquement, cela revient à ce que la pente de la tangente au
              point <InlineMath math="(x, f(x))" /> soit bien définie et unique.
            </p>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">
              Fonction dérivable
            </h3>
            <img src={graph16} className="img" alt="graphique" />
            Regardons ce graphique.
            On remarque que la pente semble remplir les conditions de dérivabilité:
            <ol className="list list-a" type="a">
              <li>
                <p>
                  La courbe semble lisse, sans angles vifs.
                </p>
              </li>
              <li>
                <p>
                  La courbe semble être définie pour tout <InlineMath math="x" />, c'est-à-dire qu'elle est continue.
                </p>
              </li>
            </ol>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Cas de non‑dérivabilité</h3>
            <div className="grid grid-cols-3">
              <img src={graph17} className="img w-full " alt="graphique" />
              <img src={graph18} className="img w-full" alt="graphique" />
              <img src={graph19} className="img w-full" alt="graphique" />
            </div>
            <ol className="list list-a" type="a">
              <li>
                <p>
                  Angle vif (changement brutal de direction)<br />
                  Dans l'exemple ci-dessus, la fonction est <InlineMath math="f(x)=|x|" />
                </p>
              </li>
              <li>
                <p>
                  Cuspide (pentes opposées infinies) <br />
                  Dans l'exemple ci-dessus, la fonction est <InlineMath math="f(x)=\frac1x" />
                </p>
              </li>
              <li>
                <p>
                  Discontinuité ou « trou » au point <br />
                  Dans l'exemple ci-dessus, la fonction est <InlineMath math="f(x)=\frac{x^2-4}{x-2}" />
                </p>
              </li>
            </ol>
          </li>
        </ol>
      </section>
    </div>
  );
}

