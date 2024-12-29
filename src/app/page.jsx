import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 p-4">
      <h1 className="text-white text-3xl md:text-5xl font-bold mb-8 text-center">
        Welcome to the Navigation Page
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link href="/Server">
          <button className="w-full max-w-xs bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all">
            Let&#39;s Server  Page
          </button>
        </Link>
        <Link href="/Client">
          <button className="w-full max-w-xs bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition-all">
            Let&#39;s Client Page
          </button>
        </Link>
      </div>
    </div>
  );
}