import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";  
import graph2 from '/src/assets/img/graphs/graph2.png';

export default function Section4 (): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>
        <p>On peut résoudre une équation du second degré de deux façons complémentaires :</p>
        <ul className="list">
          <li>graphiquement, en repérant les points où la courbe coupe l’axe des abscisses ;</li>
          <li>par le calcul, à l’aide du discriminant <InlineMath math="\Delta" /> ou de certaines astuces selon les cas.</li>
        </ul>

        <h3 className="text-xl font-semibold p-2">Résolution graphique</h3>
        <p>On peut identifier les racines d’une fonction en observant où la parabole coupe l’axe des abscisses (<InlineMath math="y=0" />). Ces points sont les solutions de l’équation <InlineMath math="f(x) = 0" />.</p>
        <p>Par exemple, pour la fonction :</p>
        <img src={graph2} className="img" alt="Graphique montrant les racines d'une parabole en x=-3 et x=2" />
        <p>Le graphique montre que la courbe coupe l’axe des abscisses en <InlineMath math="x = -3" /> et <InlineMath math="x = 2" />. On en déduit les racines :</p>
        <BlockMath math="x_1 = -3,\quad x_2 = 2" />

        <h3 className="text-xl font-semibold p-2">Résolution par le calcul</h3>
        <p>On peut résoudre <InlineMath math="f(x) = 0" /> en appliquant différentes méthodes selon la forme de l’expression :</p>

        <ol className="list list-a" type="a">
          <li>
            <h4 className="text-lg p-1 font-semibold">Cas régulier (discriminant)</h4>
            <p>Soit : <InlineMath math="f(x) = -x^2 + 4x + 5" /></p>
            <p>On calcule le discriminant :</p>
            <BlockMath math="\Delta = 4^2 - 4(-1)(5) = 16 + 20 = 36" />
            <p>Les racines sont données par :</p>
            <BlockMath math="x_1 = \frac{-4 + \sqrt{36}}{2(-1)} = -1,\quad x_2 = \frac{-4 - \sqrt{36}}{2(-1)} = 5" />
          </li>

          <li>
            <h4 className="text-lg p-1 font-semibold">Cas particulier : <InlineMath math="\Delta = 0" /></h4>
            <p>Soit : <InlineMath math="f(x) = x^2 - 2x + 1" /></p>
            <p>On calcule le discriminant :</p>
            <BlockMath math="\Delta = (-2)^2 - 4(1)(1) = 4 - 4 = 0" />
            <p>La racine double est :</p>
            <BlockMath math="x = \frac{-(-2)}{2(1)} = 1" />
          </li>

          <li>
            <h4 className="text-lg p-1 font-semibold">Cas particulier : <InlineMath math="a + b + c = 0" /></h4>
            <p>Soit : <InlineMath math="f(x) = 2x^2 - 3x + 1" /></p>
            <p>On remarque que :</p>
            <BlockMath math="a + b + c = 2 - 3 + 1 = 0" />
            <p>On peut donc directement conclure :</p>
            <BlockMath math="x_1 = 1,\quad x_2 = \frac{c}{a} = \frac{1}{2}" />
          </li>

          <li>
            <h4 className="text-lg p-1 font-semibold">Cas particulier : <InlineMath math="a - b + c = 0" /></h4>
            <p>Soit : <InlineMath math="f(x) = 2x^2 + 3x + 1" /></p>
            <p>On vérifie :</p>
            <BlockMath math="a - b + c = 2 - 3 + 1 = 0" />
            <p>On peut donc écrire :</p>
            <BlockMath math="x_1 = -1,\quad x_2 = -\frac{c}{a} = -\frac{1}{2}" />
          </li>
        </ol>
      </section>
    </div>
  );
}