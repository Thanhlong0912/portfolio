import theMovie0 from "../../../assets/images/projects/sharkie/sharkie-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "TheMovie",
  theme: "light",
  tags: ["javascript", "react", "css"],
  live: "https://the-movie-phi.vercel.app",
  source: "https://github.com/Thanhlong0912/TheMovie",
  description:
    "Ứng dụng khám phá phim xây dựng bằng React, lấy dữ liệu trực tiếp từ API phim để duyệt, tìm kiếm và khám phá tựa phim.<br/><br/>Tải dữ liệu bất đồng bộ, trang chi tiết động và bố cục component React responsive — triển khai trên Vercel và duyệt được từ đầu đến cuối.",
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
