import gomSu0 from "../../../assets/images/projects/particles/particles-0.webp";
import gomSu1 from "../../../assets/images/projects/particles/particles-1.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "WebSiteGomSuBatTrang",
  theme: "dark",
  tags: ["html", "css", "javascript"],
  source: "https://github.com/Thanhlong0912/WebSiteGomSuBatTrang",
  description:
    "Dự án website công khai về gốm sứ Bát Tràng, nằm trong các repository được ghim trên GitHub profile.<br/><br/>Repository có ngôn ngữ chính là HTML, kết hợp CSS và JavaScript cho trải nghiệm website.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: gomSu0,
        alt: "Bản xem trước giao diện website gốm sứ Bát Tràng",
        caption: "Hình ảnh website gốm sứ",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gomSu1,
        alt: "Hình ảnh sản phẩm gốm sứ Bát Tràng",
        caption: "Hình ảnh sản phẩm",
      },
    },
  ],
} as const satisfies ProjectContent;
