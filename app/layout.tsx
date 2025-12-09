import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The History of Artificial Intelligence",
  description: "An interactive journey through the evolution of AI from 1940s to 2025",
  keywords: ["AI", "Artificial Intelligence", "Machine Learning", "Deep Learning", "History"],
  authors: [{ name: "Created with Claude" }],
  openGraph: {
    title: "The History of Artificial Intelligence",
    description: "An interactive journey through the evolution of AI from 1940s to 2025",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
