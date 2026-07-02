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
    description: "Next.js 13 · TypeScript · social video feed",
  },
  {
    title: "WebSiteGomSuBatTrang",
    slug: "particles",
    thumbnail: thumbnailParticles,
    description: "Bat Trang ceramics · brand website",
  },
  {
    title: "YoloShop",
    slug: "quibbo",
    thumbnail: thumbnailQuibbo,
    description: "Fashion e-commerce · responsive storefront",
  },
  {
    title: "TheMovie",
    slug: "sharkie",
    thumbnail: thumbnailSharkie,
    description: "React · live API · movie discovery",
  },
] as const satisfies ProjectPreview[];
