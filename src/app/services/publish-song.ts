"use server";

import { put } from "@vercel/blob";
import Song from "@/types/song";

/** 
 * THIS FUNCTION SERVES TO UPLOAD THE SONGS RAW BLOB FILE TO VERCEL BUCKET
 * DO NOT IMPLEMENT ANY SIDE EFFECTS
 * KEEP IT PURE AND SERVER SIDE TO PREVENT EDGE CASES
 */

export default async function publishSong(song: Song): Promise<string> {
  try {
    //* Validate audioURL
    if (!song.audioURL.startsWith("http")) {
      throw new Error("Invalid audioURL format.");
    }

    //* Download blob
    const response = await fetch(song.audioURL);
    if (!response.ok) throw new Error(`Failed to download song from ${song.audioURL}`);

    const raw = await response.blob();

    //* Upload blob
    const fileName = `${song.title.replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").toLowerCase()}-${Date.now()}.mp3`;
    const uploadedFile = await put(fileName, raw, { access: "public" });

    console.log("Uploaded file URL:", uploadedFile.url);
    return fileName

  } catch (error) {
    console.error(`Error publishing song "${song.title}"`, error);
    throw error;
  }
}