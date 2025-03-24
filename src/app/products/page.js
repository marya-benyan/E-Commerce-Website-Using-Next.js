import Link from "next/link";
import Head from "next/head";

export default async function Products() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store", // SSR: Fetch on every request
  });
  const products = await res.json();

  return (
    <>
      <Head>
        <title>Our Products | E-Commerce Store</title>
        <meta name="description" content="Browse our latest products." />
      </Head>
      <div className="py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-700">
                {product.title}
              </h2>
              <p className="text-gray-600">${product.price}</p>
              <Link
                href={`/detail?id=${product.id}`} // Updated link with query parameter
                className="mt-2 inline-block text-blue-600 hover:underline"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
        <Link href="/" className="mt-6 inline-block text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </>
  );
}