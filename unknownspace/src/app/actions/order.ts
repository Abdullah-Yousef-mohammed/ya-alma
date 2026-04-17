"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createOrder(formData: FormData) {
   const productId = formData.get("productId") as string;
   const fullName = formData.get("fullName") as string || "Guest User";
   const phone = formData.get("phone") as string || "No Phone";
   const address = formData.get("address") as string || "No Address";
   const quantity = parseInt(formData.get("quantity") as string) || 1;

   const product = await prisma.product.findUnique({ where: { id: productId }});
   if (!product) throw new Error("Product not found");
   
   if (product.inventory < quantity) {
      throw new Error("Not enough stock");
   }

   const amount = product.price * quantity;

   // 1. Create the order
   await prisma.order.create({
      data: {
         totalAmount: amount,
         shippingAddress: address,
         phone: phone,
         user: undefined, // guest checkout
         status: "UNPAID",
         paymentMethod: "COD",
         orderItems: {
            create: [
               { productId, quantity, price: product.price }
            ]
         }
      }
   });

   // 2. Reduce inventory by quantity
   await prisma.product.update({
      where: { id: productId },
      data: { inventory: product.inventory - quantity }
   });

   revalidatePath("/admin/products");
   revalidatePath("/admin/orders");
   revalidatePath("/");
   
   return { success: true };
}
