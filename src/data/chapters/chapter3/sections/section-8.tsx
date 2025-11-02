import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Section8(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>

        <ol className="list list-1" type="1">
          <li>
            <h3 className="text-xl font-semibold p-2">Partition de l’univers</h3>
            <p>
              Soit <InlineMath math={String.raw`(B_i)_{i=1..n}`} /> une partition
              de l’univers (événements disjoints deux à deux et couvrant tout).
            </p>
            <p>Formule des probabilités totales :</p>
            <BlockMath
              math={String.raw`\displaystyle P(A)=\sum_{i=1}^n P(B_i)\,P(A\mid B_i)`}
            />
            <details><summary>La notation de somme</summary>
              <h3 className="text-xl font-semibold p-2">La notation de somme <InlineMath math={String.raw`\sum_{i=1}^n`} /></h3>
              <p>
                Elle vous fait peut-être peur. <br />
                En réalité, elle est assez simple à comprendre. <br />
                <InlineMath math={String.raw`i=1`} /> signifie le point de départ de la somme, 1, et la variable, i. <br />
                <InlineMath math={String.raw`n`} /> est le point d'arrivée de la somme, et elle est inclusive(si n est 4 on compte jusqu'à 4 au lieu de 3). <br />
                Prenant cela en compte, regardons un exemple plus simple.
              </p>
              <BlockMath 
                math = {String.raw`\sum_{i=1}^4 i`}
              />
              <p>Cela est la même chose que: </p>
              <BlockMath 
                math = {String.raw`1 + 2 + 3 + 4`}
              />
              <p>Prenons un autre exemple un peu plus copmpliqué:</p>
              <BlockMath
                math = {String.raw`\sum_{i=1}^4 2^i`}
              />
              <p>Cela est la même chose que:</p>
              <BlockMath
                math = {String.raw`2^1 + 2^2 + 2^3 + 2^4 = 2 + 4 + 8 + 16 = 30`}
              />
              <p>Retournons vers notre exemple de partition de l’univers:</p>
              <BlockMath
                math = {String.raw`\sum_{i=1}^n P(B_i)\,P(A\mid B_i)`}
              />
              <p><InlineMath math={String.raw`B_i`} /> est juste une notation pour faciliter la tâche. En réalité, si le nombre de partitions était connu (ex. 3), on pourrait les noter <InlineMath math={String.raw`B, C, D`} />.</p>

            </details>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Cas continu (intuition)</h3>
            <p>
              La somme est utilisée pour determiner la probabilité totale d’un événement.
              Par exemple, soient B et C deux événements distincts qui forment un univers, et A un événement qui pourrait arriver dans certains cas où B est achevé ou C est achevé.
              Alors, <InlineMath math="P(A)"></InlineMath> serait:
              <BlockMath 
                math = {String.raw`\displaystyle P(A)=P(B)P(A\mid B)+P(C)P(A\mid C)`}
              />
            </p>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Attention</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>Vérifier que les <InlineMath math={String.raw`B_i`} /> forment bien une partition.</p>
              </li>
              <li>
                <p>Utiliser des probabilités conditionnelles cohérentes avec chaque <InlineMath math={String.raw`B_i`} />.</p>
              </li>
            </ol>
          </li>
        </ol>
      </section>
    </div>
  );
}

