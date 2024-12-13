import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
});

const opensans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};

export default function RootLayout({
                                       children
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${montserrat.variable} ${opensans.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}
