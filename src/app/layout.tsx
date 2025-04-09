import { HeroUIProvider } from "@heroui/system";
import "./globals.css";
import { fontSans } from "@/config/fonts";
import { cn } from "@heroui/react";

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
