import type { Metadata } from "next";
import { OrderSection } from "../components/order/order-section";
import { OrderFooter } from "../components/order-footer";

export const metadata: Metadata = {
  title: "Zamów online – Galio Pizza",
  description:
    "Zamów pizzę online szybko, wygodnie i bez kolejki. Dostawa lub odbiór osobisty.",
};

export default function ZamowieniePage() {
  return (
    <>
      <main className="flex-1 bg-(--c-paper)">
        <OrderSection />
      </main>
      <OrderFooter />
    </>
  );
}
