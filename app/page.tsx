import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-widest text-black">BAGÉRA</h1>
            <p className="text-[10px] text-gray-400 font-medium tracking-[0.2em]">FASHION COLLECTION</p>
          </div>

          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-black transition-colors">หน้าแรก</a>
            <a href="#" className="hover:text-black transition-colors">สินค้า</a>
            <a href="#" className="hover:text-black transition-colors">โปรโมชั่น</a>
            <a href="#" className="hover:text-black transition-colors">เกี่ยวกับเรา</a>
            <a href="#" className="hover:text-black transition-colors">ติดต่อเรา</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="relative">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </button>
              <span className="absolute top-0 right-0 bg-pink-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner Section */}
      <section className="bg-pink-50/50 py-12 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="space-y-6">
            <span className="inline-block bg-white text-pink-500 text-xs font-semibold px-4 py-1.5 rounded-full border border-pink-100 shadow-sm">
              NEW COLLECTION 2026
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              กระเป๋าที่ทำให้<br />
              <span className="text-pink-500">ทุกลุคดูพิเศษ</span>
            </h1>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md">
              ค้นพบคอลเลกชันกระเป๋าดีไซน์พรีเมียม ที่ออกแบบมาเพื่อเติมเต็มสไตล์ของคุณ ในทุกวันและทุกโอกาส
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-black text-white text-sm font-medium px-7 py-3.5 rounded-full hover:bg-gray-800 active:scale-95 transition-all">
                ช้อปคอลเลกชัน
              </button>
              <button className="bg-white text-gray-800 border border-gray-200 text-sm font-medium px-7 py-3.5 rounded-full hover:bg-gray-50 active:scale-95 transition-all">
                ดูสินค้า
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8 border-t border-pink-100">
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

          {/* Right Hero Image */}
          <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden bg-pink-100/50">
            <Image
              src="/hero-bag.jpg"
              alt="Pink Fashion Bag"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

        </div>
      </section>
    </div>
  );
}
