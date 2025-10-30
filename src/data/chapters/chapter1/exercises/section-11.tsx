import React, { useState } from 'react';
import { InlineMath } from 'react-katex';

export default function Section11() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  const items = [
    { expr: 'f(x)=-(x-2)^2+9', nature: 'max en x=2, valeur 9' },
    { expr: 'f(x)=(x+2)^2+1', nature: 'min en x=-2, valeur 1' },
    { expr: 'f(x)=-3(x-1)^2+4', nature: 'max en x=1, valeur 4' },
    { expr: 'f(x)=2(x-3)^2-5', nature: 'min en x=3, valeur -5' },
    { expr: 'f(x)=-\\frac12(x+1)^2+2', nature: 'max en x=-1, valeur 2' },
    { expr: 'f(x)=5(x-0)^2-3', nature: 'min en x=0, valeur -3' },
    { expr: 'f(x)=-4(x+4)^2+1', nature: 'max en x=-4, valeur 1' },
    { expr: 'f(x)=\\frac14(x-8)^2+2', nature: 'min en x=8, valeur 2' },
    { expr: 'f(x)=-2(x-\\frac32)^2+\\frac12', nature: 'max en x=3/2, valeur 1/2' },
    { expr: 'f(x)=3(x+\\frac12)^2-\\frac14', nature: 'min en x=-1/2, valeur -1/4' },
  ];

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices</h2>
        <p className="m-4">Variations et extremum depuis la forme canonique.</p>
        <ol className="exercise-list flex flex-col items-center">
          {items.map((it, i) => (
            <li className="exercise" key={i}>
              <h3 className="text-xl font-semibold p-2">Exercice {i + 1}</h3>
              <p>
                Décrivez les variations de <InlineMath math={it.expr} /> et
                précisez la nature et la valeur de l’extremum.
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
                    <p><InlineMath math={it.nature} />; si <InlineMath math="a>0" />: décroît puis croît; si <InlineMath math="a<0" />: croît puis décroît.</p>
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

