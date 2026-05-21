import { Inter, Space_Mono, Syne } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  weight: ["700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Portfolio | Front-end Developer & Multimedia Designer",
  description:
    "A digital archive of experimental interfaces, visual narratives, and functional code environments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable} ${syne.variable}`}>
      <body className="font-body-regular text-body-regular">
        {" "}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
