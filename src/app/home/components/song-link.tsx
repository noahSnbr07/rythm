"use server";

import Song from "@/types/song";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function SongLink({ song }: { song: Song }) {
  return (
    <Link
      href={`/details?id=${song.id}`}
      className="flex w-[128px] flex-col gap-2 rounded-md p-2 transition-all hover:bg-stack"
    >
      <Image
        className="aspect-square rounded-md bg-stack object-cover"
        src={song.bannerURL}
        height={128}
        width={128}
        alt={`${song.title} Banner`}
        title={`${song.title} Banner`}
      />
      <div className="flex w-full flex-col truncate">
        <p className="text-sm truncate font-bold"> {song.title} </p>
        <p className="truncate font-italic text-sm text-muted">
          {" "}
          {song.artist}{" "}
        </p>
      </div>
    </Link>
  );
}
