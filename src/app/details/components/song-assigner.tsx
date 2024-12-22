import getSongById from "@/app/services/database/get-song-by-id";
import Song from "@/types/song";
import React, { Dispatch, SetStateAction } from "react";

export default function SongAssigner({
  id,
  song,
  setSong,
}: {
  id: string;
  song: Song;
  setSong: Dispatch<SetStateAction<Song>>;
}) {
  React.useEffect(
    function (): void {
      if (!id) return console.error("No ID found in search params");

      async function fetchSong() {
        const song: Song = await getSongById(id ? id : "");
        if (!song) console.error("error occurred during fetching");
        setSong(song);
      }

      fetchSong();
    },
    [id] as any[],
  );

  return <></>;
}
