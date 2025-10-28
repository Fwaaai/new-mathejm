import React from 'react';
import { Route } from 'react-router-dom';
import { SectionLoader, ExerciseLoader } from './loaders';

type LazyComponent = React.LazyExoticComponent<React.ComponentType>;
type ComponentMap = Record<string, LazyComponent>;

// Lazy load section components
const Section01 = React.lazy(() => import('./sections/section-01'));
const Section02 = React.lazy(() => import('./sections/section-02'));
const Section03 = React.lazy(() => import('./sections/section-03'));
const Section04 = React.lazy(() => import('./sections/section-04'));
const Section05 = React.lazy(() => import('./sections/section-05'));
const Section06 = React.lazy(() => import('./sections/section-06'));
const Section07 = React.lazy(() => import('./sections/section-07'));
const Section08 = React.lazy(() => import('./sections/section-08'));
const Section09 = React.lazy(() => import('./sections/section-09'));
const Section10 = React.lazy(() => import('./sections/section-10'));
const Section11 = React.lazy(() => import('./sections/section-11'));
const Section12 = React.lazy(() => import('./sections/section-12'));
const Section13 = React.lazy(() => import('./sections/section-13'));
const Section14 = React.lazy(() => import('./sections/section-14'));
const Section15 = React.lazy(() => import('./sections/section-15'));
const Section16 = React.lazy(() => import('./sections/section-16'));
const Section17 = React.lazy(() => import('./sections/section-17'));
const Section18 = React.lazy(() => import('./sections/section-18'));

// Lazy load exercise components
const Exercise01 = React.lazy(() => import('./exercices/exercice-01'));
const Exercise02 = React.lazy(() => import('./exercices/exercice-02'));
const Exercise03 = React.lazy(() => import('./exercices/exercice-03'));
const Exercise04 = React.lazy(() => import('./exercices/exercice-04'));
const Exercise05 = React.lazy(() => import('./exercices/exercice-05'));
const Exercise06 = React.lazy(() => import('./exercices/exercice-06'));
const Exercise07 = React.lazy(() => import('./exercices/exercice-07'));
const Exercise08 = React.lazy(() => import('./exercices/exercice-08'));
const Exercise09 = React.lazy(() => import('./exercices/exercice-09'));
const Exercise10 = React.lazy(() => import('./exercices/exercice-10'));
const Exercise11 = React.lazy(() => import('./exercices/exercice-11'));
const Exercise12 = React.lazy(() => import('./exercices/exercice-12'));
const Exercise13 = React.lazy(() => import('./exercices/exercice-13'));
const Exercise14 = React.lazy(() => import('./exercices/exercice-14'));
const Exercise15 = React.lazy(() => import('./exercices/exercice-15'));
const Exercise16 = React.lazy(() => import('./exercices/exercice-16'));
const Exercise17 = React.lazy(() => import('./exercices/exercice-17'));
const Exercise18 = React.lazy(() => import('./exercices/exercice-18'));

// Map of section IDs to their components
export const sectionComponents: ComponentMap = {
  'section-01': Section01,
  'section-02': Section02,
  'section-03': Section03,
  'section-04': Section04,
  'section-05': Section05,
  'section-06': Section06,
  'section-07': Section07,
  'section-08': Section08,
  'section-09': Section09,
  'section-10': Section10,
  'section-11': Section11,
  'section-12': Section12,
  'section-13': Section13,
  'section-14': Section14,
  'section-15': Section15,
  'section-16': Section16,
  'section-17': Section17,
  'section-18': Section18
};

export const exerciseComponents: ComponentMap = {
  'exercice-01': Exercise01,
  'exercice-02': Exercise02,
  'exercice-03': Exercise03,
  'exercice-04': Exercise04,
  'exercice-05': Exercise05,
  'exercice-06': Exercise06,
  'exercice-07': Exercise07,
  'exercice-08': Exercise08,
  'exercice-09': Exercise09,
  'exercice-10': Exercise10,
  'exercice-11': Exercise11,
  'exercice-12': Exercise12,
  'exercice-13': Exercise13,
  'exercice-14': Exercise14,
  'exercice-15': Exercise15,
  'exercice-16': Exercise16,
  'exercice-17': Exercise17,
  'exercice-18': Exercise18
};

export const chapitre1Routes = (
  <>
    <Route path="sections/:sectionId" element={<SectionLoader />} />
    <Route path="exercices/:sectionId" element={<ExerciseLoader />} />
  </>
);