import type { Metadata } from "next";
import "./globals.css";
import { poppins } from '../styles/font';

export const metadata: Metadata = {
  title: "Laksika Panich's Portfolio",
  description: "Hello! Welcome to my portfolio website.",

  icons: {
    icon: '/break-time.png',
    shortcut: '/break-time.png',
    apple: '/break-time.png',
  },

  openGraph: {
    title: "Laksika Panich's Portfolio",
    description: "Hello! Welcome to my portfolio website.",
    url: "https://laksika-p-portfolio.vercel.app",
    siteName: "Laksika Portfolio",
    images: [
      {
        url: "/IMG_4489.png",   // 👈 รูปพรีวิว
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Laksika Panich's Portfolio",
    description: "Hello! Welcome to my portfolio website.",
    images: ["/IMG_4489.png"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

