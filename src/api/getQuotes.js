import axios from "axios";

const url = "https://andruxnet-random-famous-quotes.p.rapidapi.com";

const config = {
  headers: {
    "x-rapidapi-key": "af65c99d3amshc1ed6bc41f44fc4p1eae9cjsnd54056daf1d3",
  },
  transformResponse: (response) => response,
};

export default async () => {
  const { data } = await axios.get(url, config);
  return data;
};
