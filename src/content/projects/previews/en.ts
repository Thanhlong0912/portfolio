import thumbnailQuibbo from "../../../assets/thumbnails/quibbo.webp";
import thumbnailParticles from "../../../assets/thumbnails/particles.webp";
import thumbnailSharkie from "../../../assets/thumbnails/sharkie.webp";
import thumbnailStreakon from "../../../assets/thumbnails/streakon.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Short-Video Social Platform",
    slug: "streakon",
    thumbnail: thumbnailStreakon,
    description: "Supabase · PostgreSQL ranking · no server tier",
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
