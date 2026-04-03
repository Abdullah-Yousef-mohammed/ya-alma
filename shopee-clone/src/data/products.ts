export interface Product {
  id: string;
  name: string;
  price: number;
  soldCount: number;
  category: string;
  emoji: string;
  isMall: boolean;
  campaign: string | null;
}

export const products: Product[] = [
  { id: "p1", name: "Premium High Quality T-Shirt for Men and Women Latest Fashion Collection 2026", price: 29.99, soldCount: 450, category: "Clothing", emoji: "👕", isMall: true, campaign: "4.4 SALE" },
  { id: "p2", name: "Vintage Denim Jeans Straight Cut Blue/Black Washed Style", price: 45.00, soldCount: 890, category: "Clothing", emoji: "👖", isMall: false, campaign: null },
  { id: "p3", name: "Running Sneakers Breathable Mesh Casual Sports Shoes", price: 120.50, soldCount: 1500, category: "Shoes", emoji: "👟", isMall: true, campaign: "MALL SUPER BRAND" },
  { id: "p4", name: "Waterproof Travel Backpack Laptop Compartment 15.6 inch", price: 35.00, soldCount: 320, category: "Bags", emoji: "🎒", isMall: false, campaign: "4.4 SALE" },
  { id: "p5", name: "Retro Sunglasses UV400 Protection Alloy Frame", price: 15.00, soldCount: 200, category: "Accessories", emoji: "👓", isMall: false, campaign: null },
  { id: "p6", name: "Smart Watch Bluetooth Call Heart Rate Monitor Fitness Tracker", price: 89.90, soldCount: 600, category: "Electronics", emoji: "⌚", isMall: true, campaign: "4.4 SALE" },
  { id: "p7", name: "Ultra Thin Laptop 14 inch 16GB RAM 512GB SSD Windows 11", price: 2100.00, soldCount: 45, category: "Electronics", emoji: "💻", isMall: true, campaign: "MALL ONLY" },
  { id: "p8", name: "5G Smartphone 12GB RAM 256GB ROM 50MP Camera", price: 1550.00, soldCount: 150, category: "Electronics", emoji: "📱", isMall: true, campaign: "4.4 SALE" },
  { id: "p9", name: "Wireless Bluetooth Headphones Over Ear Deep Bass", price: 65.50, soldCount: 420, category: "Electronics", emoji: "🎧", isMall: false, campaign: null },
  { id: "p10", name: "Korean Style Oversized T-Shirt Cotton Unisex Top", price: 19.90, soldCount: 1200, category: "Clothing", emoji: "👕", isMall: false, campaign: null },
  { id: "p11", name: "Formal Leather Shoes Business Wear Men Lace Up Black", price: 85.00, soldCount: 90, category: "Shoes", emoji: "👞", isMall: true, campaign: null },
  { id: "p12", name: "Canvas Tote Bag Grocery Shopping Eco Friendly", price: 8.50, soldCount: 5000, category: "Bags", emoji: "👜", isMall: false, campaign: "4.4 SALE" },
];
