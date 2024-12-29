"use client"
import Header from "../components/Header"
import { useEffect, useState } from "react";
import Product from "../components/ClienFetch";
import ClientData from "../components/ClientData";

export default function ClientPage() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function FetchData() {
      const ProductData = await Product();
      setProduct(ProductData);
      setLoading(false); 
    }

    FetchData();
  }, []);

  return (
    <>
      {loading ? (
        <h1 className="text-center text-3xl font-semibold mt-10">Loading... plz wait..</h1> 
      ) : (
        <div className="p-4 bg-gray-100 min-h-screen space-y-10">
          <Header/>
          <h1 className="text-center text-4xl font-bold mb-6 text-blue-600">Welcome to Client Page</h1>
          <h2 className="text-center text-2xl mb-10 text-gray-700">This Data is Fetched by Client Side Rendering</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {product.map((e) => (
              <div key={e.id} className="bg-white p-4 rounded-lg shadow-lg transition transform hover:scale-105">
                <ClientData
                  title={e.title}
                  id={e.id}
                  image={e.image}
                  rating={e.rating}
                  category={e.category}
                  price={e.price}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}