import React from "react";
import Credits from "./credits";
import DurationIndicator from "./duration-indicator";
import Buttons from "./buttons";

export default function Controls() {
  return (
    <div className="flex w-full flex-col gap-4 rounded-md bg-stack p-4">
      <Credits />
      <DurationIndicator />
      <Buttons />
    </div>
  );
}
