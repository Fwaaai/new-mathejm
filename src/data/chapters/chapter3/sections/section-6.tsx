import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import table25 from "/src/assets/img/tables/table25.png";
import diagram2 from '/src/assets/img/diagrams/diagram2.png';

export default function Section6(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>

        <ol className="list list-1" type="1">
          <li>
            <h3 className="text-xl font-semibold p-2">Tableaux à double entrée</h3>
            <p>
              Un tableau synthétise les effectifs ou probabilités de
              {" "}
              <InlineMath math={String.raw`A`} />, <InlineMath math={String.raw`\bar A`} />
              {" "}
              et <InlineMath math={String.raw`B`} />, <InlineMath math={String.raw`\bar B`} />.
            </p>
            <img src={table25} alt="tableau"></img>
            <p>
              Lecture :
              {" "}
              <InlineMath math={String.raw`P(A\cap B)`} /> dans la case d’intersection,
              {" "}
              <InlineMath math={String.raw`P(B)`} /> sur la marge, etc.
            </p>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Arbres pondérés</h3>
            <p>
              Chaque branche porte une probabilité (marginale ou conditionnelle).
              La probabilité d’un chemin est le produit des poids.
            </p>
            <img src={diagram2} alt="arbre"></img>
            <BlockMath
              math={String.raw`\text{Chemin } B\to A:\quad P(B)\times P(A\mid B)`}
            />
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Méthode pratique</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>Compléter la marge (totaux) pour vérifier la cohérence.</p>
              </li>
              <li>
                <p>Sur arbre, multiplier le long des branches puis sommer des chemins.</p>
              </li>
            </ol>
          </li>
        </ol>
      </section>
    </div>
  );
}

