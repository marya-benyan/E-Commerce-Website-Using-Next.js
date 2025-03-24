import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton"; // Move the button to a separate file

// Server Component: Fetches data and renders static content
export default async function Detail({ searchParams }) {
  const id = searchParams.id; // Get id from query parameter (?id=)

  if (!id) {
    return (
      <div className="py-10 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Error</h1>
        <p className="text-gray-600 mb-6">No product ID provided.</p>
        <Link href="/products" className="text-blue-600 hover:underline">
          Back to Products
        </Link>
      </div>
    );
  }

  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 60 }, // ISR: Revalidate every 60 seconds
  });

  if (!res.ok) {
    return (
      <div className="py-10 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-6">Sorry, this product doesn’t exist.</p>
        <Link href="/products" className="text-blue-600 hover:underline">
          Back to Products
        </Link>
      </div>
    );
  }

  const product = await res.json();

  return (
    <>
      <Head>
        <title>{product.title} | E-Commerce Store</title>
        <meta name="description" content={product.description.slice(0, 150)} />
      </Head>
      <div className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center">
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={400}
              className="rounded-lg object-contain"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
            <p className="text-2xl text-gray-700 mb-2">${product.price}</p>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="mb-4">
              <p className="text-gray-700">
                <span className="font-semibold">Category:</span> {product.category}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Rating:</span> {product.rating.rate} / 5 ({product.rating.count} reviews)
              </p>
            </div>
            <AddToCartButton /> {/* Client Component */}
            <div className="mt-6 space-x-4">
              <Link href="/products" className="text-blue-600 hover:underline">
                Back to Products
              </Link>
              <Link href="/" className="text-blue-600 hover:underline">
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}