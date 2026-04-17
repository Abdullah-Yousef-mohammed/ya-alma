import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function PUT(req: Request, { params }: { params: { id: string } }) {
   try {
      const { id } = await params; // Next.js 15 params API change
      
      const formData = await req.formData();
      const name = formData.get("name") as string;
      const description = formData.get("description") as string;
      const price = parseFloat(formData.get("price") as string) || 0;
      const inventory = parseInt(formData.get("inventory") as string) || 0;

      // Handle image upload if a new file is provided
      const existingImages = formData.getAll("existingImages") as string[];
      const newImageFiles = formData.getAll("images") as File[];
      const combinedImageUrls = [...existingImages];

      for (const imageFile of newImageFiles) {
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
               combinedImageUrls.push(`/uploads/${filename}`);
            } catch(e) {
               console.error("Error saving image", e);
            }
         }
      }

      let updateData: any = {
         name,
         description: description || "A luxurious oriental fragrance.",
         price,
         inventory,
      };

      if (combinedImageUrls.length > 0) {
         updateData.images = JSON.stringify(combinedImageUrls);
      }

      const product = await prisma.product.update({
         where: { id },
         data: updateData
      });

      return NextResponse.json({ success: true, product });
   } catch (error: any) {
      console.error("Product Update Error:", error);
      return NextResponse.json({ success: false, error: error.message || "Failed to update product" }, { status: 500 });
   }
}
