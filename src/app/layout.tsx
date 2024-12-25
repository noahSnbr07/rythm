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
        <SongContextProvider>{children}</SongContextProvider>
      </body>
    </html>
  );
}
