import { getDominantColor } from "@/app/services/get-dominant-color";
import React, { Dispatch, SetStateAction } from "react";

export default function ColorAssigner({
  url,
  setColor,
}: {
  url: string;
  setColor: Dispatch<SetStateAction<string>>;
}) {
  React.useEffect(
    function (): void {
      async function setDominantColor(): Promise<void> {
        const dominantColor: string | null = await getDominantColor(url);

        if (!dominantColor) return;

        setColor(dominantColor);
      }

      setDominantColor();
    },
    [url, setColor],
  );

  return <></>;
}
