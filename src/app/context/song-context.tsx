"use client";

import React, {
  Dispatch,
  SetStateAction,
  useState,
  createContext,
} from "react";
import Song from "@/types/song";

// Define the type for the context
interface SongContextType {
  song: Song;
  setSong: Dispatch<SetStateAction<Song>>;
}

// Create the context
export const SongContext = createContext<SongContextType | null>(null);

// Define the initial value for the song
const initialValue: Song = {
  id: "",
  videoID: "",
  title: "",
  artist: "",
  explicit: false,
  bannerURL: "",
  audioURL: "",
  duration: 0,
  release: "",
  published: "",
  views: 0,
  likes: 0,
};

// Provider component
export default function SongContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [song, setSong] = useState<Song>(initialValue);

  return (
    <SongContext.Provider value={{ song, setSong }}>
      {children}
    </SongContext.Provider>
  );
}
