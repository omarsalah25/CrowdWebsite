import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Suspense } from "react";
import Loading from "./loading";
// import Footer from "@/components/footer/Footer";
// import ClientSideProviderTest from "@/components/clientSideProviderTest";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Next.js 14 Homepage",
    template: "%s | Next.js 14"
  },
  description: "Next.js starter app description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

      </head>
      <body className={inter.className}>
        {/* <ClientSideProviderTest> */}
        <div className="container m-auto ">

          <Navbar />
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
          {/* <Footer /> */}
        </div>
        {/* </ClientSideProviderTest> */}
      </body>
    </html>
  );
}