"use client"

import Image from "next/image";
import { usePurchaseHandler } from "../Controllers/PurchaseHandler";
import type { InventoryItem } from "../objects/InventoryItem";

export default function ProductCard({ inventoryItem }: { inventoryItem: InventoryItem }) {
    const { addItemToCart } = usePurchaseHandler()
    return (
        <article className="group relative flex h-[620px] w-full max-w-[300px] flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-all hover:shadow-md">

            <div className="border-b border-stone-200 bg-stone-100 p-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-white">
                    <Image
                        src={inventoryItem.imgUrl ?? "https://placehold.co/180x120/png"}
                        alt={inventoryItem.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 300px"
                        className="object-cover object-center"
                    />
                </div>
            </div>

            <div className="flex flex-1 flex-col gap-4 p-5">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex min-h-[4rem] flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Product</span>
                        <h3 className="text-lg font-bold leading-tight text-stone-900">{inventoryItem.name}</h3>
                    </div>
                    <p className="shrink-0 rounded-md bg-stone-100 px-3 py-1 text-sm font-bold text-stone-700">
                        ${inventoryItem.price.toFixed(2)}
                    </p>
                </div>

                <p className="min-h-[4rem] text-sm leading-relaxed text-stone-600">
                    {inventoryItem.description ?? "No description available."}
                </p>

                <div className="mt-auto flex items-center justify-between rounded-lg border border-stone-100 bg-stone-50 px-3 py-2 text-xs font-medium">
                    <span className="text-stone-500 uppercase tracking-tighter">Availability</span>
                    <span className={inventoryItem.availableMedium === "Online" ? "text-blue-700" : "text-green-700"}>
                        {inventoryItem.availableMedium ?? "Unavailable"}
                    </span>
                </div>

                <div className="max-h-0 overflow-hidden pt-0 opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:pt-2 group-hover:opacity-100">
                    <div className="flex flex-col gap-2">
                    <button
                        className="w-full rounded-md bg-stone-100 py-2 text-sm font-semibold text-stone-800 transition-colors hover:bg-black hover:text-white"
                    >
                        Buy Now
                    </button>
                    <div className="flex gap-2">
                        <button
                            onClick={() => addItemToCart(inventoryItem)}
                            className="flex-1 rounded-md bg-stone-100 py-2 text-xs font-semibold text-stone-800 transition-colors hover:bg-black hover:text-white"
                        >
                            Add to Cart
                        </button>
                        <button className="flex-1 rounded-md bg-stone-100 py-2 text-xs font-semibold text-stone-800 transition-colors hover:bg-black hover:text-white">
                            Wishlist
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </article>
    );
}