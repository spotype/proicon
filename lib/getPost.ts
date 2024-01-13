export default async function getPost(slug: any) {
  const data = await fetch(`https://dummyjson.com/products/${slug}`);
  return data.json();
}
