import Post from "@/app/components/Post/Post";

export async function generateMetadata({ params, searchParams }) {
  const post = await fetchData(params.postId);
  return {
    title: post.title,
    description: post.body,
    keywords: "",
  };
}

async function fetchData(id) {
  const operationResult = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return await operationResult.json();
}

const PostPage = async ({ params: { postId } }) => {
  const post = await fetchData(postId);
  return <Post data={post} />;
};

export default PostPage;
