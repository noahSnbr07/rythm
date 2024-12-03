import APIResponseSongTemplate from '@/types/api-response-song-template'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SongTemplate({ title, artist, thumbnailURL, }: Partial<APIResponseSongTemplate>): JSX.Element {
   return (
      <Link
         href={'/'}
         className='flex flex-col gap-2 p-2 bg-stack rounded-lg'>
         <Image
            width={256}
            height={256}
            src={thumbnailURL || ''}
            className='w-full rounded-md'
            alt={`Cover of Template "${title}"`}
         />
         <div className='flex flex-col w-full truncate'>
            <p className='font-bold text-ll'>
               {title}
            </p> <p className='font-italic text-muted text-sm'>
               {artist}
            </p>
         </div>
      </Link>
   )
}
