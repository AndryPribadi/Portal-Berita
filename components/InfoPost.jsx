import React from "react";
import PostAuthor from "./PostAuthor";
import PostMetaTitle from "./PostMetaTitle";
import { formatDate } from "../utils/utils";

const InfoPost = ({
  category,
  date,
  title,
  shortDescription,
  authorAvatar,
  authorName,
  authorJob,
}) => {
  return (
    <>
      <PostMetaTitle
        category={category}
        date={formatDate(date)}
        title={title}
      />
      <p className="text-white/60 mt-5 w-10/12">{shortDescription}</p>
      <PostAuthor
        authorAvatar={authorAvatar}
        authorName={authorName}
        authorJob={authorJob}
      />
    </>
  );
};

export default InfoPost;
