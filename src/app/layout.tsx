import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Rum River Wedding Barn - Minnesota's Premier Wedding Venue",
  description: "Create unforgettable memories in our beautifully restored barn, surrounded by 400 acres of Minnesota's natural splendor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
