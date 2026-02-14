import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // 1. Używamy czcionek pasujących do stylu "Nature"
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar"; // 2. Importujemy nasz Navbar

// Konfigurujemy czcionkę podstawową (tekst)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // Ta nazwa musi się zgadzać z tą w globals.css
});

// Konfigurujemy czcionkę nagłówków (elegancka, szeryfowa)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif", // Ta nazwa musi się zgadzać z tą w globals.css
});

export const metadata: Metadata = {
  title: "Polskie Rękodzieło Wędkarskie",
  description: "Unikatowe przynęty i akcesoria handmade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl"> {/* 3. Zmieniamy na język polski */}
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-nature-sand text-nature-dark`}
      >
        <Navbar /> {/* 4. Wstawiamy Menu na samą górę */}
        {children}
      </body>
    </html>
  );
}