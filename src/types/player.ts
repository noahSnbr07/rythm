export default interface Player {
   duration: number;
   progress: number;
   playing: boolean;
   mode: "repeat" | "linear" | "shuffle";
   togglePlayer: () => void; play: () => void;
   pause: () => void;
   skipPrev: () => void;
   skipNext: () => void;
}