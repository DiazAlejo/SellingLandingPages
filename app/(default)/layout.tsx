import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header activePage="home" />

      <main className="grow">{children}</main>

      <Footer />
    </>
  );
}
