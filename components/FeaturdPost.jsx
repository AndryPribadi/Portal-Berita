import Link from "next/link";
import React from "react";
import InfoPost from "./InfoPost";

const FeaturdPost = (props) => {
  return (
    <article>
      <div className="flex -mx-4 lg:items-center items-start flex-wrap">
        <div className="px-4 lg:w-8/12 md:w-7/12 w-full">
          <Link href={props.slug}>
            <a>
              <img
                src={
                  process.env.NEXT_PUBLIC_APIURL +
                  props.thumbnail.formats.medium.url
                }
                className="rounded-xl w-full mb-4 md:mb-0"
              />
            </a>
          </Link>
        </div>
        <div className="lg:w-4/12 md:w-5/12 w-full px-4">
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
        </div>
      </div>
      <hr className="border-white/10 mt-10 md:hidden" />
    </article>
  );
};

export default FeaturdPost;
