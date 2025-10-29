import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Section4(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>
        <p>
          Cette section présente la méthode générale pour trouver les racines
          d’un trinôme, ainsi que quelques astuces qui permettent de simplifier
          les calculs.
        </p>
        <ol className="list list-1" type="1">
          <li>
            <h3 className="text-xl font-semibold p-2">Cas régulier</h3>
            <p>
              Trouver les racines d’un trinôme de la forme{" "}
              <InlineMath math="ax^2 + bx + c" /> revient à résoudre l'équation{" "}
              <InlineMath math="ax^2 + bx + c = 0" />.
            </p>
            <p>
              On rappelle la formule pour résoudre une équation du second degré
              :
            </p>
            <BlockMath math="\Delta = b^2 - 4ac" />
            <BlockMath math="x_1 = \frac{-b + \sqrt{\Delta}}{2a}, \quad x_2 = \frac{-b - \sqrt{\Delta}}{2a}" />
            <p>Si, par exemple, on doit trouver les racines de la fonction:</p>
            <BlockMath math="f(x)=-x^2+4x+5" />
            <p>On résout:</p>
            <BlockMath
              math={String.raw`
                \begin{aligned}
                  \Delta &= b^2 - 4ac = 4^2 - 4(-1)(5) = 16 + 20 = 36, \\
                  x_1 &= \frac{-b + \sqrt{\Delta}}{2a} = \frac{-4 + \sqrt{36}}{2(-1)} = \frac{-4 + 6}{-2} = -1, \\
                  x_2 &= \frac{-b - \sqrt{\Delta}}{2a} = \frac{-4 - \sqrt{36}}{2(-1)} = \frac{-4 - 6}{-2} = 5.
                \end{aligned}
              `}
            />
            <p>
              Les racines sont donc <InlineMath math="-1" /> et{" "}
              <InlineMath math="5" />.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold p-2">Cas particuliers</h3>
            <p>
              Certains cas particuliers permettent de conclure plus rapidement.
            </p>
            <ol className="list list-a" type="a">
              <li>
                <h4 className="text-lg p-1 font-semibold">
                  <InlineMath math="\Delta = 0" />
                </h4>
                <p>
                  Si, au cours de la résolution, on obtient{" "}
                  <InlineMath math="\Delta = 0" />, alors l'équation admet une
                  racine double donnée par{" "}
                  <InlineMath math="x = \frac{-b}{2a}" />.
                </p>
                <p>
                  Par exemple, pour <InlineMath math="f(x) = x^2 - 2x + 1" /> :
                </p>
                <BlockMath
                  math={String.raw`
                    \begin{aligned}
                      \Delta &= (-2)^2 - 4(1)(1) = 0, \\
                      x &= \frac{-(-2)}{2(1)} = 1.
                    \end{aligned}
                  `}
                />
                <p>
                  La racine double pour cette fonction est donc{" "}
                  <InlineMath math="1" />.
                </p>
              </li>
              <li>
                <h4 className="text-lg p-1 font-semibold">
                  <InlineMath math="a+b+c = 0" />
                </h4>
                <p>
                  Si <InlineMath math="a + b + c = 0" />, alors les racines sont{" "}
                  <InlineMath math="x_1 = 1" /> et{" "}
                  <InlineMath math="x_2 = \frac{c}{a}" />.
                </p>
                <p>
                  Par exemple, pour <InlineMath math="f(x) = 2x^2 - 3x + 1" />,
                  on obtient <InlineMath math="a + b + c = 2 - 3 + 1 = 0" /> ;
                  on a donc <InlineMath math="x_1 = 1" /> et{" "}
                  <InlineMath math="x_2 = \frac{1}{2}" />.
                </p>
              </li>
              <li>
                <h4 className="text-lg p-1 font-semibold">
                  <InlineMath math="a-b+c=0, \quad b=a+c" />
                </h4>
                <p>
                  Si <InlineMath math="a - b + c = 0" /> (ce qui équivaut à{" "}
                  <InlineMath math="b = a + c" />
                  ), alors les solutions sont <InlineMath math="x_1 = -1" /> et{" "}
                  <InlineMath math="x_2 = -\frac{c}{a}" />.
                </p>
                <p>
                  Par exemple, pour <InlineMath math="f(x) = 2x^2 + 3x + 1" />,
                  on observe que <InlineMath math="a - b + c = 2 - 3 + 1 = 0" />{" "}
                  ; les racines valent donc <InlineMath math="x_1 = -1" /> et{" "}
                  <InlineMath math="x_2 = -\frac{1}{2}" />.
                </p>
              </li>
            </ol>
          </li>
        </ol>
      </section>
    </div>
  );
}
