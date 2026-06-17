import theMovie0 from "../../../assets/images/projects/sharkie/sharkie-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "TheMovie",
  theme: "light",
  tags: ["javascript", "react", "css"],
  live: "https://the-movie-phi.vercel.app",
  source: "https://github.com/Thanhlong0912/TheMovie",
  description:
    "Ứng dụng khám phá phim công khai trong nhóm dự án được ghim trên GitHub profile.<br/><br/>Dự án viết bằng JavaScript và có bản triển khai Vercel để truy cập trực tiếp.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: theMovie0,
        alt: "Giao diện ứng dụng khám phá phim TheMovie",
        caption: "Giao diện khám phá phim",
      },
    },
  ],
} as const satisfies ProjectContent;
