import dynamic from 'next/dynamic';
import Header from "@/components/header";
import Hero from "@/components/hero";
import Footer from "@/components/footer";

// Lazy loading sections that are not immediately visible
const About = dynamic(() => import("@/components/about"), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
});
const Products = dynamic(() => import("@/components/products"), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
});
const Partners = dynamic(() => import("@/components/partners"), {
  loading: () => <div className="h-48 w-full animate-pulse bg-muted/20" />,
});
const Contact = dynamic(() => import("@/components/contact"), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
});

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
