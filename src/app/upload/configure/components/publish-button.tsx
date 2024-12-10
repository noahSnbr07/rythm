import getYouTubeMetaData from "@/app/services/get-youtube-meta-data";
import publishSong from "@/app/services/publish-song";
import Song from "@/types/song";
import { redirect } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";

interface PublishButtonProps {
  song: Song;
  pending: boolean;
  setPending: Dispatch<SetStateAction<boolean>>;
}

export default function PublishButton({
  song,
  setPending,
  pending,
}: PublishButtonProps) {
  async function attemptUpload(): Promise<void> {
    setPending(true);

    const newSong = await getYouTubeMetaData(song.videoID);
    console.log(newSong)

    //exit if un scraped song
    if (!newSong) redirect("/upload/find");

    await publishSong(newSong);
    setPending(false);
    redirect("/upload/verify");
  }

  return (
    <button
      onClick={attemptUpload}
      className="w-full rounded-lg bg-accent p-4 font-bold text-xl"
    >
      {pending ? "loading ..." : "Publish"}
    </button>
  );
}
