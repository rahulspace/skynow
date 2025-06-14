import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkyNow",
  description: "Sleek and simple weather app that delivers real-time forecasts",
};

interface Props {
  children: ReactNode;
}

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} antialiased text-slate-100 font-normal`}
      >
        {props.children}
        <Analytics />
      </body>
    </html>
  );
}
