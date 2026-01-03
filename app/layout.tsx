import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PS Training - Bridge the Gap to Your BFSI Career",
  description: "Sales Training Institute for Banking, Financial Services, and Insurance sector. Get placed at top BFSI companies with 100% placement assistance.",
  keywords: ["BFSI Training", "Banking Sales Training", "Insurance Training", "Financial Advisory Course", "Sales Training Institute", "Placement Assistance"],
  authors: [{ name: "PS Training" }],
  openGraph: {
    title: "PS Training - Bridge the Gap to Your BFSI Career",
    description: "Premier sales training institute for Banking, Financial Services, and Insurance sector careers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
