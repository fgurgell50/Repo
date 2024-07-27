import type { Metadata } from "next";
import { Roboto, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { PreloadResources } from "./preload-resources";

const roboto = Roboto({ 
  subsets: ["latin"],
  style: 'normal',
  weight: ['400', '500', '700'],
  variable: '--font-roboto'
});

const sourceSans3 = Source_Sans_3({ 
  subsets: ["latin"],
  style: 'normal',
  weight: ['400', '500', '700'],
  variable: '--font-source-sans-3'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PreloadResources/>
      <body className={`${roboto.variable} ${sourceSans3.variable}`}>
          <div className="bg-white text-red-500">Header</div>
        {children}
        </body>
    </html>
  );
}
