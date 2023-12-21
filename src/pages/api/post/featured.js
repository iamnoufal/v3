import content from "@/utils/ghost-content";

export default async function handler(req, res) {
  const posts = await content.posts
    .browse({
      limit: "all",
      filter: "featured:true",
      include: "tags,authors"
    })
    .catch((err) => {
      console.error(err);
    });
  res.status(200).json(posts);
}