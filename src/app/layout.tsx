import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron", weight: ["400", "500", "700", "900"] });

export const metadata: Metadata = {
  title: "Srijanabh Bharadwaj | Portfolio",
  description: "Web Designer & ML Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} dark h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-[#0b071a] text-slate-200">{children}</body>
    </html>
  );
}
