import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rythm Community",
    short_name: "Rythm",
    description: "Community driven media streamer",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#bf4040",
    lang: "en",
    orientation: "portrait",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "512x512",
        type: "image/x-icon",
      },
    ],
  };
}
