import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Header from "@/components/header/Header";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/Footer";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' h-full w-full'}>
        <main className="mx-auto h-full w-full  xl:max-w-[1200px] pl-5 pr-5 ">
          <Provider>
            <header className="">
              <Header />
              <Navbar />
            </header>
            {children}
            <Footer />
          </Provider>
        </main>
      </body>
    </html>
  );
}
