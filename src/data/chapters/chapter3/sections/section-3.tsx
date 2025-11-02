import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import diagram1 from "/src/assets/img/diagrams/diagram1.png";
import diagram3 from "/src/assets/img/diagrams/diagram3.png";
import diagram4 from "/src/assets/img/diagrams/diagram4.png";


export default function Section3(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>

        <ol className="list list-1" type="1">
          <li>
            <h3 className="text-xl font-semibold p-2">
              Diagrammes de Venn : lecture de P(A|B)
            </h3>
            <p>
              Sur un diagramme, on restreint l’univers à
              {" "}
              <InlineMath math={String.raw`B`} /> puis on mesure la part de
              {" "}
              <InlineMath math={String.raw`A\cap B`} />.
            </p>
            <BlockMath
              math={String.raw`\displaystyle P(A\mid B)=\frac{\text{aire}(A\cap B)}{\text{aire}(B)}`}
            />
            <img src={diagram1} alt="venn"></img>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Cas typiques à repérer</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>
                  Si <InlineMath math={String.raw`A\subset B`} />, alors
                  {" "}
                  <InlineMath math={String.raw`P(A\mid B)=\dfrac{P(A)}{P(B)}`} />.
                </p>
              </li>
              <li>
                <p>
                  Si <InlineMath math={String.raw`A\cap B=\varnothing`} />, alors
                  {" "}
                  <InlineMath math={String.raw`P(A\mid B)=0`} />.
                </p>
              </li>
              <li>
                <p>
                  Si <InlineMath math={String.raw`A`}/> et <InlineMath math={String.raw`B`}/> sont indépendants,
                  {" "}
                  <InlineMath math={String.raw`P(A\mid B)=P(A)`} />.
                </p>
              </li>
            </ol>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Exemples visuels</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>
                  Deux cercles de tailles différentes avec forte intersection :
                  {" "}
                  <InlineMath math={String.raw`P(A\mid B)`} /> élevé.
                </p>
                <img src={diagram3} alt="venn"></img>
              </li>
              <li>
                <p>
                  Deux cercles disjoints :
                  {" "}
                  <InlineMath math={String.raw`P(A\mid B)=0`} />.
                </p>
                <img src={diagram4} />
              </li>
            </ol>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Erreurs fréquentes</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>
                  Confondre <InlineMath math={String.raw`P(A\mid B)`} /> et
                  {" "}
                  <InlineMath math={String.raw`P(B\mid A)`} />.
                </p>
              </li>
              <li>
                <p>Prendre <InlineMath math={String.raw`P(A\mid B)=P(A)`} /> sans justifier l’indépendance.</p>
              </li>
            </ol>
          </li>
        </ol>
      </section>
    </div>
  );
}

