import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 shadow-md rounded">
      <div className="container mx-auto  flex justify-between items-center ">
        <h1 className="text-2xl font-bold">
          <Link href="/">My Website</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4 lg:space-x-10">
            <li>
              <Link
                href="/"
                className="hover:text-gray-200 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/Server"
                className="hover:text-gray-200 transition duration-300"
              >
                Server Page
              </Link>
            </li>
            <li>
              <Link
                href="/Client"
                className="hover:text-gray-200 transition duration-300"
              >
                Client Page
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}