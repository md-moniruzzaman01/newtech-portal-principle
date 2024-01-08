import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newtech Technology",
  description: "Always There for you",
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
