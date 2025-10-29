import React from "react";
import { BlockMath, InlineMath} from "react-katex";
import "katex/dist/katex.min.css";  

export default function Section4 (): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>

        <p>On applique ici le théorème des racines rationnelles pour tester les valeurs qui pourraient être des racines évidentes d’un polynôme :</p>

        <p>Soit :</p>
        <BlockMath math="p(x) = 2x^3 - 3x^2 - 11x + 6" />

        <p>Les diviseurs de <InlineMath math="d = 6" /> sont : 1, 2, 3, 6</p>
        <p>Les diviseurs de <InlineMath math="a = 2" /> sont : 1, 2</p>

        <p>Les candidats pour les racines sont donc :</p>
        <BlockMath math={String.raw`\pm1,\ \pm2,\ \pm3,\ \pm6,\ \pm\frac{1}{2},\ \pm\frac{3}{2}`} />

        <p>On teste ces valeurs :</p>
        <BlockMath
          math={String.raw`
            \begin{aligned}
              p(1) &= 2(1)^3 - 3(1)^2 - 11(1) + 6 = -6 \\
              p(-1) &= 2(-1)^3 - 3(-1)^2 - 11(-1) + 6 = 12\\
              p(½) &= 2(⅛) - 3(¼) - 11(½) + 6 = ¼ - ¾ - 5.5 + 6 = 0\\
              p(-½) &= 2(-⅛) - 3(¼) + 11/2 + 6 = -¼ - ¾ + 5.5 + 6 = 10.5\\
              p(2) &= 2(8) - 3(4) - 11(2) + 6 = 16 - 12 - 22 + 6 = -12\\
              p(-2) &= -16 - 12 + 22 + 6 = 0\\
              p(3) &= 54 - 27 - 33 + 6 = 0\\
            \end{aligned}
          `}
        />
        <p>On trouve donc que les racines évidentes sont :</p>
        <BlockMath math={String.raw`x_1 = \frac{1}{2}, \quad x_2 = -2, \quad x_3 = 3`} />
      </section>
    </div>
  );
}