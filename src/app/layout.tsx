import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Layout from "../components/Layout/Layout";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Flower Delivery",
  description:
    "Flower delivery service to help you speak to those who matter through mother nature",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="mx-auto max-w-[1440px] border border-black">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
