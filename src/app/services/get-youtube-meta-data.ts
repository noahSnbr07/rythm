"use server";

import Song from "@/types/song";
import getYouTubeDownloadURL from "./get-youtube-download-url";

export default async function getYouTubeMetaData(videoID: string): Promise<Song> {
  if (!videoID) throw new Error("videoID parameter missing");

  const apiKey = process.env.YOUTUBE_SEARCH_API_V3_KEY;
  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoID}&key=${apiKey}&part=snippet,contentDetails,statistics`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok)
      throw new Error(`API call failed with status: ${response.status}`);

    const data = await response.json();
    if (!data.items || data.items.length === 0)
      throw new Error("No video found for the provided videoID");

    const result = data.items[0];
    if (!result) throw new Error("Video data is undefined");

    const { snippet, contentDetails, statistics } = result;

    const downloadURL: string = await getYouTubeDownloadURL(videoID);

    const thumbnail =
      snippet.thumbnails.maxres?.url ||
      snippet.thumbnails.high?.url ||
      snippet.thumbnails.medium?.url ||
      snippet.thumbnails.default?.url ||
      "";

    return {
      id: result.etag,
      videoID: result.id,
      title: snippet.title,
      explicit: false,
      audioURL: downloadURL,
      bannerURL: thumbnail,
      artist: snippet.channelTitle,
      release: snippet.publishedAt,
      duration: contentDetails.duration,
      views: Number(statistics.viewCount || 0),
      likes: Number(statistics.likeCount || 0),
      published: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Error fetching YouTube metadata:", error);
    throw error;
  }
}
