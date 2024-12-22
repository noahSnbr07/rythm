"use client";

import PageContainer from "@/app/components/page-container";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import useSong from "../hooks/use-song";
import SongAssigner from "./components/song-assigner";
import Cover from "./components/cover";
import { getDominantColor } from "../services/get-dominant-color";
import useEnviroment from "../hooks/use-enviroment";
import ColorAssigner from "./components/color-assigner";

const ActualPage = () => {
  const searchParams = useSearchParams();
  const id: string | null = searchParams.get("id");

  const { song, setSong } = useSong();
  const { color, setColor } = useEnviroment();

  return (
    <PageContainer customCSS={{ background: color }} hideFooter>
      {/* fetch song and assign it to global app context */}
      <SongAssigner id={id || ""} song={song} setSong={setSong} />

      {/* use ssr+fs to download, analyze and predict dominant color */}
      <ColorAssigner url={song.bannerURL} setColor={setColor} />

      <Cover src={song.bannerURL} />
    </PageContainer>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ActualPage />
    </Suspense>
  );
}
