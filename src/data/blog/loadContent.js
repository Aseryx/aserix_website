const contentModules = import.meta.glob('./content/*.js');

export async function loadBlogContent(slug) {
  const key = `./content/${slug}.js`;
  const loader = contentModules[key];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}