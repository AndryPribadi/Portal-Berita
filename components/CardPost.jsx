import Link from "next/link";
import React from "react";
import InfoPost from "./InfoPost";

const CardPost = (props) => {
  return (
    <div>
      <article>
        <Link href={props.slug}>
          <a>
            <img
              src={process.env.NEXT_PUBLIC_APIURL + props.thumbnail.url}
              className="w-full rounded mb-4"
            />
          </a>
        </Link>
        <InfoPost
          slug={props.slug}
          category={props.category.name}
          date={props.published_at}
          title={props.title}
          shortDescription={props.headline}
          authorName={props.author.name}
          authorJob={props.author.job}
          authorAvatar={
            process.env.NEXT_PUBLIC_APIURL + props.author.avatar.url
          }
        />
      </article>
    </div>
  );
};

export default CardPost;
