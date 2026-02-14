import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Products from "@/components/products";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Partners from "@/components/partners";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Products />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}