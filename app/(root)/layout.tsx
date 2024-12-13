import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Montserrat, Open_Sans } from "next/font/google";
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
        <>
            <SessionProvider>
                <Navbar />
            </SessionProvider>
            {children}
        </>
    );
}
