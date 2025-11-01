import PLPClient from "../components/PLPClient";

export default async function Page() {
  const res = await fetch("https://fakestoreapi.com/products?limit=12");
  const products = await res.json();

  return <PLPClient products={products} total={3425} />;
}
