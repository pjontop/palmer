import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import { Providers } from "../components/providers";

const Saans = localFont({
  src: [
    {
      path: '../public/fonts/Saans/Saans-TRIAL-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Saans/Saans-TRIAL-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Saans/Saans-TRIAL-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Saans/Saans-TRIAL-SemiBoldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
  ],
  variable: '--font-saans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Placer",
  description: "Your Education Ai-fied",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Saans.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
