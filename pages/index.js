import Container from "../components/Container";
import { useState } from "react";
import CardPost from "../components/CardPost";
import FeaturdPost from "../components/FeaturdPost";
import Layout from "../components/Layout";
import mockPosts from "../utils/posts.json";
import Head from "next/head";

export async function getServerSideProps() {
  const reqFeatured = await fetch(
    process.env.NEXT_PUBLIC_APIURL + "/posts?featured=true"
  );
  let featured = await reqFeatured.json();

  if (featured.lenght < 1) {
    featured = {};
  }

  return {
    props: {
      featured: featured[0],
    },
  };
}

export default function Home({ featured }) {
  const [posts, setPost] = useState(mockPosts);

  return (
    <Layout>
      <Head>
        <title>Home &mdash; Epictetus</title>
      </Head>
      <Container>
        <FeaturdPost {...featured} />
        <div className="flex -mx-4 flex-wrap mt-6">
          {posts.map((post) => (
            <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
