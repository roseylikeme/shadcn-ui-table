import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shadcn UI Table",
  description: "Created a table with sorting, filtering, and pagination using TanStack's React Table",
  keywords: ["React", "Table", "Sorting", "Filtering", "Pagination", "RoseyLikeMe"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <body className={inter.className}>{children}</body>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
