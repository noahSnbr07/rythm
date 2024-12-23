import React from "react";

export default function DurationIndicator() {
  return (
    <div className="flex w-full flex-col gap-2">
      <input
        className="h-1 w-full appearance-none rounded-full bg-stack accent-accent"
        type="range"
        min={0}
        max={100}
        value={33}
      />
      <div className="flex w-full justify-between">
        <span> 00:00 </span>
        <span> 03:00 </span>
      </div>
    </div>
  );
}
