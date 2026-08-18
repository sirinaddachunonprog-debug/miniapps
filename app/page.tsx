

          
import Image from "next/image";

const products = [
  {
    name: "Elegant Leather Bag",
    price: "฿1,990",
    oldPrice: "฿2,490",
    image: "/bag1.jpg",
    tag: "BEST SELLER",
  },
  {
    name: "Luxury Fashion Tote",
    price: "฿2,490",
    oldPrice: "฿2,990",
    image: "/bag2.jpg",
    tag: "NEW",
  },
  {
    name: "Mini Crossbody Bag",
    price: "฿1,590",
    oldPrice: "",
    image: "/bag3.jpg",
    tag: "POPULAR",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-wider">BAGÉRA</h1>
            <p className="text-xs text-gray-500 tracking-widest">FASHION COLLECTION</p>
          </div>
          <nav className="flex space-x-6 text-sm">
            <a href="#">หน้าแรก</a>
            <a href="#">สินค้า</a>
            <a href="#">โปรโมชั่น</a>
            <a href="#">เกี่ยวกับเรา</a>
            <a href="#">ติดต่อเรา</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-xs text-pink-500 font-bold uppercase tracking-wider">OUR PRODUCTS</p>
        <h2 className="text-2xl font-bold mb-6">สินค้าแนะนำ</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <div className="relative h-64 bg-gray-100">
                {product.tag && (
                  <span className="absolute top-2 left-2 z-10 bg-white text-xs font-bold px-2 py-1 rounded">
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
              <div className="p-4">
                <p className="text-xs text-gray-400 font-bold">BAGÉRA COLLECTION</p>
                <h3 className="font-bold text-lg">{product.name}</h3>
                <div className="mt-2">
                  <span className="text-pink-600 font-bold">{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through text-sm ml-2">
                      {product.oldPrice}
                    </span>
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

 

     


