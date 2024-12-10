import type { StarlightPlugin } from "@astrojs/starlight/types"

export function effectPodcastPlugin(): StarlightPlugin {
  return {
    name: "starlight-effect-podcast-plugin",
    hooks: {
      setup({ addIntegration }) {
        addIntegration({
          name: "effect-playground-integration",
          hooks: {
            "astro:config:setup": ({ injectRoute }) => {
              injectRoute({
                entrypoint:
                  "./src/components/plugins/podcast/PodcastLanding.astro",
                pattern: "/[...prefix]",
                prerender: true
              })

              injectRoute({
                entrypoint:
                  "./src/components/plugins/podcast/PodcastEpisodes.astro",
                pattern: "/[...prefix]/episodes",
                prerender: true
              })

              injectRoute({
                entrypoint:
                  "./src/components/plugins/podcast/PodcastEpisode.astro",
                pattern: "/[...prefix]/episodes/[...episode]",
                prerender: true
              })

              injectRoute({
                entrypoint: "./src/components/plugins/podcast/rss.xml.ts",
                pattern: "/[...prefix]/rss.xml",
                prerender: true
              })
            }
          }
        })
      }
    }
  }
}
