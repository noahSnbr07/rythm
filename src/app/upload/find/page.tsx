"use client";

import React, { useState } from "react";
import PageContainer from "../../components/page-container";
import HeaderInput from "./components/header-input";
import APIResponseSongTemplate from "@/types/api-response-song-template";
import TemplateList from "./components/template-list";

export default function Upload(): JSX.Element {
  const [query, setQuery] = useState<string>("");
  const [templates, setTemplates] = useState<APIResponseSongTemplate[]>([]);

  return (
    <PageContainer
      priorityClassName="p-4 flex flex-col gap-2"
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
