import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Providers } from "@/providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import "./globals.css";

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "aadee",
    description: "who tf is aadee?!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn(geistMono.variable, "antialiased lowercase")}>
                <Providers>
                    <div className="font-[family-name:var(--font-geist-mono)] flex flex-col items-center w-full min-h-svh">
                        <Navbar />
                        <main className="container w-full border-x border-dashed min-h-svh text-muted-foreground">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
