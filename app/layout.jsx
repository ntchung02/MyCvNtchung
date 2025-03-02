import { Madimi_One } from "next/font/google";
import "./globals.css";
//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const madimiOne = Madimi_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-madimiOne",
});

export const metadata = {
  title: "MyCV",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={madimiOne.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
