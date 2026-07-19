import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Chris Taylor",
  EMAIL: "mail@chrisryantaylor.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "A collection of my projects.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const PORTFOLIO: Metadata = {
  TITLE: "Portfolio",
  DESCRIPTION: "A collection of my projects.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/chtaylor"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/chrisryantaylor",
  }
];
