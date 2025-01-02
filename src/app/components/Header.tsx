"use client";

import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Store</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Client" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link href="/Server" className="hover:underline">
                Server
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;