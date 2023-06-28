import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "27cc066b8955468280ab03d163b00e04",
  },
});
