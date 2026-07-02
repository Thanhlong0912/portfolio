import theMovie0 from "../../../assets/images/projects/sharkie/sharkie-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "TheMovie",
  theme: "light",
  tags: ["javascript", "react", "css"],
  live: "https://the-movie-phi.vercel.app",
  source: "https://github.com/Thanhlong0912/TheMovie",
  description:
    "A movie discovery app built in React that pulls live data from a film API to browse, search, and explore titles.<br/><br/>Async data fetching, dynamic detail views, and a responsive React component layout — deployed on Vercel and browsable end to end.",
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
