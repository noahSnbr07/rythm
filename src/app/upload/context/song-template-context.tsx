"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import APIResponseSongTemplate from "@/types/api-response-song-template";

interface SongTemplateContextInterface {
  songTemplate: APIResponseSongTemplate | undefined;
  setSongTemplate: Dispatch<
    SetStateAction<APIResponseSongTemplate | undefined>
  >;
}

// Create Context with the interface
export const SongTemplateContext =
  React.createContext<SongTemplateContextInterface | null>(null);

// Context Provider Component
export default function SongTemplateContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [songTemplate, setSongTemplate] = useState<
    APIResponseSongTemplate | undefined
  >(undefined);

  return (
    <SongTemplateContext.Provider value={{ songTemplate, setSongTemplate }}>
      {children}
    </SongTemplateContext.Provider>
  );
}
