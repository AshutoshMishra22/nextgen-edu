import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import { Footer, NavigationHeader } from "./component";
import { Suspense } from "react";
import Loading from "./loading";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "School website",
  description: "website for digital presence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <AntdRegistry>
            <NavigationHeader />
            {children}
            <Footer />
          </AntdRegistry>
        </Suspense>
      </body>
    </html>
  );
}
