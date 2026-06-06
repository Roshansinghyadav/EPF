import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EPFGenie",
  description:
    "EPFGenie is a support platform built for individuals dealing with PF withdrawal issues, UAN errors, claim delays, and account-related confusion.",
  icons: {
    icon: [
      { url: "/EPFGenieLogo.jpeg", type: "image/jpeg" }
    ],
  },
  openGraph: {
    title: "EPFGenie",
    description:
      "EPFGenie is a support platform built for individuals dealing with PF withdrawal issues, UAN errors, claim delays, and account-related confusion.",
    images: [
      {
        url: "/EPFGenieLogo.jpeg",
        alt: "EPFGenie Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${playfair.variable} antialiased min-h-screen flex flex-col bg-white text-black`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
