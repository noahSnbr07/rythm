import usePlayer from "@/app/hooks/use-player";
import { prev, next, play, pause } from "@/assets/assets";
import Image from "next/image";
import React from "react";

export default function Buttons() {

  const { player } = usePlayer();

  return (
    <div className="flex w-full items-center justify-evenly">
      <button className="grid aspect-square h-12 place-content-center rounded-full bg-stack p-2">
        <Image
          src={prev}
          alt="Skip Prev"
          title="Skip Next"
          priority
          height={24}
          width={24}
        />
      </button>

      <button
        onClick={(): void => { player.togglePlayer() }}
        className="rounded-full bg-muted p-4">
        <Image
          src={player.playing ? pause : play}
          alt="Skip Prev"
          title="Skip Next"
          priority
          height={32}
          width={32}
        />
      </button>

      <button className="grid aspect-square h-12 place-content-center rounded-full bg-stack p-2">
        <Image
          src={next}
          alt="Skip Prev"
          title="Skip Next"
          priority
          height={24}
          width={24}
        />
      </button>
    </div>
  );
}
