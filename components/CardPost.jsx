import Link from "next/link";
import React from "react";
import InfoPost from "./InfoPost";

const CardPost = ({ thumbnail, ...infoPost }) => {
  return (
    <div>
      <article>
        <Link href="/detail">
          <a>
            <img src={thumbnail} className="w-full rounded mb-4" />
          </a>
        </Link>
        <InfoPost {...infoPost} />
      </article>
    </div>
  );
};

export default CardPost;
