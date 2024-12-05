import Song from "@/types/song";
import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

interface SongCredentialsInputsProps {
  allowEdit: boolean;
  song: Song;
  setSong: Dispatch<SetStateAction<Song>>;
}

export default function SongCredentialsInputs({
  // allowEdit,
  song,
  setSong,
}: SongCredentialsInputsProps) {
  return (
    <div className="flex w-full flex-col gap-2 rounded-lg bg-stack p-4">
      <input
        type="text"
        value={song.title}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setSong((prev: Song) => ({ ...prev, title: event.target.value }));
        }}
        placeholder="title"
        className="rounded-md bg-stack px-4 py-2"
      />
      <input
        type="text"
        value={song.artist}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setSong((prev: Song) => ({ ...prev, artist: event.target.value }));
        }}
        placeholder="artist"
        className="rounded-md bg-stack px-4 py-2"
      />
    </div>
  );
}
