import feedScreenshot from "../../../assets/images/projects/streakon/feed.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Nền tảng mạng xã hội video ngắn",
  theme: "dark",
  tags: ["next", "typescript", "supabase", "postgresql", "tailwind"],
  live: "https://tiktok-clone-longbi.vercel.app",
  source: "https://github.com/Thanhlong0912/tiktok-clone",
  description:
    "Một sản phẩm mạng xã hội video ngắn hoàn chỉnh do tôi tự làm — feed, trang cá nhân, đăng video, tìm kiếm, khám phá, hoạt động và kiểm duyệt.<br/><br/>Ràng buộc thú vị nhất: không có tầng máy chủ ứng dụng. Toàn bộ xếp hạng, tổng hợp và kiểm soát truy cập nằm trong các hàm Postgres SECURITY DEFINER, gọi trực tiếp từ client trên trình duyệt.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: feedScreenshot,
        alt: "Feed For You với video đã xếp hạng, bộ đếm tương tác và tài khoản gợi ý",
        caption: "Feed For You — một RPC duy nhất trả về bài đã xếp hạng, tác giả, bộ đếm và trạng thái người xem",
      },
    },
    {
      type: "text",
      props: {
        title: "Xếp hạng bằng SQL",
        text: "Thuật toán gợi ý được viết bằng hàm Postgres thay vì code ứng dụng. Tỉ lệ tương tác được làm mượt theo Bayes để một bài chỉ có ba lượt xem không thể vượt mặt bài đã được kiểm chứng, sau đó kết hợp với tín hiệu xem hết video và thời gian dừng, rồi nhân trọng số theo mức độ thân thuộc với từng nhà sáng tạo và từng hashtag.",
      },
    },
    {
      type: "list",
      props: {
        title: "Các tín hiệu trong hàm xếp hạng",
        items: [
          "Tỉ lệ tương tác làm mượt theo Bayes",
          "Mức độ xem hết video và thời gian dừng",
          "Thân thuộc theo nhà sáng tạo và theo hashtag",
          "Suy giảm độ mới theo hàm mũ, chu kỳ bán rã 15 giờ",
          "Điểm thưởng khám phá để bài mới luôn có lượt hiển thị",
          "Phạt tỉ lệ bỏ qua, áp dụng sau khi suy giảm",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Mô hình dữ liệu",
        text: "Hơn 20 bảng dưới Row Level Security, với bộ đếm duy trì bằng trigger và job làm mới bằng pg_cron. Feed được gom về một RPC duy nhất trả về bài đã xếp hạng kèm tác giả, bộ đếm và trạng thái like, lưu, đăng lại, theo dõi của chính người xem — nhờ vậy mỗi thẻ hiển thị mà không cần tự gọi thêm dữ liệu. Policy ghi ở cấp cột ngăn người dùng sửa chính những bộ đếm tương tác đang quyết định thứ hạng của họ, và luồng bình luận được giữ đúng hai cấp bằng một trigger từ chối trả lời cho một trả lời — nhờ đó reply_count chỉ có một nơi quản lý và mọi truy vấn đọc đều không đệ quy.",
      },
    },
  ],
} as const satisfies ProjectContent;
