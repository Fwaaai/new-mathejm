import React from "react";
import { BlockMath, InlineMath} from "react-katex";
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
        <ol className="list">
          <li>
            <h3 className="text-xl font-semibold p-2"><InlineMath math="-\frac{\beta}{a} > 0" /></h3>
            <p>Prenons un exemple en forme canonique :</p>
            <BlockMath math={String.raw`f(x) = -2\left(x - \frac{5}{4}\right)^2 + \frac{49}{8}`} />
            <p>Pour trouver les racines, on résout :</p>
            <BlockMath math={String.raw`-2\left(x - \frac{5}{4}\right)^2 + \frac{49}{8} = 0 \implies \left(x - \frac{5}{4}\right)^2 = \frac{49}{16}`} />
            <p>
              Donc :
            </p>
            <BlockMath math={String.raw`x - \frac{5}{4} = \pm \frac{7}{4} \implies x_1 = \frac{5}{4} - \frac{7}{4} = -\frac{1}{2}, \quad x_2 = \frac{5}{4} + \frac{7}{4} = 3`} />
            <p>Les racines sont donc <InlineMath math="-\frac{1}{2}" /> et <InlineMath math="3" />.</p>
            <p>On peut construire ce tableau de signe :</p>
            <img src={table3} className="img" alt="Tableau de signes modèle pour deux racines" />
            <p>Et ce tableau de variation :</p>
            <img src={table4} className="img" alt="Tableau de signes complété pour deux racines" />
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2"><InlineMath math="-\frac{\beta}{a} = 0" /></h3>
            <p>Prenons un exemple en forme canonique :</p>
            <BlockMath math="f(x) = -(x - 2)^2 + 0" />
            <p>Résolvons :</p>
            <BlockMath math="-(x - 2)^2 = 0 \implies x = 2" />
            <p>Il y a donc une racine double en <InlineMath math="x=2" />.</p>
            <p>Tableau de signe :</p>
            <img src={table5} className="img" alt="Tableau de signes modèle pour une racine double" />
            <p>Tableau de variation :</p>
            <img src={table6} className="img" alt="Tableau de signes complété pour une racine double" />
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2"><InlineMath math="-\frac{\beta}{a} < 0" /></h3>
            <p>Prenons un exemple en forme canonique :</p>
            <BlockMath math={String.raw`f(x) = \left(x + \frac{1}{2}\right)^2 + \frac{3}{4}`} />
            <p>On a :</p>
            <BlockMath math={String.raw`\left(x + \frac{1}{2}\right)^2 = -\frac{3}{4}`} />
            <p>Pas de racines réelles car le carré d’un réel ne peut pas être négatif.</p>
            <p>Tableau de signe :</p>
            <img src={table7} className="img" alt="Tableau de signes modèle pour aucune racine réelle" />
            <p>Tableau de variation :</p>
            <img src={table8} className="img" alt="Tableau de signes complété pour aucune racine réelle" />
          </li>
        </ol>
      </section>
    </div>
  );
}