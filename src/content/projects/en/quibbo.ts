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
    "A responsive fashion e-commerce storefront built from scratch with hand-crafted HTML, CSS, and vanilla JavaScript.<br/><br/>Product grids, a promotional slider, and a checkout-oriented layout — a front-end study in getting spacing, typography, and responsive breakpoints right without leaning on a framework.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: yoloShop0,
        alt: "YoloShop fashion ecommerce preview",
        caption: "Fashion ecommerce preview",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: yoloShop1,
        alt: "YoloShop promotional slider",
        caption: "Promotional slider",
      },
    },
  ],
} as const satisfies ProjectContent;
