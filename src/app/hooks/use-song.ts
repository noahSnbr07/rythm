import { useContext } from "react";
import { SongContext } from "../context/song-context";

export default function useSong() {
  const songContext = useContext(SongContext);

  if (!songContext)
    throw new Error("[useSong()] must be used within its provider element");
  else return songContext;
}
