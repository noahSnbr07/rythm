import { prev, next, play } from "@/assets/assets";
import Image from "next/image";
import React from "react";

export default function Buttons() {
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

      <button className="rounded-full bg-muted p-4">
        <Image
          src={play}
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
