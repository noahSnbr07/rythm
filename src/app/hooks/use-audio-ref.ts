import { useContext } from "react";
import { RefContext } from "../context/ref-context";

export default function useAudioRef() {
  const context = useContext(RefContext);

  if (!context)
    throw new Error("[useAudioRef()] must be used within its provider element");
  else return context;
}
