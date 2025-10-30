import { useState } from 'react';
import { InlineMath } from 'react-katex';

export default function Section10() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  const items = [
    { expr: 'f(x)=3(x-4)^2+0', roots: 'x=4 (double)' },
    { expr: 'f(x)=-(x-2)^2+9', roots: 'x= -1, 5' },
    { expr: 'f(x)=2(x+3)^2-5', roots: 'aucune racine réelle' },
    { expr: 'f(x)=-\\frac12(x-1)^2+\\frac{1}{2}', roots: 'x=0, 2' },
    { expr: 'f(x)=4(x-0)^2-16', roots: 'x=-2, 2' },
    { expr: 'f(x)=-2(x+1)^2', roots: 'x=-1 (double)' },
    { expr: 'f(x)=(x-5)^2-9', roots: 'x=2, 8' },
    { expr: 'f(x)=-3(x+2)^2+12', roots: 'x=-4, 0' },
    { expr: 'f(x)=\\frac14(x-8)^2+2', roots: 'aucune racine réelle' },
    { expr: 'f(x)=-2(x-\\frac32)^2+\\frac{1}{8}', roots: 'x=1, 2' },
  ];

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices</h2>
        <p className="m-4">Racines à partir de la forme canonique.</p>
        <ol className="exercise-list flex flex-col items-center">
          {items.map((it, i) => (
            <li className="exercise" key={i}>
              <h3 className="text-xl font-semibold p-2">Exercice {i + 1}</h3>
              <p>
                Trouvez les racines de <InlineMath math={it.expr} />.
              </p>
            </li>
          ))}
        </ol>

        <div className="exercise__actions">
          <button className="prim-btn px-5 py-2.5 m-7" type="button" onClick={toggleHidden}>
            {hidden ? 'Afficher' : 'Masquer'} les réponses
          </button>
        </div>

        <div className="answers" hidden={hidden}>
          <ol className="answer-list">
            {items.map((it, i) => (
              <li className="answer" key={i}>
                <details className="answer__details">
                  <summary>Exercice {i + 1}</summary>
                  <div className="answer__content">
                    <p>
                      Méthode: résoudre <InlineMath math={it.expr.replace('f(x)=','')} /> = <InlineMath math="0" /> revient à
                      écrire <InlineMath math="a(x-\alpha)^2+\beta=0" /> donc <InlineMath math="(x-\alpha)^2=-\tfrac{\beta}{a}" />.
                      Il y a des racines réelles si et seulement si <InlineMath math="-\tfrac{\beta}{a}\ge0" />.
                    </p>
                    <p>
                      Réponse: <InlineMath math={it.roots} />.
                    </p>
                  </div>
                </details>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
