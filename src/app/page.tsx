import { icon } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page(): JSX.Element {
  return (
    <div className="flex h-dvh flex-col items-center justify-between gap-8 p-8">
      <h1 className="font-bold text-3xl underline"> Rythm </h1>
      <div className="relative">
        <Image
          priority
          src={icon}
          alt="Rythm Community Icon"
          title="Icon"
          loading="eager"
          height={128}
          width={128}
          className="rounded-full shadow-2xl brightness-150 drop-shadow-lg"
        />
        <div className="absolute bottom-2 right-2 h-6 w-6 animate-ping rounded-full border-4 border-background bg-orange-500"></div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <Link
          className="w-full rounded-md bg-stack px-16 py-2 text-xl"
          href={"/upload/find"}
        >
          Upload
        </Link>
        <Link
          className="w-full rounded-md bg-stack px-16 py-2 text-xl"
          href={"/home"}
        >
          Home
        </Link>
      </div>

      <p className="font-italic text-xl text-muted"> Noah 💯 </p>
    </div>
  );
}
