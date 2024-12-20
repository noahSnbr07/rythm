"use client";

import PageContainer from "@/app/components/page-container";
import useSongTemplate from "../hooks/use-song-template.tsx";
import CoverImage from "./components/cover-image";
import CustomHeader from "./components/custom-header";
import { useState } from "react";
import Song from "@/types/song";
import SongCredentialsInputs from "./components/song-credentials-inputs";
import PublishButton from "./components/publish-button";
import { redirect } from "next/navigation.js";

export default function Page() {
  const { songTemplate } = useSongTemplate();
  const [allowEdit] = useState<boolean>(false);
  const [pending, setPending] = useState<boolean>(false);

  //return if missing videoID
  if (!songTemplate?.videoID || songTemplate.videoID.length < 1)
    redirect("/upload/find");

  const [newSong, setNewSong] = useState<Song>({
    id: "",
    videoID: songTemplate?.videoID || "",
    title: songTemplate?.title || "",
    artist: songTemplate?.artist || "",
    explicit: false,
    bannerURL: songTemplate?.thumbnailURL || "",
    audioURL: "",
    duration: 0,
    release: "",
    published: "",
    views: 0,
    likes: 0,
  });

  return (
    <PageContainer
      priorityClassName="justify-between p-4 gap-4"
      customHeaderJSX={<CustomHeader title={songTemplate?.title || ""} />}
    >
      <CoverImage song={newSong} />

      <SongCredentialsInputs
        allowEdit={allowEdit}
        song={newSong}
        setSong={setNewSong}
      />

      <PublishButton pending={pending} setPending={setPending} song={newSong} />
    </PageContainer>
  );
}
