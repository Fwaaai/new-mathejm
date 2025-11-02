import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Section5(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>

        <ol className="list list-1" type="1">
          <li>
            <h3 className="text-xl font-semibold p-2">Définition</h3>
            <p>
              Deux événements <InlineMath math={String.raw`A`} /> et
              {" "}
              <InlineMath math={String.raw`B`} /> sont indépendants si :
            </p>
            <BlockMath math={String.raw`\displaystyle P(A\cap B)=P(A)\,P(B)`} />
            <p>Équivalences utiles :</p>
            <BlockMath
              math={String.raw`\displaystyle P(A\mid B)=P(A)\ (P(B)>0)\quad\text{et}\quad P(B\mid A)=P(B)\ (P(A)>0)`}
            />
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Exemples</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>
                  Lancer d’une pièce et d’un dé : les issues sont indépendantes.
                </p>
                <BlockMath
                  math={String.raw`\displaystyle P(\text{Face}\cap\text{6})=P(\text{Face})\,P(\text{6})=\tfrac12\cdot\tfrac16=\tfrac1{12}`}
                />
              </li>
              <li>
                <p>
                  Tirages sans remise : en général non indépendants.
                </p>
              </li>
            </ol>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Pièges</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>
                  Disjonction <InlineMath math={String.raw`(A\cap B=\varnothing)`} />
                  {" "}
                  n’implique pas indépendance.
                </p>
              </li>
              <li>
                <p>
                  Indépendance n’implique pas égalité des probabilités.
                </p>
              </li>
            </ol>
          </li>
        </ol>
      </section>
    </div>
  );
}

