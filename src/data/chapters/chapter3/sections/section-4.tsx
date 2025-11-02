import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Section4(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>

        <ol className="list list-1" type="1">
          <li>
            <h3 className="text-xl font-semibold p-2">Règle du produit</h3>
            <p>
              Pour deux événements <InlineMath math={String.raw`A`} /> et
              {" "}
              <InlineMath math={String.raw`B`} /> :
            </p>
            <BlockMath
              math={String.raw`\displaystyle P(A\cap B)=P(B)\,P(A\mid B)=P(A)\,P(B\mid A)`}
            />
            <p>
              Cette identité permet de décomposer une probabilité conjointe en
              une succession « condition × marginale ».
            </p>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Exemples</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>
                  Tirages successifs sans remise : deux rouges de suite dans une
                  urne (3R, 2B).
                </p>
                <BlockMath
                  math={String.raw`\displaystyle P(R\cap R)=P(R_1)\,P(R_2\mid R_1)=\tfrac{3}{5}\cdot\tfrac{2}{4}=\tfrac{3}{10}`}
                />
              </li>
              <li>
                <p>
                  Tirages successifs indépendants (avec remise) :
                  {" "}
                  <InlineMath math={String.raw`P(R\cap R)=P(R)\cdot P(R)`} />.
                </p>
              </li>
            </ol>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Attention</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>
                  « Disjoints » n’implique pas « indépendants ». Si
                  {" "}
                  <InlineMath math={String.raw`A\cap B=\varnothing`} />, alors
                  {" "}
                  <InlineMath math={String.raw`P(A\cap B)=0`} /> mais
                  {" "}
                  l’indépendance exige
                  {" "}
                  <InlineMath math={String.raw`P(A\cap B)=P(A)P(B)`} />.
                </p>
              </li>
            </ol>
          </li>
        </ol>
      </section>
    </div>
  );
}

