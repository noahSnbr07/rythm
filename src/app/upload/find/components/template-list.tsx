import APIResponseSongTemplate from "@/types/api-response-song-template";
import React from "react";
import SongTemplate from "./song-template";

export default function TemplateList({
  templates,
}: {
  templates: APIResponseSongTemplate[];
}) {
  return templates.length > 0 ? (
    templates.map((template: APIResponseSongTemplate, index: number) => {
      return <SongTemplate key={index} template={template} />;
    })
  ) : (
    <p className="font-italic text-sm text-muted"> Enter Query </p>
  );
}
