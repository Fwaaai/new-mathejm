import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import graph23 from "/src/assets/img/graphs/graph23.png";
import table11 from "/src/assets/img/tables/table11.png";

export default function Section13(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>

        <ol className="list list-1" type="1">
          <li>
            <h3 className="text-xl font-semibold p-2">Principe</h3>
            <p>
              Résoudre <InlineMath math="f'(x)=0" /> revient à chercher les points
              où la tangente est horizontale. Ces solutions sont des <b>points
              critiques</b> et sont des candidats à un extremum local.
            </p>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Procédure type</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>Calculer <InlineMath math="f'(x)" /> sur le domaine d’étude.</p>
              </li>
              <li>
                <p>
                  Résoudre <InlineMath math="f'(x)=0" /> et lister les
                  solutions admissibles.
                </p>
              </li>
              <li>
                <p>
                  Interpréter: utiliser le signe de <InlineMath math="f'" /> pour
                  conclure: maximum local, minimum local, ou plateau/inflexion.
                </p>
              </li>
            </ol>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Lecture graphique</h3>
            <img src={graph23} className="img" alt="graphique" />
            <p>
              Sur un tracé, repérer les tangentes horizontales. Un changement de
              signe de <InlineMath math="f'" /> (la pente) de + à − indique un maximum local;
              de − à +, un minimum local. Si le signe ne change pas, il peut y
              avoir un point d’inflexion horizontal.
            </p>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Exemple 1 — polynôme</h3>
            <p>
              <InlineMath math="f(x)=x^3-3x" />. On a
              <InlineMath math="\,f'(x)=3x^2-3" />.
            </p>
            <BlockMath
              math={String.raw`\begin{aligned}
                f'(x)=0 &\iff 3x^2-3=0 \\
                        &\iff x^2=1 \\
                        &\iff x\in\{-1,\,1\}.
              \end{aligned}`}
            />
            <p>
              <img src={table11} className="img" alt="tableau" />
              Pour le premier point critique, la pente est positive à gauche et négative à droite. Cela indique que -1 est un maximum local. <br />
              Pour le second point critique, la pente est négative à gauche et positive à droite. Cela indique que 1 est un minimum local.
            </p>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Exemple 2 — point d’inflexion</h3>
            <p>
              <InlineMath math="f(x)=x^3" />. Alors
              <InlineMath math="\,f'(x)=3x^2" />, d’où
              <InlineMath math="f'(x)=0\iff x=0" />.
            </p>
            <p>
              Le signe de <InlineMath math="f'" /> est non négatif des deux côtés
              de 0 (pas de changement de signe). Alors, ce n’est pas un extremum, mais
              un <b>point d’inflexion horizontal</b>.
            </p>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Remarques</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>
                  Les solutions de <InlineMath math="f'(x)=0" /> sont des
                  candidats(si le maximum ou le minimum local est demandé); la conclusion passe par le signe de
                  <InlineMath math="f'" />.
                </p>
              </li>
              <li>
                <p>
                  Sur un intervalle fermé, penser aussi aux bornes pour les
                  extrema globaux (valeurs aux extrémités et aux points
                  critiques). Par exemple, si une intervalle comme 
                  <InlineMath math="[-3;5]" /> est donnée, il faut vérifier -3 et 5 en plus des points critiques. 
                </p>
              </li>
            </ol>
          </li>
        </ol>
      </section>
    </div>
  );
}

