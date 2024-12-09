import Song from "@/types/song";
import Image from "next/image";

export default function CoverImage({ song }: { song: Song }) {

  return (
    <div className="flex gap-4">
      <audio
        src={song.audioURL || ""} />
      <Image
        className="aspect-square rounded-xl object-cover"
        src={song.bannerURL}
        alt="Cover Image"
        title="Cover Image"
        height={256}
        width={256}
      />
    </div>
  );
}
