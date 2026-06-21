import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import MobileHoverFix from "@/components/MobileHoverFix";
import NavigationLoader from "@/components/NavigationLoader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Almas | Product Designer & UI/UX Expert",
  description: "Portfolio of Almas, a passionate Product Designer and UI/UX expert crafting beautiful and intuitive digital experiences. Specialist in user-centered design, mobile apps, and web platforms.",
  keywords: ["Product Designer", "UI/UX Designer", "UX Designer", "Web Design", "App Design", "Portfolio", "Figma", "Design System"],
  authors: [{ name: "Almas" }],
  openGraph: {
    title: "Almas | Product Designer",
    description: "Crafting beautiful and intuitive digital experiences.",
    url: "https://almasitou-portfolio.vercel.app/",
    siteName: "Almas Portfolio",
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MobileHoverFix />
        <NavigationLoader />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
