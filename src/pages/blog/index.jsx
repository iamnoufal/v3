import Head from "next/head";
import Box from "@mui/material/Box";
import Layout from "@/components/layout";
import IntroComponent from "@/components/intro";
import Subscribe from "@/components/blog/subscribe";
import PostList from "@/components/blog/posts";

export default function Blog(props) {
  return (
    <>
      <Head>
        <title>Noufal&apos;s Blog</title>
        <meta name="description" content="Read, Inspire, Learn" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Noufal's Blog" />
        <meta
          property="og:description"
          content="Read, Inspire, Learn from the posts written by Noufal Rahman. This blog features topics from tech to science, from ground to space and from you to me"
        />
        <meta
          property="og:image"
          content="https://noufal.dev/assets/blog.webp"
        />
        <meta property="og:url" content="https://noufal.dev/blog" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Noufal's Blog" />
        <meta
          property="twitter:image"
          content="https://noufal.dev/assets/blog.webp"
        />
        <meta
          property="twitter:card"
          content="Read, Inspire, Learn from the posts written by Noufal Rahman. This blog features topics from tech to science, from ground to space and from you to me."
        />
        <meta property="twitter:title" content="Noufal's Blog" />
        <meta
          property="twitter:description"
          content="Read, Inspire, Learn from the posts written by Noufal Rahman. This blog features topics from tech to science, from ground to space and from you to me."
        />
      </Head>
      <Layout>
        <IntroComponent
          title="Noufal's Blog"
          subtitle="read, inspire, learn"
          style={{
            // background: `linear-gradient(0deg, #018891, transparent 70%),linear-gradient(150deg, rgb(254, 92, 131, 0.8) 10%, transparent 30%),linear-gradient(200deg, rgb(78, 133, 187), rgb(133, 65, 133), #861d1d, rgb(221 86 1), rgb(255 246 0))`
            background: `linear-gradient(0deg, #018891, transparent 70%), linear-gradient(300deg, #08083a, transparent 21%), linear-gradient(198deg, rgba(255, 193, 7, 0.2) 11%, transparent 0%), linear-gradient(50deg, #6610f2 10%, #6f42c1 20%, #d63384 35%, #dc3545 65%, #fd7e14 83%, #ffc107 91%)`,
          }}
        />
        <Box
          sx={{
            background:
              "linear-gradient(0deg, #080808 5%, transparent 90%), linear-gradient(180deg, #018891, transparent), linear-gradient(130deg, #6610f2 10%, #6f42c1 20%, #d63384 35%, #dc3545 65%, #fd7e14 83%, #ffc107 91%)",
          }}
        >
          <PostList {...props} />
          <Subscribe />
        </Box>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(process.env.BACKEND_URI + "/api/post/all");
  console.log("res")
  let data = await res.json();
  console.log("data")
  // let data = [
  //   {
  //     "title": "Warping Through Space: The Alcubierre Drive and the Future of Interstellar Travel",
  //     "excerpt": "With the Alcubierre drive, interstellar travel could become so commonplace that we'll need cosmic traffic cops to keep things moving.",
  //     "slug": "warping-through-space-the-alcubierre-drive-and-the-future-of-interstellar-travel",
  //     "feature_image": "https://digitalpress.fra1.cdn.digitaloceanspaces.com/tpog1t4/2023/12/1688014274203.webp",
  //     "published_at": "2023-12-08T23:00:00.000+05:30",
  //   }
  // ]
  return { props: { posts: data } };
}
