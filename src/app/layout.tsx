import type { Metadata } from "next";
import { Fira_Sans } from 'next/font/google';
import "./globals.css";

const firaSans = Fira_Sans({
  weight: ['400', '700'], 
  subsets: ['latin'], 
  display: 'swap', 
});


export const metadata: Metadata = {
  title: "Solar System",
  description: "Project direction is solar system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 return (
        <html lang="pt-BR">
          <body className={`${firaSans.className} {firaSans.variable}`}>
            {children}
          </body>
        </html>
      );
}
