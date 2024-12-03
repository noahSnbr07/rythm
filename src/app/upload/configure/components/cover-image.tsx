import Image from "next/image";

export default function CoverImage({ src }: { src: string }) {
  return (
    <Image
      className="aspect-square rounded-xl object-cover"
      src={src}
      alt="Cover Image"
      title="Cover Image"
      height={256}
      width={256}
    />
  );
}
