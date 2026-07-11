import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Signature from "@/components/Signature";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import InstagramFeed from "@/components/InstagramFeed";
import Visit from "@/components/Visit";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Signature />
        <About />
        <Menu />
        <Gallery />
        <InstagramFeed />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
