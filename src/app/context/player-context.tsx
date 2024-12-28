"use client";

import Player from "@/types/player";
import React, { Dispatch, SetStateAction, useState } from "react";

interface PlayerContextInterface {
  player: Player;
  setPlayer: Dispatch<SetStateAction<Player>>;
}

export const PlayerContext = React.createContext<PlayerContextInterface | null>(
  null,
);

const initialValue: Player = {
  duration: 0,
  progress: 0,
  playing: false,
  mode: "repeat",
  togglePlayer: () => {},
  play: () => {},
  pause: () => {},
  skipPrev: () => {},
  skipNext: () => {},
};

export default function PlayerContextProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [player, setPlayer] = useState<Player>(initialValue);

  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
}
