import Song from "@/types/song";
import supabase from "../../supabase/supabase";

export default async function getSongById(id: string): Promise<Song> {
  const { data: song } = await supabase
    .from("songs")
    .select("*")
    .eq("id", id)
    .single();
  return song;
}
