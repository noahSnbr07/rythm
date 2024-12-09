import getYouTubeSongsByQuery from "@/app/services/get-youtube-songs-by-query";
import { search } from "@/assets/assets";
import APIResponseSongTemplate from "@/types/api-response-song-template";
import Image from "next/image";
import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

interface HeaderInputProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  setTemplateSongs: Dispatch<SetStateAction<APIResponseSongTemplate[]>>;
}

export default function HeaderInput({
  value,
  setValue,
  setTemplateSongs,
}: HeaderInputProps): JSX.Element {
  const fetchEntries = async () => {
    setValue("");
    const res = await getYouTubeSongsByQuery(value);
    if (!res || res.length < 0) console.error("an error occurred fetching templates");

    else setTemplateSongs(res);
  };

  return (
    <div className="flex flex-1 gap-2 rounded-lg">
      <input
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setValue(event.target.value)
        }
        placeholder="query"
        className="flex-1 rounded-lg bg-stack px-4 py-2 font-bold text-lg"
      />
      <button
        onClick={fetchEntries}
        className="grid aspect-square h-12 place-content-center rounded-lg bg-stack"
      >
        <Image
          className="opacity-50"
          src={search}
          alt="Search Icon"
          title="Search Icon"
        />
      </button>
    </div>
  );
}
