import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | E-Commerce Store</title>
        <meta name="description" content="Welcome to our e-commerce store!" />
      </Head>
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Our E-Commerce Store!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Discover amazing products at great prices.
        </p>
        <nav className="space-x-4">
          <Link
            href="/products"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Shop Now
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            About Us
          </Link>
        </nav>
      </div>
    </>
  );
}