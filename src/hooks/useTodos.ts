import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface Todo {
  id: number;
  title: string;
}

const useTodos = () => {
  const fetchTodos = () => {
    return axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos").then((res) => res.data);
  };
return useQuery<Todo[], Error>({
    queryKey: ["todos"], //unique identifier which is array of one or more values...
    queryFn: fetchTodos, // function that we use to fetch the data from the backend
});
};

export default useTodos