export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "node"
  | "next"
  | "tailwind"
  | "mongodb"
  | "express"
  | "redux"
  | "firebase"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  typescript: "TypeScript",
  node: "Node.js",
  next: "Next.js",
  tailwind: "Tailwind CSS",
  mongodb: "MongoDB",
  express: "Express",
  redux: "Redux",
  firebase: "Firebase",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
} as const satisfies Record<TagVariant, string>;
