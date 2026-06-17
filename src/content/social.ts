export const social = [
  { url: "https://github.com/Thanhlong0912", name: "github" },
  { url: "https://www.linkedin.com/in/long-%C4%91inh-4759b539b/", name: "linkedin" },
  { url: "mailto:dinhthanhlong47@gmail.com", name: "mail" },
] as const satisfies {
  url: string;
  name: "mail" | "github" | "instagram" | "linkedin" | "x";
}[];
