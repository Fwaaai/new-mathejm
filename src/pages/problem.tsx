import React from 'react';

export default function ProblemPage() {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const subject = '[Maths EJM] Problème';
  const body = `Page: ${currentUrl}\n\nDécrivez le problème rencontré :\n- Étapes pour reproduire :\n- Résultat attendu :\n- Résultat observé :\n- Captures d’écran (si possible) :`;

  const mailto = `mailto:y.kikuchi27@ejm.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const githubIssuesUrl = (import.meta as any).env?.VITE_GITHUB_ISSUES_URL as string | undefined;

  return (
    <main className="container mx-auto max-w-3xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold">Signaler un problème</h1>
        <p className="mt-3 text-muted-foreground">
          Une faute, un bug, des questions ou un lien cassé ? Merci de nous aider à améliorer le site.
        </p>
      </header>

      <section className="surfaces p-6 rounded-lg">
        <h2 className="text-xl font-medium">Vos options</h2>
        <p className="mt-2">
          Vous pouvez soit ouvrir un ticket sur GitHub, soit nous écrire directement par email.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={githubIssuesUrl ?? mailto}
            target={githubIssuesUrl ? '_blank' : undefined}
            rel={githubIssuesUrl ? 'noopener noreferrer' : undefined}
            className="prim-btn px-4 py-2 inline-flex items-center justify-center"
          >
            {githubIssuesUrl ? 'Ouvrir un ticket GitHub' : 'Contacter par email'}
          </a>

          <a href={mailto} className="scnd-btn px-4 py-2 inline-flex items-center justify-center">
            Envoyer un email à y.kikuchi27@ejm.org
          </a>
        </div>

        <div className="mt-6 text-sm text-muted-foreground">
          <p className="font-medium">Pour nous aider à traiter rapidement :</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>L’URL de la page concernée</li>
            <li>Les étapes pour reproduire le problème</li>
            <li>Le résultat attendu et le résultat observé</li>
            <li>Captures d’écran ou messages d’erreur</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
