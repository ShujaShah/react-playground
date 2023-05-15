import { useState } from "react";
import usePosts from "../hooks/usePosts";
import React from "react";

const posts = () => {
  const pageSize = 10;
  //const [page, setPage] = useState(1);
  //const [userId, setUserId] = useState<number>();
  const { data: posts, error, isLoading, fetchNextPage, isFetchingNextPage } = usePosts({ pageSize });

  return (
    <>
      {error && <p>{error.message}</p>}
      {isLoading && <p>Loading...</p>}
      <ul>
        {posts?.pages.map((page) => (
          <React.Fragment>
            {page.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <button disabled={isFetchingNextPage} className="btn btn-primary" onClick={() => fetchNextPage()}>
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default posts;
