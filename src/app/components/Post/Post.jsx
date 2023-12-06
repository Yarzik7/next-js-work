"use client";
import Link from "next/link";

const Post = ({ data: { title, body } }) => {
  return (
    <article>
      <Link href="/">Back</Link>
      <br />
      <h2 className="post__title">{title}</h2>
      <p className="post__text">{body}</p>
    </article>
  );
};

export default Post;
