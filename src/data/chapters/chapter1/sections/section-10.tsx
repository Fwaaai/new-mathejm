import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";  

export default function Section4 (): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>

        <p>
          Trouver les racines revient à résoudre l’équation :
        </p>
        <BlockMath math="f(x) = a(x - \alpha)^2 + \beta = 0" />

        <p>
          On isole le carré :
        </p>
        <BlockMath math="a(x - \alpha)^2 + \beta = 0 \quad \Rightarrow \quad (x - \alpha)^2 = -\frac{\beta}{a}" />

        <p>
          Le nombre de solutions dépend du signe de <InlineMath math="-\frac{\beta}{a}" /> :
        </p>

        <ol className="list">
          <li>
            <strong>Si</strong> <InlineMath math="-\frac{\beta}{a} < 0" /> : aucune solution réelle → <strong>pas de racines</strong>.
          </li>
          <li>
            <strong>Si</strong> <InlineMath math="-\frac{\beta}{a} = 0" /> : une seule solution → <strong>une racine (double)</strong>.
          </li>
          <li>
            <strong>Si</strong> <InlineMath math="-\frac{\beta}{a} > 0" /> : deux solutions → <strong>deux racines réelles</strong>.
          </li>
        </ol>

        <ol className="list">
          <li>
            <p><strong>Exemple où</strong> <InlineMath math="-\frac{\beta}{a} = 0" /> :</p>
            <BlockMath math="f(x) = 3(x - 4)^2 + 0" />
            <p>
              On identifie <InlineMath math="a = 3" />, <InlineMath math="\alpha = 4" />, <InlineMath math="\beta = 0" />
            </p>
            <p>
              Résolution :
            </p>
            <BlockMath
              math={String.raw`
                \begin{align*}
                  3(x - 4)^2 = 0 \\
                  (x - 4)^2 = 0 \\
                  x - 4 = 0 \\
                  x = 4
                \end{align*}
              `}
            />
            <p>
              Il y a une racine double : <InlineMath math="x = 4" />
            </p>
          </li>

          <li>
            <p><strong>Exemple où</strong> <InlineMath math="-\frac{\beta}{a} > 0" /> :</p>
            <BlockMath math="f(x) = -(x - 2)^2 + 9" />
            <p>
              On identifie <InlineMath math="a = -1" />, <InlineMath math="\alpha = 2" />, <InlineMath math="\beta = 9" />
            </p>
            <p>
              Résolution :
            </p>
            <BlockMath
              math={String.raw`
                \begin{align*}
                  -(x - 2)^2 + 9 = 0 \\
                  (x - 2)^2 = 9 \\
                  x - 2 = \pm \sqrt{9} \\
                  x = 2 \pm 3
                \end{align*}
              `}
            />
            <p>
              Les racines sont donc :
            </p>
            <BlockMath math="x_1 = 5, \quad x_2 = -1" />
          </li>
        </ol>
      </section>
    </div>
  );
}