import axios from "axios";

const MOVIE_BASE_URL = "https://api.themoviedb.org/3";
const API_TOKEN = "425f27f959682e98e52348ef5569509f";

const getTrendingVideos = () => {
  return axios.get(`${MOVIE_BASE_URL}/trending/all/day?api_key=${API_TOKEN}`);
};

const getMovieByGenreId = (id) => {
  return axios.get(`${MOVIE_BASE_URL}/discover/movie?api_key=${API_TOKEN}&with_genres=${id}`);
};

const searchMovies = (query) => {
  return axios.get(`${MOVIE_BASE_URL}/search/movie`, {
    params: {
      api_key: API_TOKEN,
      query: query,
      language: 'en-US'
    }
  });
};

// dapet detail dari id
const getMovieById = (id) => {
  return axios.get(`${MOVIE_BASE_URL}/movie/${id}?api_key=${API_TOKEN}`);
};

export default {
  getTrendingVideos,
  getMovieByGenreId,
  searchMovies,
  getMovieById, 
};
