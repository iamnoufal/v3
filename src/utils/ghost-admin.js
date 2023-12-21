const GhostAdminAPI = require("@tryghost/admin-api")

const admin = new GhostAdminAPI({
  url: process.env.GHOST_URL,
  key: process.env.GHOST_ADMIN_API_KEY,
  version: "v5.0"
});

export default admin