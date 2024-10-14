import localFont from "next/font/local";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/header";
import Footer from "@/components/footer";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  family: "Instrument_Sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "My Portfolio",
  description: "All created with love",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${instrumentSans.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
