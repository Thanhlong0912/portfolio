import gomSu0 from "../../../assets/images/projects/particles/particles-0.webp";
import gomSu1 from "../../../assets/images/projects/particles/particles-1.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "WebSiteGomSuBatTrang",
  theme: "dark",
  tags: ["html", "css", "javascript"],
  source: "https://github.com/Thanhlong0912/WebSiteGomSuBatTrang",
  description:
    "Website thương hiệu cho gốm sứ Bát Tràng — một làng nghề truyền thống Việt Nam — xây dựng bằng HTML, CSS và JavaScript.<br/><br/>Một cửa hàng trưng bày sản phẩm kết hợp bản sắc hình ảnh ấm áp với bố cục gọn gàng, đưa nghề thủ công truyền thống thành trải nghiệm web hiện đại.",
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
