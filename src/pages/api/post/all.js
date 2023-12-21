import content from "@/utils/ghost-content";

export default async function handler(req, res) {
  const posts = await content.posts
    .browse({
      limit: "all",
      filter: "tag:blog",
      include: "tags,authors",
    })
    .catch((err) => {
      console.error(err);
    });
  res.status(200).json(posts.map(p => new Object({ title: p.title, excerpt: p.excerpt, slug: p.slug, feature_image: p.feature_image, published_at: p.published_at, authors: p.authors, tags: p.tags})));
}