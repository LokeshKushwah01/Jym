import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GalleryHero } from "@/components/sections/GalleryHero";
import { galleryImages } from "@/lib/data";

// Dynamically import GalleryGrid because it uses GSAP and needs window/DOM access
const GalleryGrid = dynamic(() => import("@/components/sections/GalleryGrid"), { ssr: false });

export const metadata: Metadata = {
  title: "Gallery",
  description: "See our gym facilities, equipment, classes, and member transformations at IronEdge Alpha and Beta.",
};

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <GalleryHero />
        <GalleryGrid images={galleryImages} />
      </main>
      <Footer />
    </div>
  );
}
