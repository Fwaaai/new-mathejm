type ChapterModule = { default: React.ComponentType };
const chapterModules = import.meta.glob<ChapterModule>(
  "../../data/chapters/chapter*/index.tsx"
);

console.log("Available chapters:", Object.keys(chapterModules));

export async function loadChapter(chapter: number) {
  // Find the matching key dynamically
  const key = Object.keys(chapterModules).find(k =>
    k.includes(`chapter${chapter}/index.tsx`)
  );
  if (!key) return null;

  const module = await chapterModules[key]!();
  return module.default;
}