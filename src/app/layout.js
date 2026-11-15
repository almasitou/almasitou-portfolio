import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import MobileHoverFix from "@/components/MobileHoverFix";
import NavigationLoader from "@/components/NavigationLoader";
import "./globals.css";

const medeo = localFont({
  src: [
    { path: "./fonts/MedeoSans.woff2", weight: "100 900", style: "normal" },
    { path: "./fonts/MedeoSans-Italic.woff2", weight: "100 900", style: "italic" },
  ],
  variable: "--font-medeo",
  display: "swap",
  preload: false,
});

export const metadata = {
  metadataBase: new URL('https://almasitou-portfolio.vercel.app'),
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
      data-scroll-behavior="smooth"
      className={`${medeo.variable} h-full antialiased`}
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
