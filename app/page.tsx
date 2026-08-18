"use client";

import React, { useState } from "react";

// ข้อมูลสินค้ากระเป๋า พร้อมหมวดหมู่และรูปภาพ
const allProducts = [
  {
    id: 1,
    name: "กระเป๋าเป้สะพายหลังแฟชั่น เกาหลี",
    price: 490,
    category: "backpack",
    categoryName: "กระเป๋าเป้",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "กระเป๋าถือหนังสะพายข้างพรีเมียม",
    price: 790,
    category: "handbag",
    categoryName: "กระเป๋าถือ",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "กระเป๋าสะพายไหล่ Minimal Style",
    price: 350,
    category: "shoulder",
    categoryName: "กระเป๋าสะพายไหล่",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "กระเป๋าผ้า Canvas จุของได้เยอะ",
    price: 199,
    category: "canvas",
    categoryName: "กระเป๋าผ้า",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState<{ id: number; name: string; price: number; image: string; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // กรองสินค้าตามการค้นหาและหมวดหมู่
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // ฟังก์ชันเพิ่มสินค้าลงตะกร้า
  const addToCart = (product: typeof allProducts[0]) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // ลบสินค้าในตะกร้า
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Top Bar สไตล์เว็บไซต์องค์กร */}
      <div className="bg-black text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>📧 contact@bagshop-thailand.com | 📞 +662-578-3582</span>
          <span>✨ จัดส่งฟรีทั่วประเทศ เมื่อซื้อครบ 500 บาท</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-wider text-red-600">BAGSHOP</span>
            <span className="text-sm font-semibold text-gray-600">THAILAND</span>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-6 font-medium text-sm text-gray-700">
            <a href="#" className="hover:text-red-600 transition">หน้าแรก</a>
            <a href="#" className="hover:text-red-600 transition">สินค้าทั้งหมด</a>
            <a href="#" className="hover:text-red-600 transition">เกี่ยวกับเรา</a>
            <a href="#" className="hover:text-red-600 transition">โปรโมชั่น</a>
          </nav>

          {/* Search & Cart */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <input
              type="text"
              placeholder="ค้นหากระเป๋า..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-full px-4 py-1.5 text-sm outline-none focus:border-red-600 w-full md:w-64"
            />
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium transition flex items-center gap-2 shrink-0"
            >
              🛒 ตะกร้า
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">WE ARE EXPERT</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          ในด้านการคัดสรรและจัดจำหน่ายกระเป๋าแฟชั่นและกระเป๋าเดินทางคุณภาพสูง ตอบโจทย์ทุกไลฟ์สไตล์ของคุณ
        </p>
      </div>

      {/* Filter Categories */}
      <div className="max-w-7xl mx-auto px-4 mt-8 flex flex-wrap gap-2 justify-center">
        {[
          { id: "all", name: "สินค้าทั้งหมด" },
          { id: "backpack", name: "กระเป๋าเป้" },
          { id: "handbag", name: "กระเป๋าถือ" },
          { id: "shoulder", name: "กระเป๋าสะพายไหล่" },
          { id: "canvas", name: "กระเป๋าผ้า" },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === cat.id ? "bg-red-600 text-white shadow" : "bg-white text-gray-700 border hover:bg-gray-100"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.length === 0 ? (
            <p className="col-span-full text-center text-gray-500 py-12">ไม่พบสินค้าที่คุณค้นหาจ้า</p>
          ) : (
            filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-xl transition flex flex-col">
                <div className="relative h-52 bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                  <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2.5 py-1 rounded">
                    {product.categoryName}
                  </span>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 text-sm">{product.name}</h3>
                  <div className="mt-auto">
                    <p className="text-red-600 font-bold text-lg mb-3">฿{product.price.toLocaleString()}</p>
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full bg-gray-900 hover:bg-red-600 text-white py-2 rounded-lg font-medium transition text-sm flex items-center justify-center gap-2"
                    >
                      🛒 เพิ่มลงตะกร้า
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      {/* Cart Modal / Slide-over */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 flex justify-end">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col">
            <div className="p-4 bg-gray-900 text-white flex justify-between items-center">
              <h3 className="font-bold text-base">🛒 ตะกร้าสินค้าของคุณ</h3>
              <button onClick={() => setIsCartOpen(false)} className="text-white hover:text-gray-300 text-xl font-bold">
                ✕
              </button>
            </div>

            <div className="p-4 flex-1 overflow-y-auto space-y-4">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500 py-12">ยังไม่มีสินค้าในตะกร้าจ้า</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 border-b pb-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md border" />
                    <div className="flex-1">
                      <h4 className="font-medium text-xs line-clamp-1">{item.name}</h4>
                      <p className="text-red-600 font-bold text-sm">฿{item.price.toLocaleString()}</p>
                      <p className="text-gray-500 text-xs">จำนวน: {item.quantity}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-600 text-xs font-medium"
                    >
                      ลบ
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-4 border-t bg-gray-50">
                <div className="flex justify-between mb-4 text-base font-bold">
                  <span>ยอดรวมทั้งสิ้น:</span>
                  <span className="text-red-600">฿{totalPrice.toLocaleString()}</span>
                </div>
                <button
                  onClick={() => {
                    alert("🎉 สั่งซื้อสินค้าสำเร็จแล้ว ขอบคุณที่ไว้วางใจเราค่ะ!");
                    setCart([]);
                    setIsCartOpen(false);
                  }}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold transition text-sm shadow"
                >
                  ดำเนินการสั่งซื้อ (Checkout)
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
