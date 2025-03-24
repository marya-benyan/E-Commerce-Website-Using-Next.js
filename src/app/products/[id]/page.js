"use client"; // Client Component for the button
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default async function Product({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`, {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
            <p className="text-2xl text-gray-700 mb-2">${product.price}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <AddToCartButton />
            <div className="mt-4 space-x-4">
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

function AddToCartButton() {
  const [added, setAdded] = useState(false);

  return (
    <button
      onClick={() => setAdded(true)}
      className={`px-4 py-2 rounded text-white ${
        added ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"
      }`}
    >
      {added ? "Added to Cart!" : "Add to Cart"}
    </button>
  );
}