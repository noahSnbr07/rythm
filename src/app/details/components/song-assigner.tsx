import usePlayer from "@/app/hooks/use-player";
import getSongById from "@/app/services/database/get-song-by-id";
import Player from "@/types/player";
import Song from "@/types/song";
import React, { Dispatch, SetStateAction } from "react";

export default function SongAssigner({
  id,
  setSong,
}: {
  id: string;
  setSong: Dispatch<SetStateAction<Song>>;
}) {


  const { player, setPlayer } = usePlayer();

  React.useEffect(
    function (): void {
      if (!id) return console.error("No ID found in search params");

      async function fetchSong() {
        const song: Song = await getSongById(id ? id : "");
        if (!song) console.error("error occurred during fetching");
        setSong(song);
        setPlayer((prev: Player) => ({ ...prev, duration: song.duration }))
      }

      fetchSong();
    },
    [id, setSong],
  );

  return <></>;
}
