import { watch } from "vue";
import { computeRoute, inject, pageview } from "@vercel/analytics";
import { path, projectId } from "./useRouteObserver";

export const useAnalytics = () => {
  // Auto-tracking is off because the site uses a hand-rolled history router:
  // pageviews are reported from the `path` ref instead, which keeps them in
  // step with the app's own route state.
  inject({
    framework: "vue",
    mode: import.meta.env.DEV ? "development" : "production",
    disableAutoTrack: true,
  });

  watch(
    path,
    (newPath) => {
      pageview({
        // Groups the project pages under /project/[slug] while keeping the
        // exact path, so the dashboard shows both the route and each project.
        route: computeRoute(newPath, projectId.value ? { slug: projectId.value } : null),
        path: newPath,
      });
    },
    { immediate: true },
  );
};
