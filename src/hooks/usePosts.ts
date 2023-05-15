import axios from "axios";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

interface Post {
  id: number;
  title: string;
}

interface PostQuery{
    //page: number,
    pageSize: number
}

const usePosts = (query: PostQuery) => {
  const fetchPosts = ( {pageParam = 1} ) => {
    return axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts",{params: {
        _start: (pageParam - 1) * query.pageSize,
        _limit: (query.pageSize)
    }}).then((res) => res.data);
  };
return useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", query], //unique identifier which is array of one or more values...
    queryFn: ({ pageParam }) => fetchPosts({ pageParam }), // function that we use to fetch the data from the backend
    staleTime: 10*1000 , // how long the data is considered to be fresh in this case 10 seconds
    keepPreviousData: true,  // to keep the previos data intact while moving to the next page to improve user
    getNextPageParam: (lastPage, allPages)=>{
        return lastPage.length > 0 ? allPages.length+1 : undefined;
    }
});
};

export default usePosts