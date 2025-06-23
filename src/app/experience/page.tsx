import { FullScreen } from "@/components/full-screen";
import { ExperienceTimeline } from "./containers/experience-timeline";

export const metadata = {
  title: "Experience | Wahyall",
  description:
    "Explore the professional journey of Wahyu Agung Laksono frontend developer with experience in modern JavaScript frameworks.",
  openGraph: {
    title: "Experience | Wahyall",
    description:
      "Frontend Developer with hands-on experience in React, Next.js, and modern UI/UX design.",
    url: "https://wahyall.vercel.app/experience",
    siteName: "Wahyall",
    images: [
      // {
      //   url: "https://wahyall.vercel.app/images/seo/experience-og-image.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "Kinh Dev Experience Page",
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience | Wahyall",
    description:
      "Check out Kinh Dev's past work and achievements in frontend development.",
    //   images: ["https://wahyall.vercel.app/images/seo/experience-og-image.png"],
  },
  alternates: {
    canonical: "https://wahyall.vercel.app/experience",
  },
};

export default function Page() {
  return (
    <div>
      <FullScreen>
        <ExperienceTimeline />
      </FullScreen>
    </div>
  );
}
