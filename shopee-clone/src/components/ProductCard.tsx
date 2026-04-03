"use client";

import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";
import { useState } from "react";

export default function ProductCard({ item }: { item: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="bg-white rounded hover:border-[#ee4d2d] border border-transparent shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all flex flex-col overflow-hidden group cursor-pointer">
      <div className="relative pt-[100%] bg-gray-50 overflow-hidden">
        {/* Campaign Badges */}
        {item.campaign && (
          <span className="absolute top-0 right-0 bg-[#fceea7] text-[#ee4d2d] text-[10px] font-bold px-1.5 py-0.5 z-10 w-auto text-center leading-tight shadow-sm whitespace-nowrap">
            {item.campaign}
          </span>
        )}
        
        {/* Product Dummy Image */}
        <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition duration-300">
          <div className="text-6xl pt-2 opacity-80">{item.emoji}</div>
        </div>
        
        {/* Free shipping overlay */}
        <div className="absolute bottom-0 left-0">
          <img 
              src="https://down-my.img.susercontent.com/file/sg-11134004-7qvg5-lf39oef89qxz60" 
              className="h-4 object-contain"
              style={{filter: "hue-rotate(340deg) saturate(2)"}}
              alt=""
          />
        </div>
      </div>
      
      <div className="p-2 flex flex-col flex-1 text-sm bg-white z-10 pt-2.5 relative">
        <p className="line-clamp-2 text-gray-800 leading-tight min-h-[38px] text-[13px]">
          {item.isMall && (
            <span className="border border-red-500 text-red-500 text-[9px] px-1 rounded-sm mr-1.5 font-bold align-middle bg-red-50">Mall</span>
          )}
          {item.name}
        </p>
        
        <div className="mt-2.5 flex justify-between items-center w-full pb-0.5">
          <span className="text-[#ee4d2d] font-bold text-base"><span className="text-xs">RM</span>{item.price.toFixed(2)}</span>
          <span className="text-gray-500 text-[10px]">{item.soldCount} sold</span>
        </div>
      </div>

      {/* Find Similar / Add to Cart Button overlay */}
      <button 
        onClick={(e) => { e.stopPropagation(); handleAdd(); }}
        className={`w-full py-2 transition-all z-20 font-medium text-sm ${added ? "bg-green-500 text-white" : "bg-[#ee4d2d] text-white  hover:bg-[#f53d2d]"} translate-y-full group-hover:translate-y-0`}
      >
        {added ? "Added!" : "Add To Cart"}
      </button>
    </div>
  );
}
