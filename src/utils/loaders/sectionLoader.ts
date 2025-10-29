type SectionModule = { default: React.ComponentType };
const sectionModules = import.meta.glob<SectionModule>(
  "../../data/chapters/chapter*/sections/section-*.tsx"
);

console.log("Available sections:", sectionModules);

export async function loadSection(chapter: number, section: number) {
  const key = Object.keys(sectionModules).find(k =>
    k.includes(`chapter${chapter}/sections/section-${section}.tsx`)
  );
  
  if (!key) return null;
  const module = await sectionModules[key]!();
  return module.default;
}