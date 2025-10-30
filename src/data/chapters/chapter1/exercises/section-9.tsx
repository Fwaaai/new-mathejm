import React, { useState } from 'react';
import { InlineMath } from 'react-katex';

export default function Section9() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  const items = [
    { expr: 'f(x)=-(x-2)^2+9', axis: 'x=2' },
    { expr: 'f(x)=2(x+3)^2-5', axis: 'x=-3' },
    { expr: 'f(x)=\\frac12(x-1)^2+4', axis: 'x=1' },
    { expr: 'f(x)=3(x-\\frac12)^2-\\frac{7}{4}', axis: 'x=1/2' },
    { expr: 'f(x)=-4(x+2)^2+1', axis: 'x=-2' },
    { expr: 'f(x)=(x-5)^2-9', axis: 'x=5' },
    { expr: 'f(x)=-\\frac32(x+1)^2+6', axis: 'x=-1' },
    { expr: 'f(x)=\\frac14(x-8)^2+2', axis: 'x=8' },
    { expr: 'f(x)=-2(x+\\frac32)^2+\\frac12', axis: 'x=-3/2' },
    { expr: 'f(x)=5(x-0)^2-3', axis: 'x=0' },
  ];

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices</h2>
        <p className="m-4">Axe de symétrie depuis la forme canonique.</p>
        <ol className="exercise-list flex flex-col items-center">
          {items.map((it, i) => (
            <li className="exercise" key={i}>
              <h3 className="text-xl font-semibold p-2">Exercice {i + 1}</h3>
              <p>
                Donnez l’axe de symétrie de <InlineMath math={it.expr} />.
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
                      Axe <InlineMath math={it.axis} />.
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

