import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import {Header} from "@/components/layouts/header";
import {ConfirmationProvider} from "@/providers/confirmation-provider";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Todo App",
  description: "A simple todo application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
      <ConfirmationProvider>
        <>
          <Header/>
          {children}
        </>
      </ConfirmationProvider>
      </body>
    </html>
  )
}

