"use client";

import ProductCard from "./Components/ProductCard";
import { mockInventoryItems } from "./objects/InventoryItem";

export default function Home() {
  const allProductsLoaded = mockInventoryItems;

  return (
    <main className="flex min-h-screen flex-wrap items-stretch justify-center gap-6 bg-slate-100 px-4 py-8 sm:px-6 lg:px-10">
      {allProductsLoaded.map((item) => (
        <ProductCard inventoryItem={item} key={item.id} />
      ))}
    </main>
  );
}