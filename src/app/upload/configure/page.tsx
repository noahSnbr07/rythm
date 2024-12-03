"use client";

import PageContainer from "@/app/components/page-container";
import useSongTemplate from "../hooks/use-song-template.tsx";
import CoverImage from "./components/cover-image";
import CustomHeader from "./components/custom-header";

export default function page() {
  const { songTemplate } = useSongTemplate();

  return (
    <PageContainer
      customHeaderJSX={<CustomHeader title={songTemplate?.title || ""} />}
    >
      <CoverImage src={songTemplate?.thumbnailURL || ""} />
    </PageContainer>
  );
}
