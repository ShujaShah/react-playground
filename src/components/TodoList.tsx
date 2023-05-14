import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface Todo {
  id: number;
  title: string;
}

const TodoList = () => {
  const fetchTodos = () => {
    return axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos").then((res) => res.data);
  };

  const { data: todos, error,isLoading } = useQuery<Todo[], Error>({
    queryKey: ["todos"], //unique identifier which is array of one or more values...
    queryFn: fetchTodos, // function that we use to fetch the data from the backend
  });

  return (
    <>
      {error && <p>{error.message}</p>}
      {isLoading && <p>Loading...</p>}
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
