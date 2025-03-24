import Link from "next/link";
import Head from "next/head";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Not Found | E-Commerce Store</title>
        <meta name="description" content="Page not found." />
      </Head>
      <div className="py-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-6">
          Oops! It looks like this page doesn’t exist.
        </p>
        <Link
          href="/"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Go Back Home
        </Link>
      </div>
    </>
  );
}