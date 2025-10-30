type ExerciseModule = { default: React.ComponentType };
const exerciseModules = import.meta.glob<ExerciseModule>(
  "../../data/chapters/chapter*/exercises/section-*.tsx"
);

console.log("Available exercises:", exerciseModules);

export async function loadExercise(chapter: number, section: number) {
  const key = Object.keys(exerciseModules).find(k =>
    k.includes(`chapter${chapter}/exercises/section-${section}.tsx`)
  );

  if (!key) return null;

  const module = await exerciseModules[key]!();
  return module.default;
}
