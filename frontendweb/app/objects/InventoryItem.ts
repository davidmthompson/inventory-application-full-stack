export interface InventoryItem {
    id: number;
    name: string;
    description?: string; // Optional because it is nullable
    imgUrl?: string;      // Optional because it is nullable
    sku: string;
    price: number;
    availableMedium?: "Online" | "In Store"; // Union type preserved
    isActive: boolean;
    createdAt: Date;
    updateAt: Date;
}

export const mockInventoryItems: InventoryItem[] = [
  {
    id: 1,
    name: "Classic Leather Wallet",
    description: "Hand-stitched full-grain leather bifold wallet.",
    imgUrl: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=400",
    sku: "ACC-LW-001",
    price: 45.00,
    availableMedium: "In Store",
    isActive: true,
    createdAt: new Date("2024-01-15T10:00:00Z"),
    updateAt: new Date("2024-01-15T10:00:00Z")
  },
  {
    id: 2,
    name: "Wireless Noise-Canceling Headphones",
    description: "Premium over-ear headphones with 30-hour battery life.",
    imgUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400",
    sku: "ELEC-WNC-102",
    price: 299.99,
    availableMedium: "Online",
    isActive: true,
    createdAt: new Date("2024-02-01T14:30:00Z"),
    updateAt: new Date("2024-03-10T09:15:00Z")
  },
  {
    id: 3,
    name: "Organic Green Tea",
    description: "Ethically sourced loose-leaf green tea bags.",
    imgUrl: "https://images.unsplash.com/photo-1523906630133-f7474a1bf223?auto=format&fit=crop&q=80&w=400",
    sku: "FOOD-GT-50",
    price: 12.50,
    availableMedium: "Online",
    isActive: true,
    createdAt: new Date("2024-03-05T08:00:00Z"),
    updateAt: new Date("2024-03-05T08:00:00Z")
  },
  {
    id: 4,
    name: "Mechanical Gaming Keyboard",
    description: "RGB backlit keyboard with tactile blue switches.",
    imgUrl: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=400",
    sku: "COMP-GK-88",
    price: 89.00,
    availableMedium: "In Store",
    isActive: true,
    createdAt: new Date("2023-11-20T11:20:00Z"),
    updateAt: new Date("2024-04-01T16:45:00Z")
  },
  {
    id: 5,
    name: "Stainless Steel Water Bottle",
    description: "Double-wall vacuum insulated, 32oz.",
    imgUrl: "https://images.unsplash.com/photo-1602143399827-bd95967c7967?auto=format&fit=crop&q=80&w=400",
    sku: "HOME-SSW-32",
    price: 24.95,
    availableMedium: "Online",
    isActive: true,
    createdAt: new Date("2024-04-10T12:00:00Z"),
    updateAt: new Date("2024-04-10T12:00:00Z")
  },
  {
    id: 6,
    name: "Ergonomic Desk Chair",
    imgUrl: "https://images.unsplash.com/photo-1505797149-43b0ad7664a3?auto=format&fit=crop&q=80&w=400",
    sku: "FURN-EDC-05",
    price: 349.00,
    availableMedium: "In Store",
    isActive: true,
    createdAt: new Date("2023-12-15T09:00:00Z"),
    updateAt: new Date("2024-01-20T10:30:00Z")
  },
  {
    id: 7,
    name: "USB-C Fast Charger",
    description: "65W GaN adapter with foldable prongs.",
    imgUrl: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=400",
    sku: "ELEC-USB-65",
    price: 35.00,
    availableMedium: "Online",
    isActive: true,
    createdAt: new Date("2024-04-25T15:00:00Z"),
    updateAt: new Date("2024-04-25T15:00:00Z")
  },
  {
    id: 8,
    name: "Yoga Mat (Non-Slip)",
    description: "6mm thick eco-friendly TPE material.",
    imgUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400",
    sku: "FIT-YM-02",
    price: 29.99,
    availableMedium: "In Store",
    isActive: true,
    createdAt: new Date("2024-02-10T07:45:00Z"),
    updateAt: new Date("2024-02-10T07:45:00Z")
  },
  {
    id: 9,
    name: "Smart LED Light Bulb",
    description: "WiFi-connected, color-changing bulb (A19).",
    imgUrl: "https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&q=80&w=400",
    sku: "HOME-SLB-01",
    price: 15.50,
    availableMedium: "Online",
    isActive: true,
    createdAt: new Date("2024-03-20T20:00:00Z"),
    updateAt: new Date("2024-04-15T11:10:00Z")
  },
  {
    id: 10,
    name: "Canvas Messenger Bag",
    description: "Vintage style with padded laptop compartment.",
    imgUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=400",
    sku: "ACC-CMB-12",
    price: 65.00,
    availableMedium: "In Store",
    isActive: true,
    createdAt: new Date("2024-04-28T09:30:00Z"),
    updateAt: new Date("2024-04-28T09:30:00Z")
  }
];