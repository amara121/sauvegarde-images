import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
// import { ThemeProvider } from "@material-tailwind/react";

import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/header-component/Header";
import Menu from "@/components/menu-component/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PicturAmar",
  description:
    "Une application pour sauvegarder les images et partager en ligne",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="flex flex-col">
          {/* le header */}
          <div className="w-full h-20">
            <Header />
          </div>

          {/* menu & content */}
          <div className="grid grid-cols-[150px_minmax(320px,_1fr)] max-h-[calc(100vh_-_80px)] overflow-y-scroll">
            {/* menu */}
            <div className="relative">
             <Menu />
            </div>

            {/* content */}
            {children}
          </div>
        </div>
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
