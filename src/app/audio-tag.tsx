"use client";
import React from "react";
import useSong from "./hooks/use-song";
import useAudioRef from "./hooks/use-audio-ref";

export default function AudioTag() {
  const { song } = useSong();
  const { audioRef } = useAudioRef();

  return <audio ref={audioRef} src={song.audioURL} />;
}