import { HeroUIProvider } from "@heroui/system";
import "./globals.css";
import { fontSans } from "@/config/fonts";
import { cn } from "@heroui/react";
import { Metadata } from "next";
import { websiteConfig } from "@/config/website";

export const metadata: Metadata = {
  title: {
    template: `%s | ${websiteConfig.name}`,
    default: websiteConfig.name,
  },
  description: websiteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.className
        )}
      >
        <HeroUIProvider>
          <div className="relative flex flex-col h-screen">
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
          </div>
        </HeroUIProvider>
      </body>
    </html>
  );
}
