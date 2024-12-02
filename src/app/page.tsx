import { icon } from "@/assets/assets";
import Image from "next/image";
import React from "react";

export default function page(): JSX.Element {
  return (
    <div className="h-dvh w-dvh flex justify-center items-center flex-col gap-8">
      <Image
        src={icon}
        alt="Rythm Community Icon"
        title="Icon"
        loading="eager"
        height={128}
        width={128}
      />
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-bold"> Rythm </h1>
        <p className="text-muted font-italic"> comming soon ... </p>
      </div>
    </div>
  );
}