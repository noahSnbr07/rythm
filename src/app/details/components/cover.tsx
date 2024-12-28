import { image } from "@/assets/assets";
import Image from "next/image";
import React from "react";

export default function Cover({ src }: { src: string }) {
  const sourceUnpresent: boolean = !src || src.length < 1;

  if (sourceUnpresent)
    return (
      <div className="grid aspect-square w-full place-content-center rounded-lg bg-stack">
        <Image
          priority
          className="animate-pulse opacity-25 duration-75"
          src={image}
          height={128}
          width={128}
          title="Cover Skeleton"
          alt="Cover Skeleton"
        />
      </div>
    );

  return (
    <div className="relative aspect-square w-full">
      <Image
        priority
        className="rounded-lg object-cover"
        src={src}
        layout="fill"
        title="Cover"
        alt="Cover"
      />
    </div>
  );
}
