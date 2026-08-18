"use client";

import React, { useState } from "react";

// ข้อมูลสินค้ากระเป๋า พร้อมรูปภาพจาก Unsplash
const products = [
  {
    id: 1,
    name: "กระเป๋าเป้สะพายหลังแฟชั่น เกาหลี",
    price: 490,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    category: "กระเป๋าเป้"
  },
  {
    id: 2,
    name: "กระเป๋าถือหนังสะพายข้างพรีเมียม",
    price: 790,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    category: "กระเป๋าถือ"
  },
  {
    id: 3,
    name: "กระเป๋าสะพายไหล่ Minimal Style",
    price: 350,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    category: "กระเป๋าสะพาย"
  },
  {
    id: 4,
    name: "กระเป๋าผ้า Canvas จุของได้เยอะ",
    price: 199,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
    category: "กระเป๋าผ้า"
  }
];

export default function Home() {
  const [cart, setCart] = useState<{ id: number; name: string; price: number; image: string; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ฟังก์ชันเพิ่มสินค้าลงตะกร้า
  const addToCart = (product: typeof products[0]) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // ฟังก์ชันลบสินค้าในตะกร้า
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // คำนวณราคารวมทั้งหมด
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header สไตล์ช้อปปี้ */}
      <header className="sticky top-0 z-50 bg-orange-500 shadow-md text-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">🛍️ ShoBag Shop - ร้านขายกระเป๋าออนไลน์</h1>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative bg-white text-orange-600 px-4 py-2 rounded-full font-medium shadow flex items-center gap-2 hover:bg-orange-50 transition"
          >
            🛒 ตะกร้าสินค้า
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* เนื้อหาหลัก: รายการสินค้า */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">กระเป๋ามาใหม่ พร้อมส่งจ้า ✨</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition flex flex-col">
              <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
                <span className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                  {product.category}
                </span>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2">{product.name}</h3>
                <div className="mt-auto">
                  <p className="text-orange-600 font-bold text-lg mb-3">฿{product.price.toLocaleString()}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-medium transition flex items-center justify-center gap-2"
                  >
                    🛒 เพิ่มลงตะกร้า
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal ตะกร้าสินค้า (Slide-over) */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 flex justify-end">
          <div className="w-full max-w-md bg-white h-full shadow-xl flex flex-col">
            <div className="p-4 bg-orange-500 text-white flex justify-between items-center">
              <h3 className="font-bold text-lg">🛒 ตะกร้าสินค้าของคุณ</h3>
              <button onClick={() => setIsCartOpen(false)} className="text-white text-xl font-bold hover:text-gray-200">
                ✕
              </button>
            </div>

            <div className="p-4 flex-1 overflow-y-auto space-y-4">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500 py-10">ยังไม่มีสินค้าในตะกร้า เลือกช้อปเลย!</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm line-clamp-1">{item.name}</h4>
                      <p className="text-orange-600 font-bold text-sm">฿{item.price.toLocaleString()}</p>
                      <p className="text-gray-500 text-xs">จำนวน: {item.quantity}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 text-sm font-medium"
                    >
                      ลบ
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-4 border-t bg-gray-50">
                <div className="flex justify-between mb-4 text-lg font-bold">
                  <span>ยอดรวมทั้งหมด:</span>
                  <span className="text-orange-600">฿{totalPrice.toLocaleString()}</span>
                </div>
                <button
                  onClick={() => {
                    alert("สั่งซื้อสินค้าเรียบร้อยแล้ว ขอบคุณที่อุดหนุนค่ะ! 🎉");
                    setCart([]);
                    setIsCartOpen(false);
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold transition shadow"
                >
                  สั่งซื้อสินค้า (Checkout)
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
