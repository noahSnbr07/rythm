// app/upload/layout.tsx
import React from "react";
import SongTemplateContextProvider from "./context/song-template-context";

export default function UploadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SongTemplateContextProvider>{children}</SongTemplateContextProvider>;
}