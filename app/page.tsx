import React from 'react';
import { Search, ShoppingBag, Menu } from 'lucide-react';import React from 'react';
import { Search, ShoppingBag } from 'lucide-react';

export default function MinimalHeroPage() {
  return (
    <div className="min-h-screen bg-pink-50/20 text-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between px-12 py-6 bg-white">
        <h1 className="text-2xl font-bold tracking-wider text-black">BAGÉRA</h1>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-pink-600">หน้าแรก</a>
          <a href="#" className="hover:text-pink-600">สินค้า</a>
          <a href="#" className="hover:text-pink-600">โปรโมชั่น</a>
          <a href="#" className="hover:text-pink-600">ติดต่อเรา</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-gray-700"><Search className="w-5 h-5" /></button>
          <button className="text-gray-700"><ShoppingBag className="w-5 h-5" /></button>
        </div>
      </header>

      {/* Hero Content */}
      <main className="max-w-6xl mx-auto px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold tracking-wider text-pink-500 uppercase">
            NEW COLLECTION 2026
          </p>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            กระเป๋าแฟชั่น<br />
            สวยหรูสำหรับคุณ
          </h1>

          <p className="text-gray-500 text-sm">
            เติมเต็มทุกลุคด้วยกระเป๋าดีไซน์พรีเมียม เหมาะสำหรับทุกโอกาส
          </p>

          <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition">
            ช้อปเลย
          </button>
        </div>

        <div className="flex justify-center items-center bg-gray-100 rounded-lg p-12 min-h-[300px]">
          <span className="text-gray-400 font-medium">Fashion Bag</span>
        </div>
      </main>
    </div>
  );
}

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
import React from 'react';
import { Search, ShoppingBag, Menu, MoreVertical } from 'lucide-react';

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
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
        <div>
          <h1 className="text-2xl font-bold tracking-wider text-black">BAGÉRA</h1>
          <p className="text-[10px] tracking-widest text-gray-500 uppercase">Fashion Collection</p>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-pink-600">หน้าแรก</a>
          <a href="#" className="hover:text-pink-600">สินค้า</a>
          <a href="#" className="hover:text-pink-600">โปรโมชั่น</a>
          <a href="#" className="hover:text-pink-600">เกี่ยวกับเรา</a>
          <a href="#" className="hover:text-pink-600">ติดต่อเรา</a>
        </nav>

        <div className="flex items-center gap-5">
          <button className="text-gray-700"><Search className="w-5 h-5" /></button>
          <button className="text-gray-700"><Menu className="w-5 h-5" /></button>
          <div className="relative">
            <button className="text-gray-700"><ShoppingBag className="w-5 h-5" /></button>
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              2
            </span>
          </div>
        </div>
      </header>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-50/50 rounded-2xl p-4 flex flex-col justify-between relative group">
              {/* Card Header Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-white text-[10px] font-bold tracking-wider text-gray-700 px-3 py-1 rounded-full uppercase border border-gray-100 shadow-sm">
                  {product.badge}
                </span>
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-black shadow-sm">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>

              {/* Product Image */}
              <div className="w-full h-64 flex items-center justify-center mb-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Card Content */}
              <div className="space-y-1">
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
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}import React from 'react';
import { Search, ShoppingBag, Menu, MoreVertical } from 'lucide-react';

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
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
        <div>
          <h1 className="text-2xl font-bold tracking-wider text-black">BAGÉRA</h1>
          <p className="text-[10px] tracking-widest text-gray-500 uppercase">Fashion Collection</p>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-pink-600">หน้าแรก</a>
          <a href="#" className="hover:text-pink-600">สินค้า</a>
          <a href="#" className="hover:text-pink-600">โปรโมชั่น</a>
          <a href="#" className="hover:text-pink-600">เกี่ยวกับเรา</a>
          <a href="#" className="hover:text-pink-600">ติดต่อเรา</a>
        </nav>

        <div className="flex items-center gap-5">
          <button className="text-gray-700"><Search className="w-5 h-5" /></button>
          <button className="text-gray-700"><Menu className="w-5 h-5" /></button>
          <div className="relative">
            <button className="text-gray-700"><ShoppingBag className="w-5 h-5" /></button>
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              2
            </span>
          </div>
        </div>
      </header>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-50/50 rounded-2xl p-4 flex flex-col justify-between relative group">
              {/* Card Header Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-white text-[10px] font-bold tracking-wider text-gray-700 px-3 py-1 rounded-full uppercase border border-gray-100 shadow-sm">
                  {product.badge}
                </span>
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-black shadow-sm">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>

              {/* Product Image */}
              <div className="w-full h-64 flex items-center justify-center mb-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Card Content */}
              <div className="space-y-1">
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
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
