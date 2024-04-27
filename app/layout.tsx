import type { Metadata } from "next";
import { Lato } from "next/font/google";

import "./globals.css";
import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";

const lato = Lato({ weight:'700', subsets: ["latin"]})
export const metadata: Metadata = {
  title: "6460",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="manifest.json"/>
        <meta name="theme-color" content="#075985"/>
      </head>
      <body className={lato.className}>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            {/* <Sidebar> */}
                {children}
            {/* </Sidebar> */}
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
