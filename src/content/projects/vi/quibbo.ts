import yoloShop0 from "../../../assets/images/projects/quibbo/quibbo-0.webp";
import yoloShop1 from "../../../assets/images/projects/quibbo/quibbo-1.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "YoloShop",
  theme: "light",
  tags: ["html", "css", "javascript"],
  live: "https://yoloshop123.netlify.app",
  source: "https://github.com/Thanhlong0912/YoloShop",
  description:
    "Dự án giao diện cửa hàng công khai trong nhóm repository được ghim trên GitHub.<br/><br/>Repository chủ yếu dùng CSS, tập trung vào front-end và phù hợp với stack HTML, CSS, JavaScript cùng triển khai giao diện.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: yoloShop0,
        alt: "Bản xem trước ecommerce thời trang YoloShop",
        caption: "Bản xem trước ecommerce thời trang",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: yoloShop1,
        alt: "Slider khuyến mãi YoloShop",
        caption: "Slider khuyến mãi",
      },
    },
  ],
} as const satisfies ProjectContent;
