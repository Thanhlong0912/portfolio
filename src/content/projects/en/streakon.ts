import tiktokClone0 from "../../../assets/images/projects/streakon/streakon-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "tiktok-clone",
  theme: "dark",
  tags: ["next", "typescript", "react", "tailwind"],
  live: "https://tiktok-clone-longbi.vercel.app",
  source: "https://github.com/Thanhlong0912/tiktok-clone",
  description:
    "A TikTok-style social video app built on Next.js 13 with the App Router and TypeScript end to end.<br/><br/>A vertical, swipe-driven feed with video playback, profiles, and a component architecture designed to scale — the kind of interaction-heavy interface where UI state and playback performance have to stay in sync.",
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
