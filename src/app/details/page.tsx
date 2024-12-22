"use client";

import PageContainer from "@/app/components/page-container";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import useSong from "../hooks/use-song";
import SongAssigner from "./components/song-assigner";
import Cover from "./components/cover";
import Header from "./components/header";

const ActualPage = () => {
  const searchParams = useSearchParams();
  const id: string | null = searchParams.get("id");

  const { song, setSong } = useSong();

  return (
    <PageContainer
      priorityClassName="p-0"
      hideOuter>
      <Header title={song.title} />

      {/* fetch song and assign it to global app context */}
      <SongAssigner id={id || ""} setSong={setSong} />


      <div className="flex size-full flex-col gap-4 p-4">

        <Cover src={song.bannerURL} />

      </div>
    </PageContainer>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<PageContainer hideOuter> <p> loading ... </p>  </PageContainer>}>
      <ActualPage />
    </Suspense>
  );
}
