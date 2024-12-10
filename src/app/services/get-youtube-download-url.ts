"use server";

export default async function getYouTubeDownloadURL(
  videoID: string,
): Promise<string> {
  if (!videoID) throw new Error("videoID parameter is required");

  const url = `https://youtube-mp36.p.rapidapi.com/dl?id=${videoID}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.RAPID_API_YOUTUBE_DOWNLOAD_SCRAPER || "",
      "x-rapidapi-host": "youtube-mp36.p.rapidapi.com",
    },
  };

  console.log(`[videID]: ${videoID}`);

  try {
    const response = await fetch(url, options);
    if (!response.ok)
      throw new Error(`API call failed with status: ${response.status}`);
    const result = await response.json();
    return result.link;
  } catch (error) {
    console.error("Error fetching download URL:", error);
    throw error;
  }
}