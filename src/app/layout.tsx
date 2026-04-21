import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ElectraFlow - AI Election Education",
  description: "Smart, AI-powered election education and tracking platform. Master civic duty, voter education, Lok Sabha processes, and EVM simulations in minutes.",
  keywords: ["Election Education", "Voter Education", "Lok Sabha", "VVPAT", "EVM Simulator", "Civic Dashboard", "First-Time Voter", "Model Code of Conduct", "Electoral Roll"],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "ElectraFlow",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    title: "ElectraFlow - AI Election Demystified",
    description: "Prepare for Polling Day with Mock EVMs and real-time timelines.",
    siteName: "ElectraFlow",
    type: "website",
  }
};

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased suppressHydrationWarning`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
