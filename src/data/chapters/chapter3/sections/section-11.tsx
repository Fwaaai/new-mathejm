import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import diagram5 from "/src/assets/img/diagrams/diagram5.png";

export default function Section11(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>

        <ol className="list list-1" type="1">
          <li>
            <h3 className="text-xl font-semibold p-2">Reprise</h3>
            <p>
              Si deux événements A et B sont indépendants, alors
              <BlockMath math={String.raw`\displaystyle P(A\cap B)=P(A)\,P(B)`} />
              Pour une suite de <InlineMath math={String.raw`n`} /> essais
              indépendants (même probabilité de succès
              <InlineMath math={String.raw`p`} /> à chaque essai), la
              probabilité d’un chemin se calcule par produit des probabilités
              le long du chemin.
            </p>
          </li>
          <li>
              <h3 className="text-xl font-semibold p-2">Arbre</h3>
              <p>Reprenons l'exemple: A peut être: Lancer un dé et avoir un 6.<br />
              B peut être : Lancer une pièce et avoir face.
                <img src={diagram5} className="img" alt="graphique" />
              </p>
          </li>
        </ol>
      </section>
    </div>
  );
}
