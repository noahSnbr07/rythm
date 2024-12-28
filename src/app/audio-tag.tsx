"use client";
import React from 'react'
import useSong from './hooks/use-song';
import usePlayer from './hooks/use-player';
import useAudioRef from './hooks/use-audio-ref';

export default function AudioTag() {
   const { song } = useSong();
   const { player } = usePlayer();
   const { audioRef } = useAudioRef();

   return (
      <audio
         ref={audioRef}
         autoPlay
         src={song.audioURL} />
   );
}
