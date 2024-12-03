import getYouTubeSongsByQuery from '@/app/services/get-youtube-songs-by-query';
import { search } from '@/assets/assets';
import APIResponseSongTemplate from '@/types/api-response-song-template';
import Image from 'next/image';
import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'

interface HeaderInputProps {
   value: string;
   setValue: Dispatch<SetStateAction<string>>;
   setTemplateSongs: Dispatch<SetStateAction<APIResponseSongTemplate[]>>;
}

export default function HeaderInput({ value, setValue, setTemplateSongs }: HeaderInputProps): JSX.Element {

   const fetchEntries = async () => {
      const res = await getYouTubeSongsByQuery(value)
      if (res) {

         setTemplateSongs(res);
      }
      else console.error("an error occurred fetching templates")
   }

   return (
      <div className='flex-1 flex gap-2 rounded-lg'>
         <input
            value={value}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
            placeholder='query'
            className='flex-1 px-4 py-2 bg-stack rounded-lg font-bold text-lg'
         />
         <button
            onClick={fetchEntries}
            className='aspect-square h-12 grid place-content-center bg-stack rounded-lg'>
            <Image
               className='opacity-50'
               src={search}
               alt='Search Icon'
               title='Search Icon'
            />
         </button>
      </div>
   );
}