import getYouTubeDownloadURL from "@/app/services/get-youtube-download-url";
import getYouTubeMetaData from "@/app/services/get-youtube-meta-data";
import Song from "@/types/song";
import React, { CSSProperties, Dispatch, SetStateAction } from "react";

interface GetSongButtonProps {
  pending: boolean;
  preloaded: boolean;
  setPreloaded: Dispatch<SetStateAction<boolean>>;
  togglePending: () => void;
  videoID: string;
  setSong: Dispatch<SetStateAction<Song>>;
}
export default function GetSongButton({
  setSong,
  videoID,
  pending,
  togglePending,
  preloaded,
  setPreloaded,
}: GetSongButtonProps) {
  const getData = async () => {
    if (pending) return;
    togglePending();
    const result = await getYouTubeMetaData(videoID);

    if (result) {
      const { snippet, contentDetails, statistics } = result;

      const downloadURL: string = await getYouTubeDownloadURL(result.id);

      console.log(result);

      setSong((prev: Song) => ({
        ...prev,
        id: result.etag,
        videoID: result.id,
        title: snippet.title,
        audioURL: downloadURL,
        bannerURL: result.snippet.thumbnails.maxres.url,
        artist: snippet.channelTitle,
        release: snippet.publishedAt,
        duration: contentDetails.duration,
        views: Number(statistics.viewCount),
        likes: Number(statistics.likeCount),
        published: String(new Date()),
      }));
      setPreloaded(true);
    }
    togglePending();
  };

  if (preloaded) return <></>;

  return (
    <button
      style={{ opacity: pending ? "25" : "100" } as CSSProperties}
      onClick={getData}
      className="w-full rounded-lg bg-accent p-4 font-bold text-xl"
    >
      {" "}
      {pending ? "loading ..." : "Preload Song"}
    </button>
  );
}
