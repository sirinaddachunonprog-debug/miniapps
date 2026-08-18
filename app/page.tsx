import React from 'react';
import { Search, ShoppingBag, Menu } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-pink-50/30 text-gray-800">
      {/* Header / Navbar */}
      <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div>
            <h1 className="text-2xl font-bold tracking-wider text-black">BAGÉRA</h1>
            <p className="text-[10px] tracking-widest text-gray-500 uppercase">Fashion Collection</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-pink-600">หน้าแรก</a>
          <a href="#" className="hover:text-pink-600">สินค้า</a>
          <a href="#" className="hover:text-pink-600">โปรโมชั่น</a>
          <a href="#" className="hover:text-pink-600">เกี่ยวกับเรา</a>
          <a href="#" className="hover:text-pink-600">ติดต่อเรา</a>
        </nav>

        <div className="flex items-center gap-5">
          <button className="text-gray-700 hover:text-black">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-gray-700 hover:text-black">
            <Menu className="w-5 h-5" />
          </button>
          <div className="relative">
            <button className="text-gray-700 hover:text-black">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              2
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <span className="inline-block bg-white text-pink-500 text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm border border-pink-100">
            NEW COLLECTION 2026
          </span>
          
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            กระเป๋าที่ทำให้<br />
            <span className="text-pink-500">ทุกลุคดูพิเศษ</span>
          </h1>
          
          <p className="text-gray-500 text-sm max-w-md leading-relaxed">
            ค้นพบคอลเลกชันกระเป๋าแฟชั่นดีไซน์พรีเมียม ที่ออกแบบมาเพื่อเติมเต็มสไตล์ของคุณ ในทุกวันและทุกโอกาส
          </p>

          <div className="flex items-center gap-4 pt-2">
            <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition">
              ช้อปคอลเลกชัน
            </button>
            <button className="bg-white text-gray-800 border border-gray-200 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition">
              ดูสินค้า
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 pt-6">
            <div>
              <p className="text-xl font-bold text-gray-900">1,000+</p>
              <p className="text-xs text-gray-500">ลูกค้าของเรา</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">4.9/5</p>
              <p className="text-xs text-gray-500">คะแนนรีวิว</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">Free</p>
              <p className="text-xs text-gray-500">จัดส่งฟรี</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img 
            src="/bag-pink.jpg" 
            alt="Pink Bag Collection" 
            className="w-full max-w-md object-contain"
          />
        </div>
      </main>
    </div>
  );
}
