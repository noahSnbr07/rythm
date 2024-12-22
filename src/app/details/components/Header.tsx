import { back, more } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header({ title }: { title: string }) {
  return (
    <div className="w-full p-4 bg-gradient-to-b from-black to-transparent opacity-75 flex justify-between items-center">
      <Link href={`/home`}>
        <Image
          src={back}
          title="navigate back"
          alt="back arrow"
          height={24}
          width={24}
          className="opacity-50"
        />
      </Link>

      <p className="font-italic text-sm text-muted">
        {title}
      </p>

      <Image
        src={more}
        title="navigate back"
        alt="back arrow"
        height={24}
        width={24}
        className="opacity-50"
      />

    </div>
  );
}