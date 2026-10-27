import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asha, After Dark | Moonlit Garden",
  description: "A quiet moonlit garden, a little music, and a few drifting petals.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
