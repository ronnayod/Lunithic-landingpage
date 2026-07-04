import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lunithic — บริษัทพัฒนาเว็บไซต์และระบบดิจิทัลครบวงจร | Web Development Agency",
  description:
    "Lunithic คือบริษัทพัฒนาเว็บไซต์ครบวงจรในกรุงเทพ ให้บริการออกแบบ UX/UI, Web Development ด้วย Next.js & React, Landing Page, ระบบ CRM, E-Commerce และ Custom Solutions สำหรับธุรกิจทุกขนาด ปรึกษาฟรี",
  keywords: [
    "พัฒนาเว็บไซต์",
    "รับทำเว็บไซต์",
    "Web Development",
    "UX/UI Design",
    "Landing Page",
    "CRM System",
    "E-Commerce",
    "Next.js",
    "React",
    "บริษัทรับทำเว็บ",
    "ทำเว็บไซต์ราคา",
    "Lunithic",
    "เว็บไซต์กรุงเทพ",
    "ออกแบบเว็บไซต์",
  ],
  authors: [{ name: "Lunithic", url: "https://lunithic.com" }],
  creator: "Lunithic",
  publisher: "Lunithic",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://lunithic.com",
    siteName: "Lunithic",
    title: "Lunithic — บริษัทพัฒนาเว็บไซต์และระบบดิจิทัลครบวงจร",
    description:
      "บริการพัฒนาเว็บไซต์ครบวงจร Landing Page, CRM, E-Commerce, UX/UI Design และ Web Development ด้วย Next.js & React โดยทีมผู้เชี่ยวชาญ",
    images: [
      {
        url: "https://lunithic.com/icon.png",
        width: 512,
        height: 512,
        alt: "Lunithic Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lunithic — บริษัทพัฒนาเว็บไซต์ครบวงจร",
    description:
      "บริการพัฒนาเว็บไซต์ครบวงจร ออกแบบ UX/UI, E-Commerce, CRM ด้วย Next.js & React ปรึกษาฟรี",
    images: ["https://lunithic.com/icon.png"],
  },
  alternates: {
    canonical: "https://lunithic.com",
  },
  category: "technology",
  other: {
    "ai-content-declaration": "This website contains original content created by Lunithic, a web development agency based in Bangkok, Thailand.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://lunithic.com" />
        <meta name="theme-color" content="#0B1026" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
