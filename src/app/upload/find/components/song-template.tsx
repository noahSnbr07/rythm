import APIResponseSongTemplate from "@/types/api-response-song-template";
import Image from "next/image";
import React from "react";
import useSongTemplate from "../../hooks/use-song-template.tsx";
import { redirect } from "next/navigation.js";

export default function SongTemplate({
  template,
}: {
  template: APIResponseSongTemplate;
}): JSX.Element {
  const { thumbnailURL, title, artist } = template;
  const { setSongTemplate } = useSongTemplate();

  function navigateToConfigurationPage() {
    setSongTemplate(template);
    redirect(`/upload/configure/`);
  }

  return (
    <button
      onClick={navigateToConfigurationPage}
      className="flex gap-2 w-full rounded-lg bg-stack p-2 border-2 border-transparent focus:border-accent transition-all"
    >
      <Image
        width={64}
        height={64}
        src={thumbnailURL}
        className="aspect-square rounded-md object-cover"
        alt={`Cover of Template "${title}"`}
      />
      <div className="flex w-full flex-col items-start truncate">
        <p className="font-bold">{title}</p>{" "}
        <p className="font-italic text-sm text-muted">{artist}</p>
      </div>
    </button>
  );
}