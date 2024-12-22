"use server";

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import getColors from "get-image-colors";

// Helper to get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function getDominantColor(url: string): Promise<string | null> {
  try {

    const fetchPath: string = `${url}`
    // Fetch the image and save it locally
    const response = await fetch(fetchPath);

    console.log(`path: ${fetchPath}`);

    const buffer = await response.arrayBuffer();
    const tempFilePath = path.join(__dirname, "temp-image.jpg");
    await fs.writeFile(tempFilePath, Buffer.from(buffer));

    const colors = await getColors(tempFilePath);
    const dominantColor = colors[0].hex("rgb");


    // Cleanup the temp file
    await fs.unlink(tempFilePath);

    console.log(`#################### \ndominantColor: ${dominantColor} \n####################`);
    return dominantColor;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}