"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { InventoryItem } from "../objects/InventoryItem"

export interface CartItem {
    item: InventoryItem
    quantity: number
}

export interface PurchaseContextValue {
    itemsInCart: CartItem[]
    addItemToCart: (item: InventoryItem) => void
    updateItemInCart: (itemId: number, quantity: number) => void
    deleteItemFromCart: (itemId: number) => void
    clearCart: () => void
}

export const PurchaseContext = createContext<PurchaseContextValue>({
    itemsInCart: [],
    addItemToCart: () => {},
    updateItemInCart: () => {},
    deleteItemFromCart: () => {},
    clearCart: () => {}
})

export function PurchaseHandlerProvider({
    children
}: {children: ReactNode}) {
    const [itemsInCart, setItemsInCart] = useState<CartItem[]>([])

    const addItemToCart = (item: InventoryItem) => {
        setItemsInCart(items => {
            const existingItem = items.find(cartItem => cartItem.item.id === item.id)

            if (existingItem) {
                return items.map(cartItem =>
                    cartItem.item.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            }

            return [...items, { item, quantity: 1 }]
        })
    }

    const updateItemInCart = (itemId: number, quantity: number) => {
        if (quantity <= 0) {
            deleteItemFromCart(itemId)
            return
        }

        setItemsInCart(items =>
            items.map(cartItem =>
                cartItem.item.id === itemId
                    ? { ...cartItem, quantity }
                    : cartItem
            )
        )
    }

    const deleteItemFromCart = (itemId: number) => {
        setItemsInCart(items => items.filter(cartItem => cartItem.item.id !== itemId))
    }

    const clearCart = () => {
        setItemsInCart([])
    }

    return (
        <PurchaseContext.Provider
            value={{
                itemsInCart,
                addItemToCart,
                updateItemInCart,
                deleteItemFromCart,
                clearCart
            }}
        >
            {children}
        </PurchaseContext.Provider>
    )
}

export const usePurchaseHandler = () => {
    return useContext(PurchaseContext)
}