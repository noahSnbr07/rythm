import AudioTag from "./audio-tag";
import PlayerContextProvider from "./context/player-context";
import RefContextProvider from "./context/ref-context";
import SongContextProvider from "./context/song-context";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html translate="no" lang="en">
      <body>
        <RefContextProvider>
          <SongContextProvider>
            <PlayerContextProvider>
              <AudioTag />
              {children}
            </PlayerContextProvider>
          </SongContextProvider>
        </RefContextProvider>
      </body>
    </html>
  );
}
