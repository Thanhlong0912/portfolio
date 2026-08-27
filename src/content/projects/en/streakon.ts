import feedScreenshot from "../../../assets/images/projects/streakon/feed.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Short-Video Social Platform",
  theme: "dark",
  tags: ["next", "typescript", "supabase", "postgresql", "tailwind"],
  live: "https://tiktok-clone-longbi.vercel.app",
  source: "https://github.com/Thanhlong0912/tiktok-clone",
  description:
    "A full short-video social product built solo — feed, profiles, upload, search, explore, activity and moderation.<br/><br/>The interesting constraint: there is no application server tier. Ranking, aggregation and access control live in SECURITY DEFINER Postgres functions, called straight from the browser client.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: feedScreenshot,
        alt: "The For You feed, with a ranked video, engagement counters and suggested accounts",
        caption: "The For You feed — one RPC returns ranked posts, authors, counters and viewer state",
      },
    },
    {
      type: "text",
      props: {
        title: "Ranking in SQL",
        text: "The recommendation ranking is written as Postgres functions rather than application code. Engagement rates are Bayesian-smoothed so a post with three views cannot outrank a proven one, then blended with watch-completion and dwell-time signals and weighted by per-creator and per-hashtag affinity.",
      },
    },
    {
      type: "list",
      props: {
        title: "Signals in the ranking function",
        items: [
          "Bayesian-smoothed engagement rate",
          "Watch-completion and dwell time",
          "Per-creator and per-hashtag affinity",
          "Exponential freshness decay, 15-hour half-life",
          "Exploration bonus guaranteeing new uploads impressions",
          "Skip-rate penalties applied after decay",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Data model",
        text: "20+ tables under Row Level Security, with trigger-maintained counters and pg_cron refresh jobs. The feed collapses into a single RPC returning ranked posts with their authors, counters and the viewer's own like, save, repost and follow state, so a card renders without fetching anything of its own. Column-level write policies stop users editing the engagement counters that drive their own ranking, and comment threads are held to exactly two levels by a trigger that rejects a reply to a reply — which gives reply_count one owner and keeps every read non-recursive.",
      },
    },
  ],
} as const satisfies ProjectContent;
