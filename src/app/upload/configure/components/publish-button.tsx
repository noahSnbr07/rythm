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
    try {
      const newSong = await getYouTubeMetaData(song.videoID);
      if (!newSong) redirect("/upload/find");

      await publishSong(newSong as Song);
      redirect(`/upload/verify/`);
    } catch (error) {
      console.error("Error during upload:", error);
      alert("An error occurred during upload. Please try again.");
    } finally {
      setPending(false);
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
