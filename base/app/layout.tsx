import type { Metadata } from "next";
import "brease-next/styles";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brease Base",
  description: "A minimal Next.js starter wired up with Brease CMS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
