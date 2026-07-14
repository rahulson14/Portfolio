import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rahul Son Boro | Portfolio",
  description: "Personal portfolio of Rahul Son Boro, a passionate developer.",
    icons: {
    icon: "/read-svgrepo-com.svg", // <-- Points to your SVG in the public folder!
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth overflow-x-hidden">
      <body className="min-h-full flex flex-col font-sans bg-white text-black overflow-x-hidden w-full">{children}</body>
    </html>
  );
}
