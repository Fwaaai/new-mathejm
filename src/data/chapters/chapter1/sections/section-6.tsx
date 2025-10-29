import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";  
import table3 from '/src/assets/img/tables/table3.png';
import table4 from '/src/assets/img/tables/table4.png';
import table5 from '/src/assets/img/tables/table5.png';
import table6 from '/src/assets/img/tables/table6.png';
import table7 from '/src/assets/img/tables/table7.png';
import table8 from '/src/assets/img/tables/table8.png';

export default function Section4 (): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>
        <ol className="list-1">
          <li>
            <h3 className="text-xl font-semibold p-2"><InlineMath math="\Delta > 0" /></h3>
            <p>Prenons un exemple : <InlineMath math="f(x) = -2x^2 + 5x + 3" /></p>
            <p>Cherchons d'abord le discriminant :</p>
            <BlockMath math="\Delta = b^2 - 4ac = 5^2 - 4(-2)(3) = 25 + 24 = 49" />
            <p>On aura bien deux racines.</p>
            <BlockMath
              math={String.raw`
                \begin{align*}
                  x &= \frac{-b \pm \sqrt{\Delta}}{2a} \\
                  x &= \frac{-5 \pm \sqrt{49}}{2 \times (-2)} \\
                  x &= \frac{-5 \pm 7}{-4} \\
                  \\
                  x_1 &= \frac{-5 + 7}{-4} = \frac{2}{-4} = -\frac{1}{2} \\
                  x_2 &= \frac{-5 - 7}{-4} = \frac{-12}{-4} = 3
                \end{align*}
              `}
            />
            <p>Les racines sont donc <InlineMath math="-\frac{1}{2}" /> et <InlineMath math="3" />.</p>
            <p>On peut construire ce tableau de variation :</p>
            <img src={table3} className="img" alt="Tableau de signes modèle pour delta > 0" />
            <p>Qui sera donc :</p>
            <img src={table4} className="img" alt="Tableau de signes complété pour delta > 0" />
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2"><InlineMath math="\Delta = 0" /></h3>
            <p>Prenons un exemple : <InlineMath math="f(x) = -x^2 + 4x - 4" /></p>
            <p>Calculons le discriminant :</p>
            <BlockMath math="\Delta = b^2 - 4ac = 4^2 - 4(-1)(-4) = 16 - 16 = 0" />
            <p>Il y a une seule racine (racine double).</p>
            <BlockMath
              math={String.raw`
                \begin{align*}
                  x &= \frac{-b}{2a} \\
                  x &= \frac{-4}{2 \times (-1)} = \frac{-4}{-2} = 2
                \end{align*}
              `}
            />
            <p>La racine double est donc <InlineMath math="2" />.</p>
            <p>On peut construire ce tableau de variation :</p>
            <img src={table5} className="img" alt="Tableau de signes modèle pour delta = 0" />
            <p>Qui sera donc :</p>
            <img src={table6} className="img" alt="Tableau de signes complété pour delta = 0" />
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2"><InlineMath math="\Delta < 0" /></h3>
            <p>Prenons un exemple : <InlineMath math="f(x) = x^2 + x + 1" /></p>
            <p>Calculons le discriminant :</p>
            <BlockMath math="\Delta = b^2 - 4ac = 1^2 - 4(1)(1) = 1 - 4 = -3" />
            <p>Le discriminant est négatif, donc il n'y a pas de racines réelles.</p>
            <p>On peut construire ce tableau de variation :</p>
            <img src={table7} className="img" alt="Tableau de signes modèle pour delta < 0" />
            <p>Qui sera donc :</p>
            <img src={table8} className="img" alt="Tableau de signes complété pour delta < 0" />
          </li>
        </ol>
      </section>
    </div>
  );
}