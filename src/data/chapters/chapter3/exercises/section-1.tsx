import { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';

export default function Section1Exercises() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(h => !h);

  return (
    <div className="surfaces">
      <section className="section flex flex-col items-center m-7">
        <h2 className="text-2xl font-bold m-7">Série d’exercices — Probabilité conditionnelle</h2>
        <p className="m-4">
          Ces exercices portent uniquement sur la définition et les méthodes de calcul de
          la probabilité conditionnelle vues dans la section : définition
          <InlineMath math={String.raw`\,P(A\mid B) = \dfrac{P(A\cap B)}{P(B)}`} />, lecture sur tableau/diagramme/arbre,
          et règle du produit <InlineMath math={String.raw`P(A\cap B) = P(B)\,P(A\mid B)`} />.
        </p>

        <ol className="exercise-list flex flex-col items-center">
          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 1</h3>
            <p>
              Dans un lycée, <InlineMath math={String.raw`P(S)=0{,}55`} /> (sport),
              <InlineMath math={String.raw`P(I)=0{,}35`} /> (instrument) et
              <InlineMath math={String.raw`P(S\cap I)=0{,}20`} />. Calculez
              <InlineMath math={String.raw`P(S\mid I)`} /> et
              <InlineMath math={String.raw`P(I\mid S)`} />
            </p>
            {/* TODO: Ajouter un petit diagramme de Venn (rectange/univers avec deux disques S et I) 
                avec les parts numérotées : S uniquement = 0,35 ; I uniquement = 0,15 ; S∩I = 0,20 ; 
                extérieur = 0,30. Légende claire des régions. */}
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 2</h3>
            <p>
              On interroge 200 élèves sur deux habitudes : prendre le bus (B) et manger à la cantine (C).
              Les effectifs observés sont :
            </p>
            {/* TODO: Insérer un tableau à double entrée (2×2 + totaux) avec :
                  Lignes = B, non B ; Colonnes = C, non C ;
                  B∩C = 68, B∩non C = 52, non B∩C = 40, non B∩non C = 40 ; totaux de ligne/colonne et total 200. */}
            <p>
              Calculez <InlineMath math={String.raw`P(C\mid B)`} />,
              <InlineMath math={String.raw`P(B\mid C)`} /> et
              <InlineMath math={String.raw`P(B\cap C)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 3</h3>
            <p>
              On sait que <InlineMath math={String.raw`P(A\text{ seul})=0{,}22`} />,
              <InlineMath math={String.raw`P(B\text{ seul})=0{,}31`} /> et
              <InlineMath math={String.raw`P(A\cap B)=0{,}17`} />.
              Déduisez <InlineMath math={String.raw`P(A\mid B)`} />et
              <InlineMath math={String.raw`P(B\mid A)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 4</h3>
            <p>
              Une usine possède deux lignes : <InlineMath math={String.raw`F_1`} /> et <InlineMath math={String.raw`F_2`} />.
              <InlineMath math={String.raw`P(F_1)=0{,}6`} />, <InlineMath math={String.raw`P(F_2)=0{,}4`} />.
              La probabilité de défaut est <InlineMath math={String.raw`P(D\mid F_1)=0{,}03`} /> et
              <InlineMath math={String.raw`P(D\mid F_2)=0{,}08`} />.
              Calculez <InlineMath math={String.raw`P(D)`} /> puis
              <InlineMath math={String.raw`P(F_2\mid D)`} />.
            </p>
            {/* TODO: Insérer un arbre pondéré à deux niveaux : racines F1 (0,6) / F2 (0,4),
                puis issues D / non D sur chaque branche avec 0,03 / 0,97 pour F1 et 0,08 / 0,92 pour F2. */}
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 5</h3>
            <p>
              On donne <InlineMath math={String.raw`P(A)=0{,}40`} />,
              <InlineMath math={String.raw`P(B)=0{,}50`} /> et
              <InlineMath math={String.raw`P(A\cap B)=0{,}18`} />.
              Les événements A et B sont-ils indépendants ? Justifiez à l’aide de
              <InlineMath math={String.raw`P(A\mid B)`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 6</h3>
            <p>
              On considère un événement <InlineMath math={String.raw`B`} /> de probabilité nulle :
              <InlineMath math={String.raw`P(B)=0`} /> et <InlineMath math={String.raw`P(A\cap B)=0`} />.
              Expliquez pourquoi <InlineMath math={String.raw`P(A\mid B)`} /> n’est pas définie et
              comment interpréter la restriction de l’univers quand <InlineMath math={String.raw`P(B)=0`} />.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 7</h3>
            <p>
              On a <InlineMath math={String.raw`P(A)=0{,}40`} />,
              <InlineMath math={String.raw`P(B)=0{,}20`} /> et
              <InlineMath math={String.raw`P(A\cap B)=0{,}10`} />.
              Comparez <InlineMath math={String.raw`P(A\mid B)`} /> et
              <InlineMath math={String.raw`P(B\mid A)`} /> et commentez la différence d’interprétation.
            </p>
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 8</h3>
            <p>
              Enquête sur 120 personnes : V = « végétarien », T = « boit du thé ». Effectifs :
              <InlineMath math={String.raw`n(V\cap T)=36`} />,
              <InlineMath math={String.raw`n(V\cap \overline{T})=24`} />,
              <InlineMath math={String.raw`n(\overline{V}\cap T)=30`} />,
              <InlineMath math={String.raw`n(\overline{V}\cap \overline{T})=30`} />.
              Calculez <InlineMath math={String.raw`P(V\mid T)`} />,
              <InlineMath math={String.raw`P(\overline{V}\mid T)`} /> et
              <InlineMath math={String.raw`P(T\mid \overline{V})`} />.
            </p>
            {/* TODO: Placer un tableau 2×2 avec les effectifs ci-dessus et une ligne/colonne de totaux (total 120). */}
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 9</h3>
            <p>
              Urne : 5 rouges (R) et 4 bleues (B). Deux tirages successifs sans remise.
              Soit <InlineMath math={String.raw`A:`} /> « première boule rouge » et
              <InlineMath math={String.raw`C:`} /> « seconde boule bleue ».
              Calculez <InlineMath math={String.raw`P(C\mid A)`} /> et
              <InlineMath math={String.raw`P(A\mid C)`} />.
            </p>
            {/* TODO: Schématiser un arbre : départ 5R/4B, puis branches du 2e tirage sans remise sur chaque issue. */}
          </li>

          <li className="exercise">
            <h3 className="text-xl font-semibold p-2">Exercice 10</h3>
            <p>
              On sait <InlineMath math={String.raw`P(B)=0{,}48`} /> et
              <InlineMath math={String.raw`P(A\mid B)=0{,}35`} />. Calculez
              <InlineMath math={String.raw`P(A\cap B)`} /> puis, si
              <InlineMath math={String.raw`P(A)=0{,}30`} />, calculez
              <InlineMath math={String.raw`P(B\mid A)`} />.
            </p>
          </li>
        </ol>

        <div className="exercise__actions">
          <button className="prim-btn px-5 py-2.5 m-7" type="button" onClick={toggleHidden}>
            {hidden ? "Afficher" : "Masquer"} les réponses
          </button>
        </div>

        <div className="answers" hidden={hidden}>
          <p>
            Corrigés détaillés basés sur la définition <InlineMath math={String.raw`P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}`}/> et
            la règle du produit <InlineMath math={String.raw`P(A\cap B)=P(B)\,P(A\mid B)`} />.
          </p>
          <ol className="answer-list">
            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 1</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(S\mid I)=\frac{0{,}20}{0{,}35}=\frac{20}{35}=\frac{4}{7}\approx 0{,}5714`} />
                  <BlockMath math={String.raw`\displaystyle P(I\mid S)=\frac{0{,}20}{0{,}55}=\frac{20}{55}=\frac{4}{11}\approx 0{,}3636`} />
                  <p>
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 2</summary>
                <div className="answer__content">
                  <p>Total 200, donc</p>
                  <BlockMath math={String.raw`\displaystyle P(B)=\tfrac{68+52}{200}=\tfrac{120}{200}=0{,}6,\; P(C)=\tfrac{68+40}{200}=\tfrac{108}{200}=0{,}54`} />
                  <BlockMath math={String.raw`\displaystyle P(B\cap C)=\tfrac{68}{200}=0{,}34`} />
                  <BlockMath math={String.raw`\displaystyle P(C\mid B)=\frac{P(B\cap C)}{P(B)}=\frac{0{,}34}{0{,}6}=\frac{17}{30}\approx 0{,}5667`} />
                  <BlockMath math={String.raw`\displaystyle P(B\mid C)=\frac{0{,}34}{0{,}54}=\frac{50}{79}\approx 0{,}6329`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 3</summary>
                <div className="answer__content">
                  <p>
                    On a <InlineMath math={String.raw`P(B)=0{,}31+0{,}17=0{,}48`} /> et
                    <InlineMath math={String.raw`P(A)=0{,}22+0{,}17=0{,}39`} />.
                  </p>
                  <BlockMath math={String.raw`\displaystyle P(A\mid B)=\frac{0{,}17}{0{,}48}=\frac{17}{48}\approx 0{,}3542`} />
                  <BlockMath math={String.raw`\displaystyle P(B\mid A)=\frac{0{,}17}{0{,}39}=\frac{17}{39}\approx 0{,}4359`} />
                  <BlockMath math={String.raw`\displaystyle P(A^c\mid B)=1-P(A\mid B)=1-\tfrac{17}{48}=\tfrac{31}{48} \approx 0{,}6458`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 4</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(D)=P(F_1)P(D\mid F_1)+P(F_2)P(D\mid F_2)=0{,}6\times0{,}03+0{,}4\times0{,}08=0{,}050`} />
                  <BlockMath math={String.raw`\displaystyle P(F_2\mid D)=\frac{P(F_2\cap D)}{P(D)}=\frac{0{,}4\times0{,}08}{0{,}050}=\frac{0{,}032}{0{,}050}=0{,}64`} />
                  <p>
                    Interprétation : un défaut provient dans 64% des cas de la ligne <InlineMath math={String.raw`F_2`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 5</summary>
                <div className="answer__content">
                  <p>
                    Si A et B étaient indépendants, on aurait
                    <InlineMath math={String.raw`\,P(A\mid B)=P(A)=0{,}40`} />. Or
                    <InlineMath math={String.raw`\,P(A\mid B)=\dfrac{0{,}18}{0{,}50}=0{,}36\neq 0{,}40`} />.
                    Donc A et B ne sont pas indépendants.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 6</summary>
                <div className="answer__content">
                  <p>
                    La définition exige <InlineMath math={String.raw`P(B)>0`} />.
                    Si <InlineMath math={String.raw`P(B)=0`} />, la restriction de l’univers à B est vide et
                    <InlineMath math={String.raw`P(A\mid B)`} /> n’a pas de sens.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 7</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A\mid B)=\frac{0{,}10}{0{,}20}=0{,}50`} />
                  <BlockMath math={String.raw`\displaystyle P(B\mid A)=\frac{0{,}10}{0{,}40}=0{,}25`} />
                  <p>
                    Les deux probabilités conditionnelles diffèrent : elles conditionnent des univers distincts
                    (B pour la première, A pour la seconde).
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 8</summary>
                <div className="answer__content">
                  <p>
                    Avec total 120, on a <InlineMath math={String.raw`P(T)=\tfrac{36+30}{120}=\tfrac{66}{120}=0{,}55`} /> et
                    <InlineMath math={String.raw`P(\overline{V})=\tfrac{30+30}{120}=\tfrac{60}{120}=0{,}50`} />.
                  </p>
                  <BlockMath math={String.raw`\displaystyle P(V\mid T)=\frac{36/120}{66/120}=\frac{36}{66}=\frac{6}{11}\approx 0{,}5455`} />
                  <BlockMath math={String.raw`\displaystyle P(\overline{V}\mid T)=1-P(V\mid T)=1-\tfrac{6}{11}=\tfrac{5}{11}\approx 0{,}4545`} />
                  <BlockMath math={String.raw`\displaystyle P(T\mid \overline{V})=\frac{30/120}{60/120}=\frac{30}{60}=0{,}5`} />
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 9</summary>
                <div className="answer__content">
                  <p>
                    <InlineMath math={String.raw`P(C \mid A) = \frac{4}{8} = \frac{1}{2}`} /> <br />
                    <InlineMath
                      math={String.raw`P(A \mid C) = \frac{P(A \cap C)}{P(C)} = 
                      \frac{\frac{5}{9}\times\frac{4}{8}}{\frac{5}{9}\times\frac{4}{8}+\frac{4}{9}\times\frac{5}{8}}
                      = \frac{1}{2}`}
                    /> <br />
                    Donc, <InlineMath math={String.raw`P(C \mid A) = P(A \mid C) = \frac{1}{2}`} />.
                  </p>
                </div>
              </details>
            </li>

            <li className="answer">
              <details className="answer__details">
                <summary>Exercice 10</summary>
                <div className="answer__content">
                  <BlockMath math={String.raw`\displaystyle P(A\cap B)=P(B)\,P(A\mid B)=0{,}48\times0{,}35=0{,}168`} />
                  <BlockMath math={String.raw`\displaystyle P(B\mid A)=\frac{P(A\cap B)}{P(A)}=\frac{0{,}168}{0{,}30}=0{,}56`} />
                </div>
              </details>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

