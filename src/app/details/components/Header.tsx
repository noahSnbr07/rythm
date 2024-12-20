import React from "react";

export default function Header({ title }: { title: string }) {
  return (
    <div className="flex flex-1 items-center justify-center truncate rounded-md bg-stack px-2 font-bold">
      <p className="truncate">{title}</p>
    </div>
  );
}
