import getColors from "get-image-colors";

export async function getDominantColor(url: string): Promise<string | null> {
  try {
    const fetchPath: string = `${process.env.NEXT_PUBLIC_BASE_URL}/${url}`;

    // Fetch the image
    const response = await fetch(fetchPath);
    console.log(`Fetching image from: ${fetchPath}`);

    if (!response.ok) {
      console.error("Failed to fetch the image.");
      return null;
    }

    const buffer = await response.arrayBuffer();

    // Use the buffer directly with getColors
    const colors = await getColors(Buffer.from(buffer), "image/jpeg"); // Specify the format if needed
    const dominantColor = colors[0].hex("rgb");

    console.log(`#################### \nDominant Color: ${dominantColor} \n####################`);
    return dominantColor;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}