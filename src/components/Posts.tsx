import { useState } from "react";
import usePosts from "../hooks/usePosts";

const posts = () => {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  //const [userId, setUserId] = useState<number>();
  const { data: posts, error, isLoading } = usePosts({ page, pageSize });

  return (
    <>
      {error && <p>{error.message}</p>}
      {isLoading && <p>Loading...</p>}
      {/* <select onChange={(event) => setUserId(parseInt(event.target.value))} className="form-select" value={userId}>
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select> */}
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button disabled={page === 1} className="btn btn-primary" onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <button className="btn btn-primary" onClick={() => setPage(page + 1)}>
        Next
      </button>
    </>
  );
};

export default posts;
