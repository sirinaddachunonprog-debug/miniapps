

          


 

     


 "use client";

import { useState } from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  tag?: string;
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Elegant Leather Bag",
    price: 1990,
    oldPrice: 2490,
    image: "/bag1.jpg",
    tag: "BEST SELLER",
  },
  {
    id: 2,
    name: "Luxury Fashion Tote",
    price: 2490,
    oldPrice: 2990,
    image: "/bag2.jpg",
    tag: "NEW",
  },
  {
    id: 3,
    name: "Mini Crossbody Bag",
    price: 1590,
    image: "/bag3.jpg",
    tag: "POPULAR",
  },
];

export default function Home() {
  const [cart, setCart] = useState<Product[]>([]);

  // ฟังก์ชันเพิ่มสินค้าลงตะกร้า
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-wider text-black">BAGÉRA</h1>
            <p className="text-xs text-gray-400 tracking-widest">FASHION COLLECTION</p>
          </div>

          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-black">หน้าแรก</a>
            <a href="#" className="hover:text-black">สินค้า</a>
            <a href="#" className="hover:text-black">โปรโมชั่น</a>
            <a href="#" className="hover:text-black">เกี่ยวกับเรา</a>
            <a href="#" className="hover:text-black">ติดต่อเรา</a>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Cart Icon with Counter */}
            <div className="relative">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </button>
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-xs font-semibold tracking-wider text-pink-500 uppercase">OUR PRODUCTS</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-1">สินค้าแนะนำ</h2>
          </div>
          <a href="#" className="text-sm font-semibold text-gray-700 hover:underline">
            ดูสินค้าทั้งหมด &rarr;
          </a>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {initialProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              {/* Product Image */}
              <div className="relative h-80 w-full bg-gray-100">
                {product.tag && (
                  <span className="absolute top-4 left-4 z-10 bg-white text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                    {product.tag}
                  </span>
                )}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="p-5">
                <span className="text-xs font-semibold text-gray-400 tracking-wider block mb-1">BAGÉRA COLLECTION</span>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
                
                <div className="flex items-baseline space-x-2 mb-4">
                  <span className="text-xl font-bold text-pink-500">฿{product.price.toLocaleString()}</span>
                  {product.oldPrice && (
                    <span className="text-sm text-gray-400 line-through">฿{product.oldPrice.toLocaleString()}</span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-black text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors"
                >
                  เพิ่มลงตะกร้า
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
