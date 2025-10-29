import React from "react";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import graph1 from "/src/assets/img/graphs/graph1.png";
import graph2 from "/src/assets/img/graphs/graph2.png";
export default function Section1(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>
        <ol className="list list-1" type="1">
          <li>
            <h3 className="text-xl font-semibold p-2">
              À partir d'autres formes
            </h3>
            <ol className="list list-a" type="a">
              <li>
                <h4 className="text-lg p-1 font-semibold">Forme Canonique</h4>
                <p>On peut faire un développement classique.</p>
                <BlockMath
                  math={String.raw`
                    \begin{align*}
                      6(5 - 3x)^{2} + 5 &= 6(25 - 30x + 9x^{2}) + 5 \\
                      &= 150 - 180x + 54x^{2} + 5 \\
                      &= 54x^{2} - 180x + 155
                    \end{align*}
                  `}
                />
              </li>
              <li>
                <h4 className="text-lg p-1 font-semibold">Forme Factorisée</h4>
                <p>
                  On peut faire un développement classique, ou utiliser des
                  identités remarquables.
                </p>
                <ol className="list list-i" type="i">
                  <li>
                    <h4 className="text-lg p-1 font-semibold">
                      Développement sans identités
                    </h4>
                    <BlockMath
                      math={String.raw`
                        \begin{align*}
                          (x - 5)(x + 7) &= x(x + 7) - 5(x + 7) \\
                          &= x^{2} + 7x - 5x - 35 \\
                          &= x^{2} + 2x - 35
                        \end{align*}
                      `}
                    />
                  </li>
                  <li>
                    <h4 className="text-lg p-1 font-semibold">
                      Développement avec identités remarquables
                    </h4>
                    <ol className="list list-upper-alpha" type="A">
                      <li>
                        <h4 className="text-lg p-1 font-semibold">
                          Cas 1 - <InlineMath math="(a+b)^2" />
                        </h4>
                        <p>
                          On sait que{" "}
                          <InlineMath math="(a+b)^2 = a^2 + 2ab + b^2" />.
                        </p>
                        <BlockMath
                          math={String.raw`
                            \begin{align*}
                              (x + 5)^{2} &= x^{2} + 2(5)(x) + 5^{2} \\
                              &= x^{2} + 10x + 25
                            \end{align*}
                          `}
                        />
                      </li>
                      <li>
                        <h4 className="text-lg p-1 font-semibold">
                          Cas 2 - <InlineMath math="(a-b)^2" />
                        </h4>
                        <p>
                          On sait que{" "}
                          <InlineMath math="(a-b)^2 = a^2 - 2ab + b^2" />.
                        </p>
                        <BlockMath
                          math={String.raw`
                            \begin{align*}
                              (x - 5)^{2} &= x^{2} - 2(5)(x) + 5^2 \\
                              &= x^{2} - 10x + 25
                            \end{align*}
                           `}
                        />
                      </li>
                      <li>
                        <h4 className="text-lg p-1 font-semibold">
                          Cas 3 - <InlineMath math="(a+b)(a-b)" />
                        </h4>
                        <p>
                          On sait que{" "}
                          <InlineMath math="(a+b)(a-b) = a^2 - b^2" />.
                        </p>
                        <BlockMath
                          math={String.raw`
                            \begin{align*}
                              (x + 5)(x - 5) &= x^{2} - 5^{2} \\
                              &= x^{2} - 25
                            \end{align*}
                          `}
                        />
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <h3 className="text-xl font-semibold p-2">
              À partir d’un graphique
            </h3>
            <ol className="list list-a" type="a">
              <li>
                <h4 className="text-lg p-1 font-semibold">
                  Par le sommet et un point
                </h4>
                <p>Regardons ce graphique.</p>
                {/* Use the imported variable for the src */}
                <img src={graph1} className="img" alt="" />
                <p>
                  On remarque que <InlineMath math="S = (-2, -8)" /> et{" "}
                  <InlineMath math="P = (-4,-4)" />
                </p>
                <p>On peut alors compléter la forme canonique avec:</p>
                <BlockMath
                  math={String.raw`
                    \begin{aligned}
                      \text{Abscisse de } S &: S_{x} = \alpha \\
                      \text{Ordonnée de } S &: S_{y} = \beta \\
                      \text{Abscisse de } P &: P_{x} = x_{0} \\
                      \text{Ordonnée de } P &: P_{y} = y_{0}
                    \end{aligned}
                  `}
                />
                <p>On sait que:</p>
                <BlockMath
                  math={String.raw`
                    \begin{aligned}
                      f(x) &= a(x - \alpha)^2 + \beta \\
                      y_{0} &= a(x_{0} - \alpha)^2 + \beta
                    \end{aligned}
                  `}
                />
                <p>Remplaçons avec</p>
                <BlockMath
                  math={String.raw`
                    \begin{aligned}
                      S_x = \alpha = -2 \\ S_y = \beta = -8 \\
                      P_x = x_0 = -4 \\ P_y = y_0 = -4
                    \end{aligned}
                  `}
                />
                <p>On résout pour a:</p>
                <BlockMath
                  math={String.raw`
                    \begin{aligned}
                      -4 &= a(-4 - (-2))^2 + (-8) \\
                      -4 &= a(-2)^2-8 \\
                      -4 &= 4a - 8 \\
                      4 &= 4a \\
                      a &= \frac{4}{4} = 1
                    \end{aligned}
                  `}
                />
                <p>
                  On remplace encore une fois, cette fois-ci{" "}
                  <InlineMath math="a = 1" /> pour trouver la fonction:
                </p>
                <BlockMath
                  math={String.raw`
                    \begin{aligned}
                      f(x) &= 1(x - (-2))^2 + (-8) \\
                      f(x) &= (x + 2)^2 - 8 \\
                      f(x) &= x^2 + 4x + 4 - 8 \\
                      f(x) &= x^2 + 4x - 4
                    \end{aligned}
                  `}
                />
                <p>Ainsi, on retrouve la forme développée.</p>
              </li>
              <li>
                <h4 className="text-lg p-1 font-semibold">
                  Par les abscisses des racines et un point
                </h4>
                <p>Regardons ce graphique.</p>
                {/* Use the imported variable for the src */}
                <img src={graph2} alt="" />
                <p>
                  On remarque les racines sont à <InlineMath math="x = -3" /> et{" "}
                  <InlineMath math="x = 2" />.
                </p>
                <p>On note:</p>
                <BlockMath
                  math={String.raw`
                    \begin{aligned}
                      \text{Première racine : } & r_1 \\
                      \text{Deuxième racine : } & r_2 \\
                      \text{Abscisse de } P \text{ qui est } P_x & \text{ est notée } x_0 \\
                      \text{Ordonnée de } P \text{ qui est } P_y & \text{ est notée } y_0
                    \end{aligned}
                  `}
                />
                <p>On peut alors compléter la forme factorisée avec:</p>
                <BlockMath
                  math={String.raw`
                    \begin{aligned}
                      f(x) &= a(x - r_1)(x - r_2) \\
                      y_0 &= a(x_0 - r_1)(x_0 - r_2)
                    \end{aligned}
                  `}
                />
                <p>Remplaçons:</p>
                <BlockMath
                  math={String.raw`
                    \begin{aligned}
                      r_1 &= -3 \\ r_2 &= 2 \\
                      x_0 &= -2 \\ y_0 &= -4
                    \end{aligned}
                  `}
                />
                <p>On resout pour a:</p>
                <BlockMath
                  math={String.raw`
                    \begin{aligned}
                      -4 &= a\bigl((-2) - (-3)\bigr)\bigl((-2) - 2\bigr) \\
                      -4 &= a(1)(-4) \\
                      -4 &= -4a \\
                      a &= 1
                    \end{aligned}
                  `}
                />
                <p>
                  On peut alors remplacer avec <InlineMath math="a = 1" /> pour
                  trouver la fonction:
                </p>
                <BlockMath
                  math={String.raw`
                    \begin{aligned}
                      f(x) &= a(x - r_1)(x - r_2) \\
                      f(x) &= 1\bigl(x - (-3)\bigr)\bigl(x - 2\bigr) \\
                      f(x) &= (x + 3)(x - 2) \\
                      f(x) &= x^2 - 2x + 3x - 6 \\
                      f(x) &= x^2 + x - 6
                    \end{aligned}
                  `}
                />
                <p>Ainsi, on retrouve la forme développée.</p>
              </li>
            </ol>
          </li>
          <li>
            <h3 className="text-xl font-semibold p-2">
              À partir d’un triplet de données d’images et d’antécédents
            </h3>
            <p>On nous donne trois points distincts:</p>
            <BlockMath
              math={String.raw`
                \begin{aligned}
                  P_1 &= (1, 8) \\
                  P_2 &= (3, 8) \\
                  P_3 &= (4, 5)
                \end{aligned}
              `}
            />
            <p>On note:</p>
            <BlockMath
              math={String.raw`
                \begin{aligned}
                  \text{Abscisse du premier point : } & x_0 = 1 \\
                  \text{Ordonnée du premier point : } & y_0 = 8 \\
                  \text{Abscisse du deuxième point : } & x_1 = 3 \\
                  \text{Ordonnée du deuxième point : } & y_1 = 8 \\
                  \text{Abscisse du troisième point : } & x_2 = 4 \\
                  \text{Ordonnée du troisième point : } & y_2 = 5
                \end{aligned}
              `}
            />
            <p>Pour chaque point, on remplace dans la formule:</p>
            <BlockMath
              math={String.raw`
                \begin{aligned}
                  f(x) &= ax^2 + bx + c \\
                  y_n &= ax_n^2 + bx_n + c \\\\
                  P(1,8): & \\
                  8 &= a(1)^2 + b(1) + c \\
                  8 &= a + b + c \\\\
                  P(3,8): & \\
                  8 &= a(3)^2 + b(3) + c \\
                  8 &= 9a + 3b + c \\\\
                  P(4,5): & \\
                  5 &= a(4)^2 + b(4) + c \\
                  5 &= 16a + 4b + c
                \end{aligned}
              `}
            />
            <p>
              On a donc trois équations avec les mêmes inconnues a, b, et c.
              <br />
              On peut donc en faire un système d’équations:
            </p>
            <BlockMath
              math={String.raw`
                \begin{cases}
                  8 = a + b + c \\
                  8 = 9a + 3b + c \\
                  5 = 16a + 4b + c
                \end{cases}
              `}
            />
            <p>On résout:</p>
            <BlockMath
              math={String.raw`
                \begin{aligned}
                  &\begin{cases}
                    8 = a + b + c \\
                    8 = 9a + 3b + c \\
                    5 = 16a + 4b + c
                  \end{cases} \\[0.75em]
                  \\
                  8 - 8 &= (9a + 3b + c) - (a + b + c)\\
                  0 &= (9a - a) + (3b - b) + (c - c)\\
                  0 &= 8a + 2b\\[0.75em]
                  \\
                  5 - 8 &= (16a + 4b + c) - (a + b + c)\\
                  -3 &= (16a - a) + (4b - b) + (c - c)\\
                  -3 &= 15a + 3b\\[0.75em]
                  \\
                  0 &= 4a + b \\
                  -1 &= 5a + b \\[0.75em]
                  \\
                  (-1) - 0 &= (5a + b) - (4a + b)\\
                  -1 &= (5a - 4a) + (b - b)\\
                  -1 &= a + 0\\
                  a &= -1\\[0.75em]
                  \\
                  0 &= 4(-1) + b\\
                  0 &= -4 + b\\
                  b &= 4\\[0.75em]
                  \\
                  8 &= (-1) + 4 + c\\
                  8 &= 3 + c\\
                  c &= 5
                \end{aligned}
              `}
            />
            <p>On complète dans la forme développée :</p>
            <BlockMath math="f(x) = ax^2 + bx + c = -x^2 + 4x + 5" />
          </li>
        </ol>
      </section>
    </div>
  );
}
