import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

interface Genres {
  id: number;
  name: string;
}

interface FetchGenres {
  count: number;
  results: Genres[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGenres>("/genres", { signal: controller.signal })
      .then((res) => setGenres(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { genres, error };
};

export default useGenres;
