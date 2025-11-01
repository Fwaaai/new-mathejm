import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import graph20 from "/src/assets/img/graphs/graph20.png";

export default function Section5(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>

        <ol className="list list-1" type="1">
          <li>
            <h3 className="text-xl font-semibold p-2">Objectif</h3>
            <p>
              Identifier sur un graphique les points où une fonction n’est pas
              dérivable. On s’intéresse au comportement local de la courbe au
              voisinage de <InlineMath math="x=a" /> et à l’existence d’une tangente
              unique non verticale.
            </p>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Signaux graphiques</h3>
            <img src={graph20} className="img" alt="graphique" />
            <ol className="list list-a" type="a">
              <li>
                <p>
                  Angle vif: la direction change brutalement au point
                  <InlineMath math="a" />; les pentes à gauche et à droite ne
                  coïncident pas. Par exemple,
                  <InlineMath math="|x|" />.
                  C'est la courbe rouge sur le graphique.
                </p>
              </li>
              <li>
                <p>
                  Tangente verticale.
                  C'est la courbe verte sur le graphique.
                </p>
                <BlockMath
                  math="\sqrt[3]{x} = 0"
                />
              </li>
              <li>
                <p>
                  Discontinuité (saut): la courbe est coupée au point; on ne peut
                  pas définir de tangente.
                  C'est la courbe violette sur le graphique.
                </p>
              </li>
              <li>
                <p>
                  Discontinuité 2: la courbe est inexistante sur une intervalle.
                  C'est la courbe bleue sur le graphique.
                </p>
              </li>
            </ol>
            Si le point en question est dans l'une de ces situations, le point est non dérivable.
          </li>

        </ol>
      </section>
    </div>
  );
}

