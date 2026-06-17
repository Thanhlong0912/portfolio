import theMovie0 from "../../../assets/images/projects/sharkie/sharkie-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "TheMovie",
  theme: "light",
  tags: ["javascript", "react", "css"],
  live: "https://the-movie-phi.vercel.app",
  source: "https://github.com/Thanhlong0912/TheMovie",
  description:
    "A public movie discovery application from the pinned GitHub profile projects.<br/><br/>The project is written in JavaScript and has a live Vercel deployment for browsing the app.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: theMovie0,
        alt: "TheMovie discovery app interface",
        caption: "Movie discovery interface",
      },
    },
  ],
} as const satisfies ProjectContent;
