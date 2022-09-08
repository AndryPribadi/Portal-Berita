import Link from "next/link";

const PostMetaTitle = ({ category, date, title, center }) => {
  return (
    <>
      <div className="flex item-center text-white/60 space-x-4">
        <div className="uppercase">{category}</div>
        <span>&bull;</span>
        <div>{date}</div>
      </div>
      <h2 className={`text-2xl mt-4 ${center ? "text-center" : ""}`}>
        <Link href="/detail">
          <a>{title}</a>
        </Link>
      </h2>
    </>
  );
};

export default PostMetaTitle;
