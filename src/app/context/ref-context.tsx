"use client";

import React, { createContext, ReactNode, RefObject, useRef } from "react";

interface RefContextInterface {
  audioRef: RefObject<HTMLAudioElement>;
}

export const RefContext = createContext<RefContextInterface | undefined>(
  undefined,
);

export default function RefContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <RefContext.Provider value={{ audioRef }}>{children}</RefContext.Provider>
  );
}
