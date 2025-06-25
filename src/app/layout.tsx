import { LayoutWithHeader } from "@/components/layout/layout-with-header";
import { ThemeProvider } from "@/components/theme-provider";
import { VisitTracker } from "@/components/visit-tracker";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

import { Exo_2 } from "next/font/google";

const exo2 = Exo_2({
  subsets: ["latin", "vietnamese", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-exo2",
});

export const metadata: Metadata = {
  title: "Wahyall | Frontend Developer Portfolio",
  description:
    "Explore Wahyall's portfolio – a skilled Frontend Developer specializing in Next.js, React, and modern web technologies. Showcasing innovative projects, UI/UX expertise, and high-performance web applications.",
  keywords: [
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Wahyall Portfolio",
    "Web Development",
    "UI/UX Design",
    "JavaScript",
    "TypeScript",
    "Modern Web Technologies",
  ],
  openGraph: {
    title: "Wahyall | Frontend Developer Portfolio",
    description:
      "Discover Wahyall's expertise in Frontend Development, React, and Next.js. View projects, case studies, and technical skills.",
    url: "https://wahyall.vercel.app",
    type: "website",
    images: [
      {
        url: "https://wahyall.vercel.app/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Wahyall - Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wahyall | Frontend Developer Portfolio",
    description:
      "Explore Wahyall's frontend projects and expertise in React, Next.js, and modern web development.",
    images: ["https://wahyall.vercel.app/images/thumbnail.png"],
  },
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${exo2.variable} antialiased scroll-smooth w-full max-w-dvw overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <VisitTracker />
          <LayoutWithHeader>{children}</LayoutWithHeader>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
