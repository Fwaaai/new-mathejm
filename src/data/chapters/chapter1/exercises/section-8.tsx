import React, { useState } from 'react';
import { InlineMath } from 'react-katex';

export default function Section8() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices</h2>
        <p className="m-4">Sommet directement depuis la forme canonique.</p>
        <ol className="exercise-list flex flex-col items-center">
          {[
            'f(x)=-(x-2)^2+9',
            'f(x)=2(x+3)^2-5',
            'f(x)=\tfrac12(x-1)^2+4',
            'f(x)=3(x-\tfrac12)^2-\tfrac{7}{4}',
            'f(x)=-4(x+2)^2+1',
            'f(x)=(x-5)^2-9',
            'f(x)=-\tfrac32(x+1)^2+6',
            'f(x)=\tfrac14(x-8)^2+2',
            'f(x)=-2(x+\tfrac32)^2+\tfrac12',
            'f(x)=5(x-0)^2-3',
          ].map((expr, i) => (
            <li className="exercise" key={i}>
              <h3 className="text-xl font-semibold p-2">Exercice {i + 1}</h3>
              <p>
                Donnez <InlineMath math={'S(\\alpha,\\beta)'} /> pour{' '}
                <InlineMath math={expr} />.
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
            {[
              'S(2,9)',
              'S(-3,-5)',
              'S(1/1,4)'.replace('1/1','1'),
              'S(1/2,-7/4)',
              'S(-2,1)',
              'S(5,-9)',
              'S(-1,6)',
              'S(8,2)',
              'S(-3/2,1/2)',
              'S(0,-3)',
            ].map((ans, i) => (
              <li className="answer" key={i}>
                <details className="answer__details">
                  <summary>Exercice {i + 1}</summary>
                  <div className="answer__content">
                    <p>
                      <InlineMath math={ans} />
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

