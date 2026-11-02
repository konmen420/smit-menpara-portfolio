import type { Metadata } from "next";
import { Fraunces, Source_Sans_3, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Smit Menpara — Developer / AI Engineer",
  description:
    "Portfolio of Smit Menpara, Computer Science undergraduate at IIIT Kota building intelligent systems, scalable applications, and meaningful digital products.",
  metadataBase: new URL("https://smitmenpara.dev"),
  openGraph: {
    title: "Smit Menpara — Developer / AI Engineer",
    description: "Building thoughtful digital experiences with code & intelligence.",
    type: "website",
    siteName: "Smit Menpara",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}