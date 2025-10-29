type SectionModule = { default: React.ComponentType };
const sectionModules = import.meta.glob<SectionModule>(
  "../data/chapters/chapter*/sections/section-*.tsx"
);

export async function loadSection(chapter: number, section: number) {
  const key = `../data/chapters/chapter${chapter}/sections/section-${section}.tsx`;
  const importer = sectionModules[key];
  if (!importer) return null;
  const module = await importer();
  return module.default;
}