"use server";

import Song from "@/types/song";
import React from "react";
import SongLink from "./song-link";

export default async function SongList({ songs }: { songs: Song[] }) {
  return (
    <div className="flex w-full flex-col gap-2">
      <p className="font-italic text-muted"> songs - {songs.length} </p>
      <div className="flex w-full gap-2 overflow-x-auto rounded-lg">
        {songs.map((song: Song) => (
          <SongLink song={song} key={song.id} />
        ))}
      </div>
    </div>
  );
}
