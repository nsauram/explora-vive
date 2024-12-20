import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "@/app/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <div>
            <div>
              Explora, Disfruta y Vive
            </div>
            <Navbar />
          </div>
        </header>

        {children}
        <footer>
          <div>footer</div>
        </footer>
      </body>
    </html>
  );
}
