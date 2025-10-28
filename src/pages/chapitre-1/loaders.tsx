import React from 'react';
import type { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound';
import { sectionComponents, exerciseComponents } from './routes';

export function SectionLoader(): ReactElement {
  const { sectionId } = useParams();
  const Component = sectionComponents[sectionId ?? ''];
  
  if (!Component) {
    return <NotFound />;
  }

  return (
    <React.Suspense fallback={<div>Chargement...</div>}>
      <Component />
    </React.Suspense>
  );
}

export function ExerciseLoader(): ReactElement {
  const { sectionId } = useParams();
  const Component = exerciseComponents[sectionId ?? ''];
  
  if (!Component) {
    return <NotFound />;
  }

  return (
    <React.Suspense fallback={<div>Chargement...</div>}>
      <Component />
    </React.Suspense>
  );
}