import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Lux CRM Dashboard",
  description: "Modern glassmorphic CRM-style dashboard",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-crm-bg text-white antialiased bg-crm-gradient min-h-screen">
        <div className="min-h-screen bg-black/60 backdrop-blur-3xl">
          {children}
        </div>
      </body>
    </html>
  );
}
