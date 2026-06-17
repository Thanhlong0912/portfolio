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
    description: "Ứng dụng kiểu TikTok bằng Next.js 13",
  },
  {
    title: "WebSiteGomSuBatTrang",
    slug: "particles",
    thumbnail: thumbnailParticles,
    description: "Website gốm sứ",
  },
  {
    title: "YoloShop",
    slug: "quibbo",
    thumbnail: thumbnailQuibbo,
    description: "Giao diện cửa hàng",
  },
  {
    title: "TheMovie",
    slug: "sharkie",
    thumbnail: thumbnailSharkie,
    description: "Ứng dụng khám phá phim",
  },
] as const satisfies ProjectPreview[];
