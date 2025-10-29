import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";  
import graph5 from "/src/assets/img/graphs/graph5.png";

export default function Section4 (): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>
        <ol className="list-1">
          <li>
            <h3 className="text-xl font-semibold p-2">À partir des autres formes</h3>

            <ol type="a" className="list list-a">
              <li>
                <h4 className="text-lg p-1 font-semibold">À partir de la forme développée</h4>
                <p>Prenons un exemple :</p>
                <BlockMath math="f(x) = -x^2 + 4x + 5" />
                <p>On utilise la formule de la forme canonique :</p>
                <BlockMath math="f(x) = a(x - \alpha)^2 + \beta \quad \text{où} \quad \alpha = \frac{-b}{2a}, \quad \beta = f(\alpha)" />
                <p>Calculons :</p>
                <BlockMath
                  math={String.raw`
                    \begin{aligned}
                      \alpha &= -\frac{b}{2a} = -\frac{4}{2(-1)} = -\frac{4}{-2} = 2 \\
                      \beta &= f(2) = -(2)^2 + 4 \times 2 + 5 = -4 + 8 + 5 = 9
                    \end{aligned}
                  `}
                />
                <p>On obtient donc :</p>
                <BlockMath math="f(x) = -(x - 2)^2 + 9" />
              </li>

              <li>
                <h4 className="text-lg p-1 font-semibold">À partir de la forme factorisée</h4>
                <p>
                  Si la fonction est donnée sous forme factorisée :
                  <BlockMath math="f(x) = a(x - x_1)(x - x_2)" />
                  On peut retrouver la forme canonique en procédant ainsi :
                </p>
                <p>
                  On calcule la demi-somme des racines pour trouver l’abscisse du sommet :
                  <BlockMath math="\alpha = \frac{x_1 + x_2}{2}" />
                  On calcule ensuite :
                  <BlockMath math="\beta = f(\alpha)" />
                  On obtient alors la forme canonique :
                  <BlockMath math="f(x) = a(x - \alpha)^2 + \beta" />
                </p>
                <br /><br />
                <p>Par exemple :</p>
                <BlockMath math="f(x) = 2(x - 1)(x - 5)" />
                <p>
                  Les racines sont <InlineMath math="x_1 = 1" /> et <InlineMath math="x_2 = 5" /> <br />
                  Donc :
                  <BlockMath math="\alpha = \frac{1 + 5}{2} = 3" />
                </p>
                <p>
                  On calcule :
                  <BlockMath math="\beta = f(3) = 2(3 - 1)(3 - 5) = 2(2)(-2) = -8" />
                </p>
                <p>
                  Donc la forme canonique est :
                  <BlockMath math="f(x) = 2(x - 3)^2 - 8" />
                </p>
              </li>
            </ol>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">À partir d’un graphique</h3>
            <img src={graph5} className="img" alt="Graphique d'une parabole avec sommet S et point P" />
            <p>
              Supposons qu’on connaisse le sommet de la parabole <InlineMath math="S(2,9)" /> et un autre point <InlineMath math="P(0,5)" /> par lecture graphique.
            </p>
            <p>On utilise la forme canonique :</p>
            <BlockMath math="f(x) = a(x - \alpha)^2 + \beta" />
            <p>On remplace avec les coordonnées de <InlineMath math="P(0,5)" /> :</p>
            <BlockMath
              math={String.raw`
                \begin{aligned}
                  5 &= a(0 - 2)^2 + 9 \\
                  5 &= 4a + 9 \\
                  -4 &= 4a \\
                  a &= -1
                \end{aligned}
              `}
            />
            <p>Donc l’expression de la fonction est :</p>
            <BlockMath math="f(x) = -(x - 2)^2 + 9" />
          </li>
        </ol>
      </section>
    </div>
  );
}