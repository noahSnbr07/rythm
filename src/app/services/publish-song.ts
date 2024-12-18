"use client";

import { put } from "@vercel/blob";
import Song from "@/types/song";
import supabase from "../supabase/supabase";
import parseDuration from "../functions/parse-duration";
import { v4 } from "uuid";

export default async function publishSong(song: Song): Promise<string> {
  try {
    // Validate the audio URL
    if (!song.audioURL.includes("http"))
      throw new Error("Invalid audioURL format.");

    console.log("Fetching audio file from:", song.audioURL);
    const response: Response = await fetch(song.audioURL);
    if (!response.ok)
      throw new Error(`Failed to download song from ${song.audioURL}`);

    // Fetch raw mp3 file from external source
    const raw: Blob = await response.blob();
    console.log("File size:", raw.size);

    // Construct file name
    const fileName: string = `${song.title
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase()}-${Date.now()}.mp3`.trim();

    // Upload file to cloud storage
    const uploadResult = await put(fileName, raw, { access: "public" });
    console.log(uploadResult);

    const now = new Date().toISOString().slice(0, 19).replace('T', ' ');


    // Insert the song into Supabase
    const { data, error } = await supabase.from("songs").insert({
      id: v4(), // Generate a valid UUID
      title: song.title,
      published: now,
      audioURL: song.audioURL,
      artist: song.artist,
      videoID: song.videoID,
      explicit: song.explicit,
      bannerURL: song.bannerURL,
      duration: parseDuration(String(song.duration)) || "",
      release: song.release,
      views: song.views,
      likes: song.likes,
    });

    if (error) throw error;

    console.log("Song inserted successfully:", data);

    return fileName;
  } catch (error) {
    console.error("Error publishing song:", error);
    throw error;
  }
}
