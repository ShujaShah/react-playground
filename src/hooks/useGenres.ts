import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

    //define the interface of the type of the game that we receive
export interface Genre {
    id: number;
    name: string;
    image_background: string;
  }
  
  //define the interface for the response that we get when sending the request
  interface GenresResponse {
    count: number;
    results: Genre[];
  }
  
const useGenres = () =>{

    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      apiClient
        .get<GenresResponse>("/genres")
        .then((res) => {setGenres(res.data.results); setLoading(false)})
        .catch((err) =>{ setError(err.message);setLoading(false)} );
    },[]);
  
  return { genres, error, isLoading}
}

export default useGenres