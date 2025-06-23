import { Metadata } from "next";
import { ComingSoonPage } from "@/components/layout/coming-soon";

export const metadata: Metadata = {
  title: "About | Wahyall",
  description:
    "Learn more about Wahyu Agung Laksono - Frontend Developer, JavaScript enthusiast, and tech explorer.",
  keywords: [
    "Wahyall",
    "About Kinh",
    "Frontend Developer",
    "JavaScript",
    "Next.js",
    "Vietnam Developer",
  ],
  openGraph: {
    title: "About | Wahyall",
    description:
      "Discover the story and journey of Wahyu Agung Laksono in the world of web development.",
    url: "https://wahyall.vercel.app/about",
    siteName: "Wahyall",
    type: "website",
    locale: "en_US",
    images: [
      // {
      //   url: "https://wahyall.vercel.app/images/seo/about-og-image.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "Wahyall About Page",
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Wahyall",
    description:
      "Learn more about Wahyu Agung Laksono - Frontend Developer and tech enthusiast.",
    // images: ["https://wahyall.vercel.app/images/seo/about-og-image.png"],
  },
  alternates: {
    canonical: "https://wahyall.vercel.app/about",
  },
};

export default function Page() {
  return <ComingSoonPage pageName="About" />;
}
