import tiktokClone0 from "../../../assets/images/projects/streakon/streakon-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "tiktok-clone",
  theme: "dark",
  tags: ["next", "typescript", "react", "tailwind"],
  live: "https://tiktok-clone-lac.vercel.app",
  source: "https://github.com/Thanhlong0912/tiktok-clone",
  description:
    "Ứng dụng mạng xã hội video theo phong cách TikTok, xây dựng trên Next.js 13 với App Router và TypeScript xuyên suốt.<br/><br/>Feed video dạng dọc điều hướng bằng vuốt, phát video, trang cá nhân và kiến trúc component có thể mở rộng — loại giao diện nhiều tương tác nơi trạng thái UI và hiệu năng phát video phải luôn đồng bộ.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: tiktokClone0,
        alt: "Bản xem trước ứng dụng TikTok Clone trên mobile",
        caption: "Ý tưởng ứng dụng video trên mobile",
      },
    },
  ],
} as const satisfies ProjectContent;
