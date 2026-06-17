import tiktokClone0 from "../../../assets/images/projects/streakon/streakon-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "tiktok-clone",
  theme: "dark",
  tags: ["next", "typescript", "react", "tailwind"],
  live: "https://tiktok-clone-longbi.vercel.app",
  source: "https://github.com/Thanhlong0912/tiktok-clone",
  description:
    "A public Next.js 13 project for a TikTok-style social video experience.<br/><br/>This is the most recently updated public repository on the GitHub profile and uses TypeScript for the app code.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: tiktokClone0,
        alt: "TikTok Clone mobile app preview",
        caption: "Mobile video app concept",
      },
    },
  ],
} as const satisfies ProjectContent;
