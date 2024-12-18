"use server";

import Song from '@/types/song'
import React from 'react'
import SongLink from './song-link'

export default async function SongList({ songs }: { songs: Song[] }) {
   return (
      <div className='flex flex-col gap-2 w-full'>
         <p className='text-muted font-italic'> songs - {songs.length} </p>
         <div className="flex overflow-x-auto w-full rounded-lg gap-2">
            {songs.map((song: Song) => (
               <SongLink song={song} key={song.id} />
            ))}
         </div>
      </div>
   );
}