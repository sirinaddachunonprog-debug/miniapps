'use client'; // จำเป็นต้องใส่บรรทัดนี้บนสุดเพื่อให้ใช้ useState ใน Next.js ได้

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ShoppingBag, Menu, MoreVertical, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    badge: 'BEST SELLER',
    name: 'Elegant Leather Bag',
    brand: 'BAGÉRA COLLECTION',
    price: '฿1,990',
    originalPrice: '฿2,490',
    image: '/bag-1.jpg',
  },
  {
    id: 2,
    badge: 'NEW',
    name: 'Luxury Fashion Tote',
    brand: 'BAGÉRA COLLECTION',
    price: '฿2,490',
    originalPrice: '฿2,990',
    image: '/bag-2.jpg',
  },
  {
    id: 3,
    badge: 'POPULAR',
    name: 'Mini Crossbody Bag',
    brand: 'BAGÉRA COLLECTION',
    price: '฿1,590',
    originalPrice: '',
    image: '/bag-3.jpg',
  },
];

export default function ProductCatalogPage() {
  // สร้าง state สำหรับเก็บจำนวนสินค้าในตะกร้า
  const [cartCount, setCartCount] = useState(0);

  // ฟังก์ชันสำหรับกดเพิ่มสินค้า
  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    alert('เพิ่มสินค้าลงตะกร้าแล้ว!'); // แจ้งเตือนเล็กๆ (สามารถเปลี่ยนเป็น Toast สวยๆ ทีหลังได้)
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
        <div>
          <h1 className="text-2xl font-bold tracking-wider text-black">BAGÉRA</h1>
          <p className="text-[10px] tracking-widest text-gray-500 uppercase">Fashion Collection</p>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-pink-600">หน้าแรก</Link>
          <Link href="/products" className="hover:text-pink-600 text-pink-600">สินค้า</Link>
          <Link href="/promotions" className="hover:text-pink-600">โปรโมชั่น</Link>
          <Link href="/about" className="hover:text-pink-600">เกี่ยวกับเรา</Link>
          <Link href="/contact" className="hover:text-pink-600">ติดต่อเรา</Link>
        </nav>

        <div className="flex items-center gap-5">
          <button className="text-gray-700 hover:text-black transition"><Search className="w-5 h-5" /></button>
          <button className="text-gray-700 hover:text-black transition"><Menu className="w-5 h-5" /></button>
          
          {/* ไอคอนตะกร้าสินค้า */}
          <div className="relative">
            <button className="text-gray-700 hover:text-black transition">
              <ShoppingBag className="w-5 h-5" />
            </button>
            {/* แสดงตัวเลขเมื่อมีสินค้าในตะกร้ามากกว่า 0 */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold animate-bounce">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold text-gray-900">สินค้าทั้งหมด</h2>
          <p className="text-sm text-gray-500">พบ {products.length} รายการ</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-50/50 rounded-2xl p-4 flex flex-col justify-between relative group hover:shadow-md transition-shadow">
              
              {/* Card Header Tag */}
              <div className="flex items-center justify-between mb-4 z-10 relative">
                <span className="bg-white text-[10px] font-bold tracking-wider text-gray-700 px-3 py-1 rounded-full uppercase border border-gray-100 shadow-sm">
                  {product.badge}
                </span>
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-black shadow-sm transition">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>

              {/* Product Image */}
              <div className="w-full h-64 flex items-center justify-center mb-6 relative rounded-xl overflow-hidden bg-white">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill
                  style={{ objectFit: 'contain', padding: '1rem' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Card Content */}
              <div className="space-y-2 mt-auto">
                <p className="text-[11px] font-medium text-gray-400 tracking-wider uppercase">
                  {product.brand}
                </p>
                <h3 className="font-bold text-gray-900 text-lg">
                  {product.name}
                </h3>
                <div className="flex items-baseline gap-2 pt-1">
                  <span className="text-pink-600 font-bold text-lg">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 text-sm line-through">{product.originalPrice}</span>
                  )}
                </div>
                
                {/* ปุ่มเพิ่มลงตะกร้า */}
                <button 
                  onClick={handleAddToCart}
                  className="w-full mt-4 flex items-center justify-center gap-2 bg-black text-white px-4 py-2.5 rounded-full text-sm font-medium hover:bg-pink-600 transition-colors active:scale-95"
                >
                  <ShoppingCart className="w-4 h-4" />
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
