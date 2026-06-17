import gomSu0 from "../../../assets/images/projects/particles/particles-0.webp";
import gomSu1 from "../../../assets/images/projects/particles/particles-1.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "WebSiteGomSuBatTrang",
  theme: "dark",
  tags: ["html", "css", "javascript"],
  source: "https://github.com/Thanhlong0912/WebSiteGomSuBatTrang",
  description:
    "A public website project for Bat Trang ceramics, listed as one of the pinned repositories on the GitHub profile.<br/><br/>The repository language is HTML, with supporting CSS and JavaScript for the website experience.",
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
