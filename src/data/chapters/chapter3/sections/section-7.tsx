import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import table26 from '/src/assets/img/tables/table26.png';

export default function Section7(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>

        <ol className="list list-1" type="1">
          <li>
            <h3 className="text-xl font-semibold p-2">Composer avec un tableau</h3>
            <p>
              On lit <InlineMath math={String.raw`P(A\cap B)`} /> dans la case
              d’intersection, puis on obtient
              {" "}
              <InlineMath math={String.raw`P(A\cup B)=P(A)+P(B)-P(A\cap B)`} />.
            </p>
            <img src={table26} alt="tableau"></img>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Composer avec un arbre</h3>
            <p>
              Pour un événement « au moins un succès » sur deux essais
              indépendants :
            </p>
            <BlockMath
              math={String.raw`\displaystyle P(\text{≥1 succès})=1-P(\text{0 succès})=1-(1-p)^2`}
            />
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Exemple</h3>
            <p>
              Deux machines indépendantes ont des taux de réussite
              {" "}
              <InlineMath math={String.raw`p_1=0{,}8`} /> et
              {" "}
              <InlineMath math={String.raw`p_2=0{,}9`} />.
              Probabilité que la commande soit honorée si l’une suffit ?
            </p>
            <BlockMath
              math={String.raw`\begin{aligned}
              P(\text{satisfaite})&=1-P(\text{échec machine 1 et 2})\\
              &=1-(1-p_1)(1-p_2)=1-(0{,}2)(0{,}1)=0{,}98.
              \end{aligned}`}
            />
          </li>
        </ol>
      </section>
    </div>
  );
}

