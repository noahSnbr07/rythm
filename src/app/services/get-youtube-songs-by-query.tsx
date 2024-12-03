"use server";

import APIResponseSongTemplate from "@/types/api-response-song-template";

export default async function getYouTubeSongsByQuery(
  query: string,
): Promise<APIResponseSongTemplate[] | null> {
  //call api
  const key: string = process.env.YOUTUBE_SEARCH_API_V3_KEY || "";
  const response: Response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(query)}&part=snippet&maxResults=10&key=${key}`,
  );

  //validate response
  if (response.ok) {
    const data = await response.json();

    //filter relevant information
    const templateSongs: APIResponseSongTemplate[] = data.items.map(
      (song: any) => ({
        videoID: song.id.videoId,
        artist: song.snippet.channelTitle,
        publish: song.snippet.publishedAt,
        thumbnailURL: song.snippet.thumbnails.high.url,
        title: song.snippet.title,
      }),
    );

    return templateSongs;
  } else {
    console.error("Error fetching YouTube API:", response.statusText);
    return null;
  }
}
