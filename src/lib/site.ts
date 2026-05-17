/**
 * Central site metadata. Change once, reflect everywhere.
 */
export const SITE = {
  title: "Portfolio",
  author: "Chen Cohen",
  description:
    "DevOps, SRE, Platform Engineering, and AI-driven delivery — by Chen Cohen.",
  url: "https://portfolio.cohencil.com",
  locale: "en",
  postsPerPage: 10,
  // Homepage rails
  latestCount: 12,
  featuredCount: 3,
  social: {
    github: "https://github.com/cohencil",
    medium: "https://medium.com/@chenc_58113",
    linkedin: "https://www.linkedin.com/in/chen-cohen-031a3b3/",
    gitlab: "https://gitlab.com/chenco",
    rss: "/rss.xml",
  },
  // Giscus — update `giscus.repoId` and `giscus.categoryId` after enabling
  // Discussions at github.com/cohencil/portfolio.
  giscus: {
    repo: "cohencil/portfolio" as const,
    repoId: "",
    category: "Announcements",
    categoryId: "",
    mapping: "pathname",
    reactionsEnabled: "1",
    emitMetadata: "0",
    inputPosition: "bottom",
    theme: "transparent_dark",
    lang: "en",
  },
};

export type SiteConfig = typeof SITE;
