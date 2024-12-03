"use client";

import React, { useState } from "react";
import PageContainer from "../../components/page-container";
import HeaderInput from "./components/header-input";
import APIResponseSongTemplate from "@/types/api-response-song-template";
import TemplateList from "./components/template-list";

export default function upload(): JSX.Element {
  const [query, setQuery] = useState<string>("");
  const [templates, setTemplates] = useState<APIResponseSongTemplate[]>([]);

  return (
    <PageContainer
      priorityClassName="p-4 grid gap-4 grid-cols-2"
      hideLogo
      customHeaderJSX={
        <HeaderInput
          value={query}
          setValue={setQuery}
          setTemplateSongs={setTemplates}
        />
      }
    >
      <TemplateList templates={templates} />
    </PageContainer>
  );
}
