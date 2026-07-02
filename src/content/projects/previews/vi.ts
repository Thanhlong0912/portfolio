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
    description: "Next.js 13 · TypeScript · feed video xã hội",
  },
  {
    title: "WebSiteGomSuBatTrang",
    slug: "particles",
    thumbnail: thumbnailParticles,
    description: "Gốm sứ Bát Tràng · website thương hiệu",
  },
  {
    title: "YoloShop",
    slug: "quibbo",
    thumbnail: thumbnailQuibbo,
    description: "Thương mại điện tử thời trang · responsive",
  },
  {
    title: "TheMovie",
    slug: "sharkie",
    thumbnail: thumbnailSharkie,
    description: "React · API trực tiếp · khám phá phim",
  },
] as const satisfies ProjectPreview[];
