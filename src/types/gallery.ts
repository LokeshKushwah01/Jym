export interface GalleryImage {
  id: string;
  src: string;          // path under /public/images/gallery/
  alt: string;
  category: "facilities" | "equipment" | "classes" | "transformations" | "events";
  gym: "JY Gymnasium" | "JY Gymnasium 2.0" | "both";
  width: number;        // actual image width for next/image
  height: number;       // actual image height for next/image
  featured: boolean;    // show in homepage GymGallery section
}
