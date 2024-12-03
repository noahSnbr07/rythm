"use client";

import React, { useState } from 'react';
import PageContainer from '../components/page-container';
import HeaderInput from './components/header-input';
import APIResponseSongTemplate from '@/types/api-response-song-template';
import SongTemplate from './components/song-template';

export default function upload(): JSX.Element {
   const [query, setQuery] = useState<string>("");
   const [templates, setTemplates] = useState<APIResponseSongTemplate[]>([]);


   return (
      <PageContainer priorityClassName='p-4 grid gap-4 grid-cols-2' hideHeader customHeaderJSX={
         <HeaderInput
            value={query}
            setValue={setQuery}
            setTemplateSongs={setTemplates} />
      }>
         {templates.length > 0 && (
            templates.map((template: APIResponseSongTemplate, index: number) => {
               return (
                  <SongTemplate
                     key={index}
                     title={template.title}
                     artist={template.artist}
                     thumbnailURL={template.thumbnailURL}
                  />
               )
            })
         )}
      </PageContainer>
   );
}