import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ["latin"],
   variable:"--font-ibmplexmono",
  weight:"400",
  });
 
export const metadata: Metadata = {
  title: "Bueiro Security - Home",
  description: "Todos os direitos reservados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibmPlexMono.variable}>{children}</body>
    </html>
  );
}
