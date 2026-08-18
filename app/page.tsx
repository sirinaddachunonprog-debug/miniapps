import React from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Menu } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-pink-50/30 text-gray-800 font-sans">
      
      {/* ---------------- Header / Navbar ---------------- */}
      <header className="flex items-center justify-between px-6 md:px-12 py-4 bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div>
            <h1 className="text-2xl font-black tracking-wider text-black">BAGÉRA</h1>
            <p className="text-[10px] tracking-widest text-gray-500 uppercase font-semibold">Fashion Collection</p>
          </div>
        </div>

        {/* เมนูตรงกลาง (ซ่อนในจอมือถือ) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-600">
          <Link href="/" className="text-pink-600 border-b-2 border-pink-600 pb-1">หน้าแรก</Link>
          <Link href="/products" className="hover:text-pink-600 transition-colors pb-1">สินค้า</Link>
          <Link href="/promotions" className="hover:text-pink-600 transition-colors pb-1">โปรโมชั่น</Link>
          <Link href="/about" className="hover:text-pink-600 transition-colors pb-1">เกี่ยวกับเรา</Link>
          <Link href="/contact" className="hover:text-pink-600 transition-colors pb-1">ติดต่อเรา</Link>
        </nav>

        {/* ไอคอนเมนูด้านขวา */}
        <div className="flex items-center gap-5">
          <button className="text-gray-700 hover:text-black transition-transform hover:scale-110">
            <Search className="w-5 h-5" />
          </button>
          
          <div className="relative">
            <button className="text-gray-700 hover:text-black transition-transform hover:scale-110">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-sm">
              2
            </span>
          </div>

          <button className="text-gray-700 hover:text-black transition-transform hover:scale-110 md:hidden">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* ---------------- Hero Section ---------------- */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* ส่วนข้อความด้านซ้าย */}
        <div className="space-y-6 md:space-y-8 z-10">
          <span className="inline-block bg-white text-pink-600 text-xs font-bold px-4 py-2 rounded-full shadow-sm border border-pink-100 tracking-wide">
            ✨ NEW COLLECTION 2026
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            กระเป๋าที่ทำให้<br />
            <span className="text-pink-500">ทุกลุคดูพิเศษ</span>
          </h1>
          
          <p className="text-gray-500 text-sm md:text-base max-w-md leading-relaxed">
            ค้นพบคอลเลกชันกระเป๋าแฟชั่นดีไซน์พรีเมียม ที่ออกแบบมาเพื่อเติมเต็มสไตล์ของคุณ ในทุกวันและทุกโอกาส
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/products">
              <button className="bg-black text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-gray-800 transition-all hover:shadow-lg hover:-translate-y-0.5">
                ช้อปคอลเลกชัน
              </button>
            </Link>
            <Link href="/products">
              <button className="bg-white text-gray-800 border border-gray-200 px-8 py-3.5 rounded-full text-sm font-bold hover:bg-gray-50 transition-all hover:shadow-md hover:-translate-y-0.5">
                ดูสินค้า
              </button>
            </Link>
          </div>

          {/* Stats (สถิติ) */}
          <div className="flex items-center gap-8 pt-8 border-t border-gray-200/60 mt-8">
            <div>
              <p className="text-2xl font-black text-gray-900">1,000+</p>
              <p className="text-xs text-gray-500 font-medium mt-1">ลูกค้าของเรา</p>
            </div>
            <div>
              <p className="text-2xl font-black text-gray-900">4.9/5</p>
              <p className="text-xs text-gray-500 font-medium mt-1">คะแนนรีวิว</p>
            </div>
            <div>
              <p className="text-2xl font-black text-gray-900">Free</p>
              <p className="text-xs text-gray-500 font-medium mt-1">จัดส่งฟรี</p>
            </div>
          </div>
        </div>

        {/* ---------------- ส่วนรูปภาพด้านขวา ---------------- */}
        <div className="flex justify-center items-center relative w-full h-[350px] md:h-[550px] bg-white/40 rounded-3xl p-4 shadow-sm border border-white">
          <img 
            src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1000&auto=format&fit=crop" 
            alt="Pink Fashion Bag" 
            className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
        
      </main>
    </div>
  );
}
