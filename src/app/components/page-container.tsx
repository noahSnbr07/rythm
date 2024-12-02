import { details, home, icon, library } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

//define props of page container
interface PageContainerProps {
   navigationHidden?: boolean; //hide nav and header
   children: React.ReactNode; //content of page
   priorityClassName?: string; //overwrite default spacings
}

export default function PageContainer({
   navigationHidden = false,
   priorityClassName = "",
   children }: PageContainerProps): JSX.Element {

   interface NavigationLink {
      key: number;
      label: string;
      icon: string;
   }

   const navigationLinks: NavigationLink[] = [
      {
         key: 0,
         label: 'home',
         icon: home,
      }, {
         key: 1,
         label: 'home',
         icon: details,
      }, {
         key: 2,
         label: 'home',
         icon: library,
      }
   ];

   return (
      <div className='flex flex-col h-dvh w-dvh'>
         {!navigationHidden && (
            <header className='bg-stack flex gap-2 p-2'>
               <Link href={'/'}>
                  <Image
                     src={icon}
                     height={32}
                     width={32}
                     title='Logo'
                     alt='Logo'
                  />
               </Link>
            </header>
         )}

         {/* insert className overwrite */}
         <main className={`flex-1 ${priorityClassName ? priorityClassName : ' p-4 gap-8'}`}>
            {children}
         </main>
         {!navigationHidden && (
            <footer className='bg-stack'>
               <nav className='flex justify-evenly p-4'>

                  {/* render all links */}
                  {navigationLinks.map((link: NavigationLink) => {
                     return (
                        <Link
                           key={link.key}
                           href={link.label}>
                           <Image
                              className='opacity-50'
                              src={link.icon}
                              height={24}
                              width={24}
                              title={`${link.label} icon`}
                              alt={`${link.label} icon`}
                           />
                        </Link>
                     );
                  })}
               </nav>
            </footer>)}
      </div>
   );
}