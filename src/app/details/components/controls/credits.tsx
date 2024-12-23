import useSong from "@/app/hooks/use-song";
import React from "react";

export default function Credits() {
  const { song } = useSong();

  return (
    <div className="flex flex-col">
      <p className="font-bold text-lg"> {song.title} </p>
      <p className="font-italic text-sm"> {song.artist} </p>
    </div>
  );
}
