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
    "A public shop interface project from the pinned GitHub repositories.<br/><br/>The repository is primarily CSS, with a front-end focus that matches the profile stack around HTML, CSS, JavaScript, and UI implementation.",
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
