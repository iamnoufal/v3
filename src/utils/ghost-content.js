import GhostContentAPI from "@tryghost/content-api";

const content = new GhostContentAPI({
  url: process.env.GHOST_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: "v5.0"
});

export default content;