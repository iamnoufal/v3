import { Box, Container } from "@mui/material";
import Head from "next/head";
import Layout from "@/components/layout";
import Subscribe from "@/components/blog/subscribe";
import PostIntro from "@/components/blog/intro";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect } from "react";

export default function Post(props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <Head>
        <title>{props.title + " | Noufal's Blog"}</title>
        <meta name="description" content={props.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={"https://noufal.dev/blog/" + props.slug} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.excerpt} />
        <meta
          property="og:image"
          content={props.feature_image || "https://noufal.dev/assets/blog.webp"}
        />
        <meta
          property="og:url"
          content={"https://noufal.dev/blog/" + props.slug}
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Noufal's Blog" />
        <meta
          property="twitter:image"
          content={props.feature_image || "https://noufal.dev/assets/blog.webp"}
        />
        <meta property="twitter:card" content={props.excerpt} />
        <meta property="twitter:title" content={props.title} />
        <meta property="twitter:description" content={props.excerpt} />
      </Head>
      <Layout>
        <Box>
          <PostIntro {...props} />
          <Box sx={{ pt: 10, bgcolor: "rgb(10, 10, 10)", color: "white" }}>
            <Container maxWidth="md" className="post">
              <div dangerouslySetInnerHTML={{ __html: props.html }}></div>
            </Container>
            <Subscribe />
          </Box>
        </Box>
      </Layout>
    </>
  );
}

// export const runtime = 'experimental-edge';

export async function getServerSideProps({ params }) {
  const post_slug = params.slug;
  // const ghost_key = process.env.GHOST_CONTENT_API_KEY;
  // const ghost_url = process.env.GHOST_URL;
  const res = await fetch(process.env.BACKEND_URI + "/api/post/" + post_slug);
  if (res.status != 200) {
    return { notFound: true }
  }
  const data = await res.json();
  return { props: data };
}

// export async function getStaticPaths() {
//   const ghost_key = process.env.GHOST_CONTENT_API_KEY;
//   const ghost_url = process.env.GHOST_URL;
//   const res = await fetch(
//     `${ghost_url}/ghost/api/content/posts?key=${ghost_key}`
//   );
//   const data = await res.json();
//   return {
//     paths: data.posts.map((post) => {
//       return {
//         params: {
//           slug: post.slug,
//         },
//       };
//     }),
//     fallback: "blocking",
//   };
// }
