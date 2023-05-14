import usePosts from "../hooks/usePosts";

const posts = () => {
  const { data: posts, error, isLoading } = usePosts();

  return (
    <>
      {error && <p>{error.message}</p>}
      {isLoading && <p>Loading...</p>}
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default posts;
