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
  title: "Confussius - Explorând Întrebările Vieții",
  description: "Un loc de reflecție despre filozofie, întrebări și răspunsuri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header */}
        <header>
          <h1>Confussius</h1>
          <p>Explorăm misterele vieții și ale cunoașterii.</p>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer>
          <p>&copy; 2025 Confussius. Toate drepturile rezervate.</p>
        </footer>
      </body>
    </html>
  );
}