import { useState } from 'react';
import { InlineMath } from 'react-katex';

export default function Section12() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  const items = [
    { expr: '-2(x-\\frac{5}{4})^2 + \\frac{49}{8}', ans: 'x=-\\frac12, 3' },
    { expr: '-(x-2)^2+0', ans: 'x=2 (double)' },
    { expr: '(x+\\frac12)^2+\\frac34', ans: 'aucune racine' },
    { expr: '3(x-1)^2-12', ans: 'x=-1, 3' },
    { expr: '-\\frac12(x+2)^2+\\frac12', ans: 'x=-3, -1' },
    { expr: '4(x-0)^2+9', ans: 'aucune racine' },
    { expr: '-(x-5)^2+1', ans: 'x=4, 6' },
    { expr: '2(x+3)^2', ans: 'x=-3 (double)' },
    { expr: '-\\frac14(x-8)^2+4', ans: 'x=0, 16' },
    { expr: '5(x-\\frac32)^2-\\frac{5}{4}', ans: 'x=1, 2' },
  ];

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices</h2>
        <p className="m-4">Racines et signe via <InlineMath math="-\beta/a" />.</p>
        <ol className="exercise-list flex flex-col items-center">
          {items.map((it, i) => (
            <li className="exercise" key={i}>
              <h3 className="text-xl font-semibold p-2">Exercice {i + 1}</h3>
              <p>
                Donnez les racines réelles (le cas échéant) de{' '}
                <InlineMath math={`f(x) = ${it.expr}`} />.
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
          <p>
            Méthode: résoudre <InlineMath math="a(x-\alpha)^2+\beta=0" /> revient à 
            <InlineMath math="(x-\alpha)^2=-\tfrac{\beta}{a}" />. Il y a deux racines si <InlineMath math="-\tfrac{\beta}{a}>0" />;
            une racine double si <InlineMath math="\beta=0" />; aucune racine réelle si <InlineMath math="-\tfrac{\beta}{a}<0" />.
          </p>
          <ol className="answer-list">
            {items.map((it, i) => (
              <li className="answer" key={i}>
                <details className="answer__details">
                  <summary>Exercice {i + 1}</summary>
                  <div className="answer__content">
                    <p><InlineMath math={it.ans} /></p>
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
