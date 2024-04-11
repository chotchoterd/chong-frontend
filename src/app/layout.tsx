import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Welcome to Chong FiFi!",
  description: "CHONG FIFI: ผู้ช่วยอัจฉริยะที่จะปลดล็อกศักยภาพของร้านอาหารคุณ",
  keywords: "CHONGFIFI, โปรแกรมสั่งอาหาร, ระบบจัดการร้านอาหาร, เพิ่มยอดขาย, ร้านอาหาร"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
