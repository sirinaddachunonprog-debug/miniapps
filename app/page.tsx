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

const categories = [
  {
    name: "กระเป๋าถือ",
    image: "/category-handbag.jpg",
  },
  {
    name: "กระเป๋าสะพาย",
    image: "/category-shoulder.jpg",
  },
  {
    name: "กระเป๋าสตางค์",
    image: "/category-wallet.jpg",
  },
  {
    name: "Luxury Bag",
    image: "/category-luxury.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffdfb] text-gray-900">

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">

          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold tracking-[0.2em]">
              BAGÉRA
            </h1>
            <p className="text-[9px] tracking-[0.35em] text-gray-400">
              FASHION COLLECTION
            </p>
          </div>

          {/* Menu */}
          <nav className="hidden items-center gap-9 text-sm md:flex">
            <a className="cursor-pointer font-medium hover:text-pink-500 transition">
              หน้าแรก
            </a>

            <a className="cursor-pointer text-gray-600 hover:text-pink-500 transition">
              สินค้า
            </a>

            <a className="cursor-pointer text-gray-600 hover:text-pink-500 transition">
              โปรโมชั่น
            </a>

            <a className="cursor-pointer text-gray-600 hover:text-pink-500 transition">
              เกี่ยวกับเรา
            </a>

            <a className="cursor-pointer text-gray-600 hover:text-pink-500 transition">
              ติดต่อเรา
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">

            <button
              aria-label="ค้นหาสินค้า"
              className="text-xl transition hover:scale-110"
            >
              🔍
            </button>

            <button
              aria-label="รายการโปรด"
              className="hidden text-xl transition hover:scale-110 sm:block"
            >
              ♡
            </button>

            <button
              aria-label="ตะกร้าสินค้า"
              className="relative text-xl transition hover:scale-110"
            >
              🛒

              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-pink-500 text-[9px] text-white">
                2
              </span>
            </button>

            <button className="text-xl md:hidden">
              ☰
            </button>

          </div>
        </div>
      </header>


      {/* ================= HERO ================= */}
      <section className="overflow-hidden bg-[#fdf0f3]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:px-8 md:py-20">

          {/* Hero Text */}
          <div className="order-2 md:order-1">

            <span className="inline-block rounded-full bg-white px-4 py-2 text-xs font-semibold tracking-widest text-pink-500 shadow-sm">
              NEW COLLECTION 2026
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              กระเป๋าที่ทำให้
              <br />
              <span className="text-pink-500">
                ทุกลุคดูพิเศษ
              </span>
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-gray-600">
              ค้นพบคอลเลกชันกระเป๋าแฟชั่นดีไซน์พรีเมียม
              ที่ออกแบบมาเพื่อเติมเต็มสไตล์ของคุณ
              ในทุกวันและทุกโอกาส
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button className="rounded-full bg-black px-8 py-3.5 font-medium text-white shadow-lg transition hover:-translate-y-1 hover:bg-gray-800">
                ช้อปคอลเลกชัน
              </button>

              <button className="rounded-full border border-gray-300 bg-white px-8 py-3.5 font-medium transition hover:border-black">
                ดูสินค้า
              </button>

            </div>

            {/* Trust */}
            <div className="mt-10 flex gap-8 text-sm text-gray-500">
              <div>
                <strong className="block text-lg text-black">
                  1,000+
                </strong>
                ลูกค้าของเรา
              </div>

              <div>
                <strong className="block text-lg text-black">
                  4.9/5
                </strong>
                คะแนนรีวิว
              </div>

              <div>
                <strong className="block text-lg text-black">
                  Free
                </strong>
                จัดส่งฟรี
              </div>
            </div>

          </div>


          {/* Hero Image */}
          <div className="order-1 flex justify-center md:order-2">

            <div className="relative">

              <div className="absolute -right-5 top-8 h-24 w-24 rounded-full bg-pink-200/60 blur-2xl" />

              <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-white/80 blur-2xl" />

              <Image
                src="/hero-bag.png"
                width={600}
                height={600}
                priority
                alt="BAGÉRA Fashion Bag"
                className="relative z-10 h-auto max-w-full drop-shadow-2xl transition duration-500 hover:scale-105"
              />

            </div>

          </div>

        </div>
      </section>


      {/* ================= CATEGORY ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">

        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium tracking-widest text-pink-500">
              SHOP BY CATEGORY
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              เลือกสไตล์ที่ใช่สำหรับคุณ
            </h2>
          </div>

          <button className="hidden text-sm font-medium underline underline-offset-4 md:block">
            ดูทั้งหมด →
          </button>
        </div>


        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-3xl bg-gray-100"
            >

              <Image
                src={category.image}
                width={500}
                height={500}
                alt={category.name}
                className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 pt-16">
                <h3 className="font-semibold text-white">
                  {category.name}
                </h3>

                <p className="mt-1 text-xs text-white/80">
                  ดูสินค้า →
                </p>
              </div>

            </div>
          ))}

        </div>

      </section>


      {/* ================= PROMOTION ================= */}
      <section className="mx-auto max-w-7xl px-5 md:px-8">

        <div className="overflow-hidden rounded-[2rem] bg-black px-7 py-10 text-white md:flex md:items-center md:justify-between md:px-14">

          <div>
            <p className="text-sm font-medium tracking-widest text-pink-400">
              SPECIAL OFFER
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              ลดสูงสุด 30%
            </h2>

            <p className="mt-3 text-sm text-gray-400">
              สำหรับกระเป๋าคอลเลกชันพิเศษ
            </p>
          </div>

          <button className="mt-7 rounded-full bg-white px-7 py-3 font-medium text-black transition hover:bg-pink-100 md:mt-0">
            ช้อปโปรโมชั่น
          </button>

        </div>

      </section>


      {/* ================= PRODUCTS ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">

        <div className="mb-8 flex items-end justify-between">

          <div>
            <p className="text-sm font-medium tracking-widest text-pink-500">
              OUR PRODUCTS
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              สินค้าแนะนำ
            </h2>
          </div>

          <button className="hidden text-sm font-medium underline underline-offset-4 md:block">
            ดูสินค้าทั้งหมด →
          </button>

        </div>


        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">

          {products.map((product) => (

            <article
              key={product.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Image */}
              <div className="relative overflow-hidden bg-[#f7f5f3]">

                <Image
                  src={product.image}
                  width={600}
                  height={600}
                  alt={product.name}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Tag */}
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold tracking-wider shadow-sm">
                  {product.tag}
                </span>

                {/* Favorite */}
                <button
                  aria-label={`เพิ่ม ${product.name} ในรายการโปรด`}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-sm transition hover:bg-pink-500 hover:text-white"
                >
                  ♡
                </button>

              </div>


              {/* Content */}
              <div className="p-5">

                <p className="text-xs text-gray-400">
                  BAGÉRA COLLECTION
                </p>

                <h3 className="mt-2 text-lg font-semibold">
                  {product.name}
                </h3>


                <div className="mt-3 flex items-center gap-2">

                  <span className="text-lg font-bold text-pink-500">
                    {product.price}
                  </span>

                  {product.oldPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      {product.oldPrice}
                    </span>
                  )}

                </div>


                <button className="mt-5 w-full rounded-full bg-black py-3 text-sm font-medium text-white transition hover:bg-pink-500">
                  เพิ่มลงตะกร้า
                </button>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ================= NEWSLETTER ================= */}
      <section className="bg-[#fdf0f3] px-5 py-16">

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-medium tracking-widest text-pink-500">
            STAY UPDATED
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            รับข่าวสารและโปรโมชั่นพิเศษ
          </h2>

          <p className="mt-3 text-gray-600">
            สมัครสมาชิกเพื่อรับสิทธิพิเศษและคอลเลกชันใหม่ก่อนใคร
          </p>


          <div className="mx-auto mt-7 flex max-w-md overflow-hidden rounded-full bg-white p-1 shadow-sm">

            <input
              type="email"
              placeholder="อีเมลของคุณ"
              className="min-w-0 flex-1 bg-transparent px-5 outline-none"
            />

            <button className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white">
              สมัครสมาชิก
            </button>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-black px-5 py-12 text-white">

        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">

          <div>
            <h2 className="text-xl font-bold tracking-[0.2em]">
              BAGÉRA
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Fashion bags designed to complete
              your everyday style.
            </p>
          </div>


          <div>
            <h3 className="font-semibold">
              เมนู
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <p>หน้าแรก</p>
              <p>สินค้า</p>
              <p>โปรโมชั่น</p>
              <p>เกี่ยวกับเรา</p>
            </div>
          </div>


          <div>
            <h3 className="font-semibold">
              บริการลูกค้า
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <p>ติดตามคำสั่งซื้อ</p>
              <p>การจัดส่ง</p>
              <p>การคืนสินค้า</p>
              <p>คำถามที่พบบ่อย</p>
            </div>
          </div>


          <div>
            <h3 className="font-semibold">
              ติดต่อเรา
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <p>📞 02-123-4567</p>
              <p>✉️ hello@bagera.com</p>
              <p>📍 Bangkok, Thailand</p>
            </div>
          </div>

        </div>


        <div className="mx-auto mt-10 max-w-7xl border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          © 2026 BAGÉRA Fashion Store. All rights reserved.
        </div>

      </footer>

    </main>
  );
}
