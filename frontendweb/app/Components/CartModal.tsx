"use client";

import { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { usePurchaseHandler } from "../Controllers/PurchaseHandler";

type CartModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function CartModal({ isOpen, onClose }: CartModalProps) {
    const { itemsInCart, updateItemInCart, deleteItemFromCart, clearCart } = usePurchaseHandler();
    const [successMessage, setSuccessMessage] = useState("");
    const [isBuying, setIsBuying] = useState(false);

    const totalPrice = useMemo(
        () => itemsInCart.reduce((total, cartItem) => total + cartItem.item.price * cartItem.quantity, 0),
        [itemsInCart]
    );

    const handleBuyNow = () => {
        if (itemsInCart.length === 0 || isBuying) {
            return;
        }

        setIsBuying(true);
        setSuccessMessage("Purchase successful. Your cart has been cleared.");

        window.setTimeout(() => {
            clearCart();
            setIsBuying(false);
            setSuccessMessage("");
            onClose();
        }, 1200);
    };

    const handleClose = () => {
        setSuccessMessage("");
        setIsBuying(false);
        onClose();
    };

    if (!isOpen) {
        return null;
    }

    return createPortal(
        <div
            className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-slate-950/50 px-4 py-6"
            onClick={handleClose}
        >
            <div
                className="mt-20 flex max-h-[calc(100vh-6rem)] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 text-slate-100 shadow-2xl"
                onClick={event => event.stopPropagation()}
            >
                <div className="flex items-center justify-between border-b border-slate-700 px-6 py-5">
                    <div>
                        <h2 className="text-xl font-semibold">Your Cart</h2>
                        <p className="text-sm text-slate-400">Review your items before checkout.</p>
                    </div>

                    <button
                        type="button"
                        onClick={handleClose}
                        className="rounded-full p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white"
                        aria-label="Close cart modal"
                    >
                        <span className="material-symbols-outlined text-[22px]">close</span>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-5">
                    {successMessage ? (
                        <div className="mb-4 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
                            {successMessage}
                        </div>
                    ) : null}

                    {itemsInCart.length === 0 ? (
                        <div className="rounded-2xl border border-slate-700 bg-slate-950/40 px-4 py-10 text-center text-slate-400">
                            Your cart is empty.
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {itemsInCart.map(cartItem => (
                                <div
                                    key={cartItem.item.id}
                                    className="flex flex-col gap-4 rounded-2xl border border-slate-700 bg-slate-950/40 p-4 sm:flex-row sm:items-center sm:justify-between"
                                >
                                    <div className="min-w-0">
                                        <h3 className="truncate text-base font-semibold text-slate-100">
                                            {cartItem.item.name}
                                        </h3>
                                        <p className="text-sm text-slate-400">
                                            ${cartItem.item.price.toFixed(2)} each
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-3">
                                        <div className="flex items-center rounded-xl border border-slate-700 bg-slate-900">
                                            <button
                                                type="button"
                                                onClick={() => updateItemInCart(cartItem.item.id, cartItem.quantity - 1)}
                                                className="px-3 py-2 text-lg font-semibold text-slate-100 transition hover:bg-slate-800"
                                                aria-label={`Decrease quantity for ${cartItem.item.name}`}
                                            >
                                                -
                                            </button>
                                            <span className="min-w-10 px-3 text-center text-sm font-semibold text-slate-100">
                                                {cartItem.quantity}
                                            </span>
                                            <button
                                                type="button"
                                                onClick={() => updateItemInCart(cartItem.item.id, cartItem.quantity + 1)}
                                                className="px-3 py-2 text-lg font-semibold text-slate-100 transition hover:bg-slate-800"
                                                aria-label={`Increase quantity for ${cartItem.item.name}`}
                                            >
                                                +
                                            </button>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => deleteItemFromCart(cartItem.item.id)}
                                            className="inline-flex items-center gap-2 rounded-xl border border-rose-500/40 bg-rose-500/10 px-4 py-2 text-sm font-medium text-rose-300 transition hover:bg-rose-500/20"
                                        >
                                            <span className="material-symbols-outlined text-[18px]">delete</span>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="border-t border-slate-700 px-6 py-5">
                    <div className="mb-4 flex items-center justify-between text-base font-semibold">
                        <span className="text-slate-300">Total</span>
                        <span className="text-slate-100">${totalPrice.toFixed(2)}</span>
                    </div>

                    <button
                        type="button"
                        onClick={handleBuyNow}
                        disabled={itemsInCart.length === 0 || isBuying}
                        className="w-full rounded-2xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
                    >
                        {isBuying ? "Processing..." : "Buy Now"}
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
}