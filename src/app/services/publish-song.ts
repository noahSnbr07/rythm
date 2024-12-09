"use server";

import { put } from "@vercel/blob";
import Song from "@/types/song";

export default async function publishSong(song: Song): Promise<string> {
  try {
    if (!song.audioURL.startsWith("http")) {
      throw new Error("Invalid audioURL format.");
    }

    console.log("Fetching audio file from:", song.audioURL);
    const response = await fetch(song.audioURL);
    if (!response.ok) {
      throw new Error(`Failed to download song from ${song.audioURL}`);
    }

    const raw = await response.blob();

    const fileName = `${song.title
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase()}-${Date.now()}.mp3`;

    const uploadedFile = await put(fileName, raw, { access: "public" });
    console.log("Uploaded file URL:", uploadedFile.url);

    return fileName;
  } catch (error) {
    console.error(`Error publishing song "${song.title}":`, error);
    throw error;
  }
}