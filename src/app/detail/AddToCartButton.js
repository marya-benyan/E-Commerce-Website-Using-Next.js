"use client";
import { useState } from "react";

export default function AddToCartButton() {
  const [added, setAdded] = useState(false);

  return (
    <button
      onClick={() => setAdded(true)}
      className={`px-6 py-2 rounded-lg text-white font-semibold transition ${
        added ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"
      }`}
    >
      {added ? "Added to Cart!" : "Add to Cart"}
    </button>
  );
}