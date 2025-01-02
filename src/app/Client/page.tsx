"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../components/Header";

interface IProduct {
  title: string;
  image: string;
  id: number;
  category: string;
  price: number;
  rating: { rate: number; count: number };
}

async function ProductData(): Promise<IProduct[]> {
  const response = await fetch("https://fakestoreapi.com/products");
  const data: IProduct[] = await response.json();
  return data;
}

const Page = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await ProductData();
      setProducts(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
    
      <Header />

      <div className="p-4 md:p-8">
        <h1 className="text-center text-3xl font-bold text-blue-600 mb-6">
          Product Listing Page
        </h1>

        {loading ? (
          <h2 className="text-center text-xl font-semibold text-gray-500">
            Loading products...
          </h2>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow"
              >
              
                <div className="relative h-40 w-full mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain rounded-md"
                  />
                </div>

              
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                  {item.title}
                </h2>

            
                <div className="text-sm text-gray-600 mb-2">
                  <strong>Category:</strong> {item.category}
                </div>

            
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>
                    <strong>Rating:</strong> {item.rating.rate}
                  </span>
                  <span>
                    <strong>Count:</strong> {item.rating.count}
                  </span>
                </div>

            
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-600">
                    Rs: {item.price}
                  </span>
                  <button className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-md hover:bg-blue-600 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;