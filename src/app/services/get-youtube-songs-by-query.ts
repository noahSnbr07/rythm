"use server";

import APIResponseSongTemplate from "@/types/api-response-song-template";

//construct object structure for api response
interface YouTubeAPISearchResponse {
  items: {
    id: {
      videoId: string;
    };
    snippet: {
      channelTitle: string;
      publishedAt: string;
      thumbnails: {
        high: {
          url: string;
        };
      };
      title: string;
    };
  }[];
}

export default async function getYouTubeSongsByQuery(
  query: string,
): Promise<APIResponseSongTemplate[] | null> {
  const key: string = process.env.YOUTUBE_SEARCH_API_V3_KEY || "";

  //query api
  const response: Response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(query)}&part=snippet&maxResults=10&key=${key}`,
  );

  //validate response
  if (response && response.ok) {
    const data: YouTubeAPISearchResponse = await response.json();

    //construct possible matches
    const templateSongs: APIResponseSongTemplate[] = data.items.map((song) => ({
      videoID: song.id.videoId,
      artist: song.snippet.channelTitle,
      publish: song.snippet.publishedAt,
      thumbnailURL: song.snippet.thumbnails.high.url,
      title: song.snippet.title,
    }));

    return templateSongs;
  } else {
    console.error("Error fetching YouTube API:", response.statusText);
    return null;
  }
}