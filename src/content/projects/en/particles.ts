import gomSu0 from "../../../assets/images/projects/particles/particles-0.webp";
import gomSu1 from "../../../assets/images/projects/particles/particles-1.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "WebSiteGomSuBatTrang",
  theme: "dark",
  tags: ["html", "css", "javascript"],
  source: "https://github.com/Thanhlong0912/WebSiteGomSuBatTrang",
  description:
    "A brand website for Bat Trang ceramics — a traditional Vietnamese craft — built with HTML, CSS, and JavaScript.<br/><br/>A product storefront that pairs a warm visual identity with clean layout work, translating a heritage craft into a modern, browsable web experience.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: gomSu0,
        alt: "Bat Trang ceramics storefront preview",
        caption: "Ceramics storefront visual",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gomSu1,
        alt: "Bat Trang ceramic product imagery",
        caption: "Product imagery",
      },
    },
  ],
} as const satisfies ProjectContent;
