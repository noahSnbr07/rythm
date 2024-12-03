import { icon } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page(): JSX.Element {
  return (
    <div className="w-dvh flex h-dvh flex-col items-center justify-center gap-8">
      <Image
        src={icon}
        alt="Rythm Community Icon"
        title="Icon"
        loading="eager"
        height={128}
        width={128}
      />
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-xl"> Rythm </h1>
        <p className="font-italic text-muted"> comming soon ... </p>
      </div>
      <Link
        className="rounded-xl bg-stack px-16 py-4 font-bold text-xl"
        href={`/upload/find/`}
      >
        Upload
      </Link>
    </div>
  );
}
