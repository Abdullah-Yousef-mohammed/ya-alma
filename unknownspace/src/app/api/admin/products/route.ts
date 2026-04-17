import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(req: Request) {
   try {
      const formData = await req.formData();
      const name = formData.get("name") as string;
      const description = formData.get("description") as string;
      const price = parseFloat(formData.get("price") as string) || 0;
      const inventory = parseInt(formData.get("inventory") as string) || 0;

      // Handle image upload
      const imageFiles = formData.getAll("images") as File[];
      const imageUrls: string[] = [];

      for (const imageFile of imageFiles) {
         if (imageFile && imageFile.size > 0) {
            try {
               const bytes = await imageFile.arrayBuffer();
               const buffer = Buffer.from(bytes);
               const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
               const ext = imageFile.name.split('.').pop() || 'jpg';
               const filename = `${uniqueSuffix}.${ext}`;
               
               const uploadDir = path.join(process.cwd(), "public/uploads");
               await mkdir(uploadDir, { recursive: true });
               
               const filepath = path.join(uploadDir, filename);
               await writeFile(filepath, buffer);
               imageUrls.push(`/uploads/${filename}`);
            } catch(e) {
               console.error("Error saving image", e);
            }
         }
      }

      // Guarantee at least one category exists
      let category = await prisma.category.findFirst();
      if (!category) {
         category = await prisma.category.create({ data: { name: "Perfumes" } });
      }

      const product = await prisma.product.create({
         data: {
            name,
            description: description || "A luxurious oriental fragrance.",
            price,
            inventory,
            categoryId: category.id,
            images: JSON.stringify(imageUrls),
         }
      });

      return NextResponse.json({ success: true, product });
   } catch (error: any) {
      console.error("Product Creation Error:", error);
      return NextResponse.json({ success: false, error: error.message || "Failed to create product" }, { status: 500 });
   }
}
