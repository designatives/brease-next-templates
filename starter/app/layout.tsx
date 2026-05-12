import type { Metadata } from "next";
import "brease-next/styles";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brease Starter",
  description: "A Next.js starter wired up with Brease CMS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white font-sans text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
