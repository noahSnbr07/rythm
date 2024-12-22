import Image from "next/image";
import React from "react";

export default function Cover({ src }: { src: string }) {
  const sourceUnpresent: boolean = !src || src.length < 1;

  if (sourceUnpresent) return <></>;

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
