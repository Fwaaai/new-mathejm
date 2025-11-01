import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Section11(): React.JSX.Element {
  return (
    <div className="surfaces">
      <section className="section">
        <h2 className="text-2xl font-bold">Méthodes et exemples</h2>

        <ol className="list list-1" type="1">
          <li>
            <h3 className="text-xl font-semibold p-2">Principe</h3>
            <p>
              Au voisinage de <InlineMath math="x=a" />, on approche
              <InlineMath math="f(x)" /> par son approximation affine (ou
              linéarisation) :
            </p>
            <BlockMath math={String.raw`\displaystyle f(x) \approx f(a) + f'(a)\,(x-a)`} />
            <p>
              En posant <InlineMath math="x=a+h" />, on obtient
              <InlineMath math="\,f(a+h) \approx f(a) + f'(a)\,h" />. Cette idée
              provient du fait que le taux d’accroissement
              <InlineMath math={String.raw`\dfrac{f(a+h)-f(a)}{h}`} /> tend vers
              <InlineMath math="f'(a)" /> lorsque <InlineMath math="h\to 0" />.
            </p>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Procédure type</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>
                  Choisir un point d’appui <InlineMath math="a" /> où la fonction
                  est simple à évaluer, et calculer <InlineMath math="f(a)" /> et
                  <InlineMath math="f'(a)" />.
                </p>
              </li>
              <li>
                <p>
                  Écrire <InlineMath math="L_a(x)=f(a)+f'(a)(x-a)" /> et évaluer
                  <InlineMath math="L_a(x)" /> au(x) point(s) voulu(s).
                </p>
              </li>
              <li>
                <p>
                  Vérifier la validité en comparant <InlineMath math="L_a(x)" /> à
                  <InlineMath math="f(x)" /> à la calculatrice.
                </p>
              </li>
            </ol>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Exemple — <InlineMath math="\sqrt{x}" /> près de 4</h3>
            <p>
              Soit <InlineMath math="f(x)=\sqrt{x}" /> et <InlineMath math="a=4" />.
              On a <InlineMath math={String.raw`f(4)=2`} /> et
              <InlineMath math={String.raw`f'(x)=\dfrac{1}{2\sqrt{x}}`} /> donc
              <InlineMath math={String.raw`f'(4)=\dfrac{1}{4}`} />.
            </p>
            <p>
              L’approximation affine vaut
              <InlineMath math={String.raw`\;L_4(x)=2+\tfrac{1}{4}(x-4)`} />. Par
              exemple, pour <InlineMath math="x=4{,}1" /> :
            </p>
            <BlockMath
              math={String.raw`\displaystyle L_4(4{,}1)=2+\tfrac{1}{4}\times 0{,}1=2{,}025`}
            />
            <p>
              Valeur exacte : <InlineMath math={String.raw`\sqrt{4{,}1}\approx 2{,}0249`}/>;
              l’erreur est très faible.
            </p>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Contrôle à la calculatrice</h3>
            {/* TODO: Ajouter captures (images) : table de valeurs et différence f-L_a */}
            <ol className="list list-a" type="a">
              <li>
                <p>
                  Remplir une table de <InlineMath math="x" />, de
                  <InlineMath math="f(x)" /> et de
                  <InlineMath math="L_a(x)" />; comparer les colonnes.
                </p>
              </li>
              <li>
                <p>
                  Regarder l’erreur absolue
                  <InlineMath math={String.raw`\,|f(x)-L_a(x)|`} /> ou relative
                  <InlineMath math={String.raw`\,\dfrac{|f(x)-L_a(x)|}{|f(x)|}`}/>
                  pour juger la qualité de l’approximation.
                </p>
              </li>
              <li>
                <p>
                  Plus <InlineMath math="x" /> est proche de <InlineMath math="a" />
                  (petit <InlineMath math="|x-a|" />), meilleure est
                  l’approximation.
                </p>
              </li>
            </ol>
          </li>

          <li>
            <h3 className="text-xl font-semibold p-2">Remarques</h3>
            <ol className="list list-a" type="a">
              <li>
                <p>
                  L’approximation affine est la tangente :
                  <InlineMath math="y=L_a(x)" />. Elle est d’autant plus fiable que
                  <InlineMath math="x" /> est proche de <InlineMath math="a" />.
                </p>
              </li>
            </ol>
          </li>
        </ol>
      </section>
    </div>
  );
}

