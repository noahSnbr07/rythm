"use server";

import Song from "@/types/song";

export default async function publishSong(song: Song) {
  console.log(song);
}
