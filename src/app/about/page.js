import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | E-Commerce Store</title>
        <meta name="description" content="Learn more about our company." />
      </Head>
      <div className="py-10 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          We’re a passionate team dedicated to bringing you the best products at
          unbeatable prices. Shop with us and experience the difference!
          We’re a passionate team dedicated to bringing you the best products at
          unbeatable prices. Shop with us and experience the difference!
        </p>
        <Image
          src="/17a6d818a64ecc562ebc9d286f93a907.jpg" // Reference the local image in public/
          alt="Our Team"
          width={600}
          height={400}
          className="rounded-lg shadow-md mx-auto"
        />
        <Link href="/" className="mt-6 inline-block text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </>
  );
}