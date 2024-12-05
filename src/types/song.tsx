export default interface Song {
  id: string;
  videoID: string;
  title: string;
  artist: string;
  explicit: boolean;
  bannerURL: string;
  audioURL: string;
  duration: number;
  release: string;
  published: string;
  views: number;
  likes: number;
}
