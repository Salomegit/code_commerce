import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    
    <div >
      <Navbar />
      <main className="min-h-screen bg-bgLight">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-yellow-500 to-rose-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                Welcome to CodeCommerce
              </h1>
              <p className="text-lg mb-8">
                Your one-stop shop for all your coding needs. Discover the best products and deals curated just for you.
              </p>
              <a href="#" className="bg-white text-yellow-600 font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition">
                Shop Now
              </a>
            </div>
            <div  className="md:w-1/2">
              <Image
                src="/hero-image.png"
                alt="Hero Image"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
        </main>
     <Footer />
    </div>
  );
}
