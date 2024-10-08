import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";

import 'simplebar-react/dist/simplebar.min.css';
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner"

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
        {children}
        <Toaster />
        <Sonner />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
