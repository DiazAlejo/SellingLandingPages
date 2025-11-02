import { Metadata } from "next";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import ClientWrapper from "@/components/client-wrapper";

export const metadata: Metadata = {
  title: "Pricing - ClicksyDev",
  description: "Choose the perfect package for your business or tell us your idea for a free consultation.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header activePage="pricing" />
      <main className="grow pt-32">
        {children}
      </main>
      <Footer />
      <ClientWrapper />
    </>
  );
}
