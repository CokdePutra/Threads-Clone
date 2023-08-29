import { ClerkProvider } from "@clerk/nextjs";
import '../globals.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import { dark } from "@clerk/themes";

import TopBar from '@/component/shared/Topbar';
import LeftSidebar from '@/component/shared/LeftSidebar';
import RightSidebar from '@/component/shared/RightSidebar';
import Bottombar from '@/component/shared/Bottombar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "Threads",
    description: "A Next.js 13 Meta Threads Application"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,
    }}
    >
    <html lang="en">
      <body className={inter.className}>
        <TopBar/>

        <main>
          <LeftSidebar/>

          <section className="main-container">
            <div className="w-full max-w-4xl">
              {children}
            </div>
          </section>

          <RightSidebar/>
        </main>

        <Bottombar/>
      </body>
    </html>
    </ClerkProvider>
  )
}
