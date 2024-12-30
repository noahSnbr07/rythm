"use client";

import Player from "@/types/player";
import React, { Dispatch, SetStateAction, useState } from "react";
import useAudioRef from "../hooks/use-audio-ref";


interface PlayerContextInterface {
  player: Player;
  setPlayer: Dispatch<SetStateAction<Player>>;
}

export const PlayerContext = React.createContext<PlayerContextInterface | null>(
  null,
);


export default function PlayerContextProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {

  const { audioRef } = useAudioRef();

  function togglePlayerLOCAL(): void {
    const isPlaying = !audioRef.current?.paused;
    if (isPlaying) audioRef.current?.pause();
    else audioRef.current.play();
    setPlayer((prev: Player) => ({ ...prev, playing: !isPlaying }));
  }

  const initialValue: Player = {
    duration: 0,
    progress: 0,
    playing: false,
    mode: "repeat",
    togglePlayer: () => togglePlayerLOCAL(),
    play: () => { },
    pause: () => { },
    skipPrev: () => { },
    skipNext: () => { },
  };

  const [player, setPlayer] = useState<Player>(initialValue);

  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
}
