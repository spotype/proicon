export default async function getAllPost() {
  const data = await fetch("https://dummyjson.com/products");
  return data.json();
}
