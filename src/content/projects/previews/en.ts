import thumbnailQuibbo from "../../../assets/thumbnails/quibbo.webp";
import thumbnailParticles from "../../../assets/thumbnails/particles.webp";
import thumbnailSharkie from "../../../assets/thumbnails/sharkie.webp";
import thumbnailStreakon from "../../../assets/thumbnails/streakon.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "tiktok-clone",
    slug: "streakon",
    thumbnail: thumbnailStreakon,
    description: "Next.js 13 TikTok-style app",
  },
  {
    title: "WebSiteGomSuBatTrang",
    slug: "particles",
    thumbnail: thumbnailParticles,
    description: "Ceramics website",
  },
  {
    title: "YoloShop",
    slug: "quibbo",
    thumbnail: thumbnailQuibbo,
    description: "Shop interface project",
  },
  {
    title: "TheMovie",
    slug: "sharkie",
    thumbnail: thumbnailSharkie,
    description: "Movie discovery app",
  },
] as const satisfies ProjectPreview[];
