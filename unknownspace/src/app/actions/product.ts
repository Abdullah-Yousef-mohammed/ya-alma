"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProduct(formData: FormData) {
   const name = formData.get("name") as string;
   const description = formData.get("description") as string;
   const price = parseFloat(formData.get("price") as string) || 0;
   const inventory = parseInt(formData.get("inventory") as string) || 0;

   // Guarantee at least one category exists
   let category = await prisma.category.findFirst();
   if (!category) {
       category = await prisma.category.create({ data: { name: "Perfumes" } });
   }

   await prisma.product.create({
      data: {
         name,
         description: description || "A luxurious oriental fragrance.",
         price,
         inventory,
         categoryId: category.id,
         images: JSON.stringify(["/ph-1.jpg"]),
      }
   });

   revalidatePath("/admin/products");
   revalidatePath("/");
   redirect("/admin/products");
}
