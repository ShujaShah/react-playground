import { useState } from "react";
import usePosts from "../hooks/usePosts";

const posts = () => {
  const [userId, setUserId] = useState<number>();
  const { data: posts, error, isLoading } = usePosts(userId);

  return (
    <>
      {error && <p>{error.message}</p>}
      {isLoading && <p>Loading...</p>}
      <select onChange={(event) => setUserId(parseInt(event.target.value))} className="form-select" value={userId}>
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default posts;
