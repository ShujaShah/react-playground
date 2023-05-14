import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

const queryClient = new QueryClient();
//   {
//   defaultOptions: {
//     queries: {
//       retry: 3, // how many times should it retry if there is an error
//       cacheTime:300000, // 5 mins
//       staleTime: 10 * 1000, // how long the data is considered fresh (10 seconds)
//       refetchOnWindowFocus: false,
//       refetchOnReconnect:false,
//       refetchOnMount:false
//     },
//   },
// }

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
