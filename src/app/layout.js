import { Inter } from "next/font/google";
import "./globals.css"; // Tailwind CSS import

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Commerce Store",
  description: "A simple e-commerce store built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}