import { Geist, Geist_Mono, Roboto_Mono, Inria_Sans } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-roboto-mono",
});
const inriaSans = Inria_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inria-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoMono.variable} ${inriaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
