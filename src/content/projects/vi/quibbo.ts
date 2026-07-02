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
    "Website bán hàng thời trang responsive, xây dựng từ đầu bằng HTML, CSS và JavaScript thuần.<br/><br/>Lưới sản phẩm, slider khuyến mãi và bố cục hướng đến trang thanh toán — một bài thực hành front-end về căn chỉnh khoảng cách, typography và breakpoint responsive mà không dựa vào framework.",
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
