import getYouTubeMetaData from "@/app/services/get-youtube-meta-data";
import publishSong from "@/app/services/publish-song";
import Song from "@/types/song";
import { redirect } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";

interface PublishButtonProps {
  song: Song;
  setSong: Dispatch<SetStateAction<Song>>;
  pending: boolean;
  setPending: Dispatch<SetStateAction<boolean>>;
}

export default function PublishButton({
  song,
  setSong,
  setPending,
  pending,
}: PublishButtonProps) {
  async function attemptUpload(): Promise<void> {
    setPending(true);
    let successful: boolean = true;
    try {
      const newSong = await getYouTubeMetaData(song.videoID);
      setSong(newSong);

      //exit if un scraped song
      if (!newSong) redirect("/upload/find");

      await publishSong(song);

      successful = true;
    } catch (error) {
      if (error instanceof Error) {
        if (error) successful = false;
      }
    } finally {
      setPending(false);
      redirect(`/upload/verify?success=${String(successful)}`);
    }
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
