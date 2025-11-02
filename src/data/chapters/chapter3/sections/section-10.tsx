import React from "react";
import { BlockMath, } from "react-katex";
import "katex/dist/katex.min.css";

export default function Section10(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>

        <ol className="list list-1" type="1">
          <li>
            <h3 className="text-xl font-semibold p-2">Essais indépendants </h3>
            <p>On dit que A et B sont indépendants si l'un n'affecte pas l'autre. <br />
              Par exemple, A peut être: Lancer un dé et avoir un 6.<br />
              B peut être : Lancer une pièce et avoir face.<br />
              Dans ce cas, l'essai de A n'affecte pas B, et l'essai de B n'affecte pas A.<br />

              Alors, on peut trouver les probabilités que A et B arrivent en même temps (ou l'un après l'autre) en les multipliant:<br />
              <BlockMath math={String.raw`\displaystyle P(A \cap B) = P(A) \times P(B)`} />
            </p>
          </li>
        </ol>
      </section>
    </div>
  );
}
