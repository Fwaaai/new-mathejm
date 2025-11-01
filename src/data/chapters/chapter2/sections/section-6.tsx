import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import cal1 from "../../../../assets/img/calculator/cal1.png";
import cal2 from "../../../../assets/img/calculator/cal2.png";
import cal3 from "../../../../assets/img/calculator/cal3.png";
import cal4 from "../../../../assets/img/calculator/cal4.png";
import cal5 from "../../../../assets/img/calculator/cal5.png";
import cal6 from "../../../../assets/img/calculator/cal6.png";
import cal7 from "../../../../assets/img/calculator/cal7.png";


export default function Section6(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>
        On prend la calculatrice TI-83 comme exemple.
        <img src={cal1} className="img" alt="graphique" />
        Appuyer sur la touche annotée 1, puis sur la touche annotée 2.
        <img src={cal2} className="img" alt="graphique" />
        Appuyer sur la touche annotée 1, puis sur la touche annotée 2.
        <img src={cal3} className="img" alt="graphique" />
        Remplir avec ce format: 
        <BlockMath math="\frac{d}{dx}(f(x))|_{x=a}" />
        Où:
        <br />
        <InlineMath math = "f(x)" /> est la fonction pour laquelle calculer.
        <br />
        <InlineMath math = "a" /> est le point pour lequel il faut trouver la valeur dérivée.
        <br />
        <InlineMath math = "x" /> est la variable.
        
        <details>
          <summary>NumWorks</summary>
          Pour les calculatrices NumWorks, suivre les instructions ci-dessous.
          <img src={cal4} className="img" alt="graphique" />
          Appuyer sur la touche annotée 1.
          <img src={cal5} className="img" alt="graphique" />
          Appuyer sur la touche annotée 1.
          <img src={cal6} className="img" alt="graphique" />
          Descendre jusqu’à "Analyses", puis cliquer sur la touche annotée 2.
          <img src={cal7} className="img" alt="graphique" />
          Remplir de même que pour la calculatrice TI-83.
        </details>
      </section>
    </div>
  );
}

