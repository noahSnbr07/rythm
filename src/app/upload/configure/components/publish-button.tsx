import publishSong from "@/app/services/publish-song";
import Song from "@/types/song";
import React from "react";

export default function PublishButton({ song }: { song: Song }) {
  return (
    <button
      onClick={() => publishSong(song)}
      className="w-full rounded-lg bg-accent p-4 font-bold text-xl"
    >
      Publish to Rythm
    </button>
  );
}
