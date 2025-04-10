import { HeroUIProvider } from "@heroui/system";
import "./globals.css";
import { fontSans } from "@/config/fonts";
import { cn } from "@heroui/react";
import { Metadata } from "next";
import { websiteConfig } from "@/config/website";
import { Navbar } from "@/components/navbar";
import { ApolloWrapper } from "@/lib/ApolloWrapper";

export const metadata: Metadata = {
  title: {
    template: `%s | ${websiteConfig.name}`,
    default: websiteConfig.name,
  },
  description: websiteConfig.description,
  icons: {
    icon: "/icon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.className
        )}
      >
        <ApolloWrapper>
          <HeroUIProvider>
            <div className="relative flex flex-col h-screen overflow-y-scroll">
              <Navbar />
              <main className="container mx-auto max-w-7xl py-16 px-6 flex-grow">
                {children}
              </main>
            </div>
          </HeroUIProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
