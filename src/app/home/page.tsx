"use server";

import React from 'react'
import PageContainer from '../components/page-container';
import Song from '@/types/song';
import supabase from '../supabase/supabase';
import { PostgrestSingleResponse } from '@supabase/supabase-js';
import Header from './components/header';
import SongList from './components/song-list';

export default async function page() {

   const songs: PostgrestSingleResponse<Song[]> = await supabase.from("songs").select("*").limit(10);

   console.log(songs);

   return (
      <PageContainer>
         <Header />
         <SongList songs={songs.data as Song[]} />
      </PageContainer>
   );
}