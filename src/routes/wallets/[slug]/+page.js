export async function load({ params }) {
  const jsonData = await import(`../../../lib/data/${params.slug}.json`);
  return {
    content: jsonData.default,
  };
}
