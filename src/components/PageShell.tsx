import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Shared frame for secondary pages (/rezervacije, /proslave, blog…):
// same navbar/footer as the homepage, cream article container between.
export default function PageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-paper">
        <article className="mx-auto max-w-3xl px-6 py-16">{children}</article>
      </main>
      <Footer />
    </>
  );
}
