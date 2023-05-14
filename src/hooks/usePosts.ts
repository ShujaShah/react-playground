import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface Post {
  id: number;
  title: string;
}

const usePosts = () => {
  const fetchPosts = () => {
    return axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts").then((res) => res.data);
  };
return useQuery<Post[], Error>({
    queryKey: ["posts"], //unique identifier which is array of one or more values...
    queryFn: fetchPosts, // function that we use to fetch the data from the backend
    staleTime: 10*1000  // how long the data is considered to be fresh in this case 10 seconds 
});
};

export default usePosts