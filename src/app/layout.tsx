import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Dinil Dulneth | Software Engineer",
  description:
    "Full Stack Software Engineer specializing in modern web technologies, mobile development, and scalable applications.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Mobile Developer",
    "Web Developer",
    "Sri Lanka"
  ],
  authors: [{ name: "Dinil Dulneth" }],
  creator: "Dinil Dulneth",
  publisher: "Dinil Dulneth",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  icons: {
    icon: [
      {
        url: "../public/icon.svg",
        sizes: "any"
      },
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "32x32"
      }
    ],
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png"
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png"
      }
    ]
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dinildulneth.com",
    siteName: "Dinil Dulneth",
    title: "Dinil Dulneth | Software Engineer",
    description:
      "Full Stack Software Engineer specializing in modern web technologies, mobile development, and scalable applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dinil Dulneth - Software Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinil Dulneth | Software Engineer",
    description:
      "Full Stack Software Engineer specializing in modern web technologies, mobile development, and scalable applications.",
    images: ["/twitter-image.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
