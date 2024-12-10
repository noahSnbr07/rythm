"use client";

import { put } from "@vercel/blob";
import Song from "@/types/song";

export default async function publishSong(song: Song): Promise<string> {
  try {
    if (!song.audioURL.startsWith("http")) {
      throw new Error("Invalid audioURL format.");
    }

    console.log("Fetching audio file from:", song.audioURL);
    const response: Response = await fetch(song.audioURL);
    if (!response.ok) throw new Error(`Failed to download song from ${song.audioURL}`);


    const raw: Blob = await response.blob();
    console.log(raw.size);

    const fileName: string = `${song.title
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase()}-${Date.now()}.mp3`.trim();

    await put(fileName, raw, { access: "public" });

    return fileName;
  } catch (error) {
    console.error(`Error publishing song:`, error);
    throw error;
  }
}