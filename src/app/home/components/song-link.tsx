"use server";

import Song from '@/types/song'
import Image from 'next/image';
import React from 'react'

export default async function SongLink({ song }: { song: Song }) {
   return (
      <div className='flex flex-col gap-2 w-[128px] rounded-md hover:bg-stack transition-all p-2'>
         <Image
            className='rounded-md bg-stack aspect-square object-cover'
            src={song.bannerURL}
            height={128}
            width={128}
            alt={`${song.title} Banner`}
            title={`${song.title} Banner`}
         />
         <div className='flex flex-col w-full truncate'>
            <p className='text-md font-bold truncate'> {song.title} </p>
            <p className='text-muted text-sm font-italic truncate'> {song.artist} </p>
         </div>
      </div>
   );
}