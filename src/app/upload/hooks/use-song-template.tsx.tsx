import { useContext } from "react";
import { SongTemplateContext } from "../context/song-template-context";

export default function useSongTemplate() {
  const context = useContext(SongTemplateContext);

  if (!context) {
    throw new Error(
      "useSongTemplate must be used within a SongTemplateContextProvider",
    );
  }

  return context;
}
