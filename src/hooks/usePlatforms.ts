import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlaforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlaforms;
