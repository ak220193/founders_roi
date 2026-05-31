import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white flex items-center overflow-hidden pt-24">
      {/* Glow Background Effect */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-orange-500 opacity-20 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-orange-500 font-medium mb-4 tracking-wide">
            Scaling Ambitious Brands Worldwide
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Turn Your Business Into a{" "}
            <span className="text-orange-500">Revenue Engine</span>
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-xl">
            We build scalable marketing, sales, and technology systems that
            drive predictable growth and long-term revenue.
          </p>

          <div className="flex gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl transition">
              Start Scaling
            </button>

            <button className="border border-gray-700 hover:border-orange-500 px-6 py-3 rounded-xl transition">
              Explore Services
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          {/* Soft Glow Behind Image */}
          <div className="absolute w-[400px] h-[400px] bg-orange-500 opacity-20 blur-[120px] rounded-full"></div>

          <Image
            src="/hero_image.png"
            alt="Revenue Dashboard"
            width={650}
            height={550}
            className="relative rounded-2xl     shadow-2xl border border-gray-800"
            priority
          />
        </div>
      </div>
    </section>
  );
}
