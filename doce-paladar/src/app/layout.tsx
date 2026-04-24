import type { Metadata } from "next";
import { Cormorant_Garamond, Dancing_Script, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  weight: ["400", "500", "600", "700"],
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Doce Paladar | Gabriela Carmo — Confeitaria Artesanal",
  description:
    "Confeitaria artesanal com ingredientes selecionados e receitas exclusivas. Macarons, bolos, trufas e muito mais feitos com amor por Gabriela Carmo.",
  keywords: ["confeitaria artesanal", "macarons", "bolos decorados", "doces finos", "Gabriela Carmo"],
  openGraph: {
    title: "Doce Paladar | Gabriela Carmo",
    description: "Sabores que abraçam o coração. Confeitaria artesanal feita com amor.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${cormorant.variable} ${dancing.variable} ${jost.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
