import content from "@/utils/ghost-content";

export default async function handler(req, res) {
  const { slug } = req.query;
  const posts = await content.posts
    .read({
      slug,
    })
    .catch((err) => {
      console.error(err);
    });
  res.status(200).json(posts);
}