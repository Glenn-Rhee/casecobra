import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Casecobra",
  description: "Casecobra case for iphone 13",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/snake-1.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="flex flex-col min-h-[calc(100vh - 3.5rem - 1px)]">
          <div className="flex-1 flex flex-col h-full">{children}</div>
          <Footer />
        </main>

        <Toaster />
      </body>
    </html>
  );
}
