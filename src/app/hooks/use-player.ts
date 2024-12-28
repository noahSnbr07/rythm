import { useContext } from "react";
import { PlayerContext } from "../context/player-context";

export default function usePlayer() {
   const context = useContext(PlayerContext);

   if (!context)
      throw new Error("[usePlayer()] must be used within its provider element");
   else return context;
}
