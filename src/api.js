import axios from "axios";


const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export const searchApi = {
  search: term => api.get("search/movie", {
    params: {
      api_key: "0d32823bbea4b0889cdd7c4bce3b1dbc",
      language: "en-US",
      query: encodeURIComponent(term)
    }
  })
};

/* const api2 = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "0d32823bbea4b0889cdd7c4bce3b1dbc",
    language: "en-US",
    page: 2
  }
}); */

export default api;

/* export const movieApi = {
  movie: () => api.get(),
  movie2: () => api2.get("movie/popular"),
  movie3: () => api3.get("movie/popular"),
  movie4: () => api4.get("movie/popular"),
  movie5: () => api5.get("movie/popular"),
  movieDetail: id => api.get(`movie/${id}?api_key=0d32823bbea4b0889cdd7c4bce3b1dbc&language=en-US`)
} */