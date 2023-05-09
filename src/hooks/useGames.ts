import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

    //define the interface of the type of the game that we receive
export interface Game {
    id: number;
    name: string;
    released: string;
    rating: number;
    background_image: string;
  }
  
  //define the interface for the response that we get when sending the request
  interface GamesResponse {
    count: number;
    results: Game[];
  }
  
const useGames = () =>{

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      apiClient
        .get<GamesResponse>("/games")
        .then((res) => {setGames(res.data.results); setLoading(false)})
        .catch((err) =>{ setError(err.message);setLoading(false)} );
    },[]);
  
  return { games, error, isLoading}
}

export default useGames