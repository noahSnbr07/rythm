import { details, home, icon, library } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

//define props of page container
interface PageContainerProps {
  hideFooter?: boolean;
  hideLogo?: boolean;
  children: React.ReactNode; //content of page
  priorityClassName?: string; //overwrite default spacings
  customHeaderJSX?: React.ReactNode;
}

export default function PageContainer({
  hideFooter = false,
  hideLogo = false,
  priorityClassName = "",
  customHeaderJSX,
  children,
}: PageContainerProps): JSX.Element {
  interface NavigationLink {
    key: number;
    label: string;
    icon: string;
  }

  const navigationLinks: NavigationLink[] = [
    {
      key: 0,
      label: "home",
      icon: home,
    },
    {
      key: 1,
      label: "home",
      icon: details,
    },
    {
      key: 2,
      label: "home",
      icon: library,
    },
  ];

  return (
    <div className="flex h-dvh flex-col">
      <header className="flex gap-2 bg-stack p-2">
        {!hideLogo && (
          <>
            <Link href={"/"}>
              <Image
                src={icon}
                height={32}
                width={32}
                title="Logo"
                alt="Logo"
              />
            </Link>
          </>
        )}
        {customHeaderJSX}
      </header>

      {/* insert className overwrite */}
      <main
        className={`flex flex-1 flex-col items-center overflow-y-scroll ${priorityClassName ? priorityClassName : "gap-8 p-4"}`}
      >
        {children}
      </main>
      {!hideFooter && (
        <footer className="bg-stack">
          <nav className="flex justify-evenly p-4">
            {/* render all links */}
            {navigationLinks.map((link: NavigationLink) => {
              return (
                <Link key={link.key} href={`/${link.label}`}>
                  <Image
                    className="opacity-50"
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
        </footer>
      )}
    </div>
  );
}
