"use server";

export default async function getYouTubeMetaData(videoID: string) {
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

    return data.items[0];
  } catch (error) {
    console.error("Error fetching YouTube metadata:", error);
    throw error;
  }
}
