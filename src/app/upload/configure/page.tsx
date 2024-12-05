"use client";

import PageContainer from "@/app/components/page-container";
import useSongTemplate from "../hooks/use-song-template.tsx";
import CoverImage from "./components/cover-image";
import CustomHeader from "./components/custom-header";
import GetSongButton from "./components/get-song-button";
import { useEffect, useState } from "react";
import Song from "@/types/song";
import SongCredentialsInputs from "./components/song-credentials-inputs";
import usePending from "../hooks/use-pending";
import PublishButton from "./components/publish-button";

export default function Page() {
  const { songTemplate } = useSongTemplate();
  const [allowEdit] = useState<boolean>(false);
  const [pending, togglePending] = usePending();
  const [preloaded, setPreloaded] = useState<boolean>(false);

  const [newSong, setNewSong] = useState<Song>({
    id: "",
    videoID: "",
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

  useEffect(() => {
    console.log(newSong);
  }, [newSong]);

  return (
    <PageContainer
      priorityClassName="justify-between p-4 gap-4"
      customHeaderJSX={<CustomHeader title={songTemplate?.title || ""} />}
    >
      <CoverImage src={songTemplate?.thumbnailURL || ""} />

      <SongCredentialsInputs
        allowEdit={allowEdit}
        song={newSong}
        setSong={setNewSong}
      />

      <GetSongButton
        preloaded={preloaded}
        setPreloaded={setPreloaded}
        pending={pending}
        togglePending={togglePending}
        videoID={songTemplate?.videoID || ""}
        setSong={setNewSong}
      />

      <PublishButton song={newSong} />
    </PageContainer>
  );
}
