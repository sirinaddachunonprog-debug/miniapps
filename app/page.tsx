import Image from "next/image";

const products = [
  {
    name: "Elegant Leather Bag",
    price: "฿1,990",
    image: "/bag1.jpg",
  },
  {
    name: "Luxury Fashion Tote",
    price: "฿2,490",
    image: "/bag2.jpg",
  },
  {
    name: "Mini Crossbody Bag",
    price: "฿1,590",
    image: "/bag3.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-5 border-b">
        <h1 className="text-2xl font-bold tracking-wide">
          BAGÉRA
        </h1>

        <nav className="hidden md:flex gap-8 text-sm">
          <a>หน้าแรก</a>
          <a>สินค้า</a>
          <a>โปรโมชั่น</a>
          <a>ติดต่อเรา</a>
        </nav>

        <div className="flex gap-4">
          <button>
            🔍
          </button>

          <button>
            🛒
          </button>
        </div>
      </header>


      {/* Hero */}
      <section className="
        grid md:grid-cols-2 
        items-center 
        px-8 md:px-20 
        py-16 
        bg-pink-50
      ">

        <div>
          <p className="text-pink-600 font-medium">
            NEW COLLECTION 2026
          </p>

          <h2 className="
            text-5xl 
            font-bold 
            leading-tight 
            mt-4
          ">
            กระเป๋าแฟชั่น
            <br/>
            สวยหรูสำหรับคุณ
          </h2>

          <p className="mt-5 text-gray-600">
            เติมเต็มทุกลุคด้วยกระเป๋าดีไซน์พรีเมียม
            เหมาะสำหรับทุกโอกาส
          </p>

          <button className="
            mt-8
            bg-black
            text-white
            px-8
            py-3
            rounded-full
            hover:bg-gray-800
          ">
            ช้อปเลย
          </button>

        </div>


        <div className="flex justify-center mt-10 md:mt-0">
          <Image
            src="/hero-bag.png"
            width={500}
            height={500}
            alt="Fashion Bag"
            className="rounded-3xl"
          />
        </div>

      </section>



      {/* Category */}
      <section className="px-8 md:px-20 py-12">

        <h2 className="text-3xl font-bold mb-8">
          หมวดหมู่สินค้า
        </h2>


        <div className="
          grid 
          grid-cols-2 
          md:grid-cols-4 
          gap-5
        ">

          {[
            "กระเป๋าถือ",
            "กระเป๋าสะพาย",
            "กระเป๋าสตางค์",
            "Luxury Bag"
          ].map((item)=>(
            <div
              key={item}
              className="
              bg-gray-100
              rounded-2xl
              p-8
              text-center
              hover:shadow-lg
              transition
              "
            >
              {item}
            </div>
          ))}

        </div>

      </section>



      {/* Product */}
      <section className="px-8 md:px-20 py-12">

        <h2 className="text-3xl font-bold mb-8">
          สินค้าแนะนำ
        </h2>


        <div className="
          grid
          md:grid-cols-3
          gap-8
        ">

          {products.map((product)=>(
            <div
              key={product.name}
              className="
              border
              rounded-3xl
              overflow-hidden
              hover:shadow-xl
              transition
              "
            >

              <Image
                src={product.image}
                width={400}
                height={400}
                alt={product.name}
                className="w-full"
              />


              <div className="p-5">

                <h3 className="font-semibold text-lg">
                  {product.name}
                </h3>


                <p className="text-pink-600 mt-2 font-bold">
                  {product.price}
                </p>


                <button
                className="
                mt-4
                w-full
                rounded-full
                bg-black
                text-white
                py-3
                "
                >
                  เพิ่มลงตะกร้า
                </button>

              </div>

            </div>
          ))}


        </div>

      </section>



      {/* Footer */}
      <footer className="
        bg-black
        text-white
        text-center
        py-8
      ">
        © 2026 BAGÉRA Fashion Store
      </footer>


    </div>
  );
}
