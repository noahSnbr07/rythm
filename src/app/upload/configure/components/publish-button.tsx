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

export default function PublishButton({ song, setPending, pending }: PublishButtonProps) {

  async function attemptUpload(): Promise<void> {

    //prevent flooding requests
    setPending(true);

    //construct new song from api response
    const newSong = await getYouTubeMetaData(song.videoID);

    //early return if invalid response
    if (!newSong) redirect("/upload/find");

    //upload raw blob
    await publishSong(newSong as Song);

    //end
    setPending(false);
    redirect(`/upload/verify/`);
  }

  return (
    <button
      onClick={attemptUpload}
      className="w-full rounded-lg bg-accent p-4 font-bold text-xl"
    >
      {pending ? 'loading ...' : 'Publish'}
    </button>
  );
}