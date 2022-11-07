import Container from "../components/Container";
import React from "react";
import Layout from "../components/Layout";
import PostMetaTitle from "../components/PostMetaTitle";
import PostAuthor from "../components/PostAuthor";
import Head from "next/head";
import { formatDate } from "../utils/utils";

export async function getServerSideProps({ params: { slug } }) {
  const reqDetail = await fetch(
    process.env.NEXT_PUBLIC_APIURL + "/posts?slug=" + slug
  );
  const single = await reqDetail.json();

  // if (!single.lenght)
  //   return {
  //     notFound: true,
  //   };
  console.log(single);
  return {
    props: {
      single: single.lenght > 0 ? single[0] : {},
    },
  };
}

export default function Detail({
  single: {
    title,
    category,
    published_at,
    author,
    thumbnail,
    headline,
    content,
  },
}) {
  return (
    <Layout>
      <Head>
        <title>{title} &mdash; Epictetus</title>
      </Head>
      <Container>
        <div className="md:w-6/12 w-full mx-auto flex items-center flex-col">
          <PostMetaTitle
            category={category.name}
            date={formatDate(published_at)}
            title={title}
            center
          />
          <PostAuthor
            authorName={author.name}
            authorJob={author.job}
            authorAvatar={process.env.NEXT_PUBLIC_APIURL + author.avatar.url}
          />
        </div>
        <div className="md:w-10/12 w-full mx-auto">
          <img
            src={process.env.NEXT_PUBLIC_APIURL + thumbnail.formats.large.url}
            className="w-full rounded-lg my-10"
          />
        </div>
        <div className="md:w-8/12 w-full mx-auto leading-relaxed">
          <p className="text-xl mb-4">{headline}</p>
          <p className="mb-4">{content}</p>
        </div>
      </Container>
    </Layout>
  );
}
