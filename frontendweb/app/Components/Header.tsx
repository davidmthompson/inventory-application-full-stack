"use client";

import { useState } from "react";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { usePurchaseHandler } from "../Controllers/PurchaseHandler";
import CartModal from "./CartModal";

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { itemsInCart } = usePurchaseHandler();
    const cartItemCount = itemsInCart.reduce((total, cartItem) => total + cartItem.quantity, 0);

    return (
        <header className="sticky top-0 z-50 flex h-20 w-full items-center justify-between border-b border-slate-800 bg-slate-950/95 px-4 backdrop-blur md:px-8">
            <div className="text-lg font-semibold tracking-wide text-slate-100">
                Inventory App
            </div>

            <div className="flex items-center gap-4">
                <Show when="signed-out">
                    <div className="flex items-center gap-3">
                        <SignInButton mode="modal">
                            <button className="rounded-md border border-slate-500 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-slate-300 hover:bg-slate-800">
                                Sign in
                            </button>
                        </SignInButton>

                        <SignUpButton mode="modal">
                            <button className="rounded-md bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
                                Sign up
                            </button>
                        </SignUpButton>
                    </div>
                </Show>

                <Show when="signed-in">
                    <UserButton
                        appearance={{
                            elements: {
                                avatarBox:
                                    "h-10 w-10 ring-2 ring-slate-300/80 transition hover:ring-emerald-300",
                            },
                        }}
                    />
                </Show>

                <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="relative inline-flex h-8 w-8 items-center justify-center text-slate-100 transition hover:text-emerald-300"
                    aria-label="Open cart modal"
                >
                    <span className="material-symbols-outlined text-[28px]">
                        shopping_cart
                    </span>
                    {cartItemCount > 0 ? (
                        <span className="absolute -right-1 -bottom-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-semibold leading-none text-white">
                            {cartItemCount}
                        </span>
                    ) : null}
                </button>
            </div>

            {isModalOpen ? <CartModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> : null}
        </header>
    );
}