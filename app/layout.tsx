import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marco's Writing Blog",
  description:
    "What I'm reading right now. What I was listening to ten years ago.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased  min-h-screen bg-white dark:bg-slate-950 text-gunmetal dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-5xl mx-auto px-4 bg-white ">
            <main>
              <div>{children}</div>
            </main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
      <Footer />
    </html>
  );
}
