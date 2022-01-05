const API_KEY = process.env.REACT_APP_TMDB_API_KEY,
  baseURL = process.env.REACT_APP_TMDB_BASE_URL,
  requests = {
    fetchTrending: `${baseURL}/trending/all/week?api_key=${API_KEY}&language=es-MX`,
    fetchNetflixOriginals: `${baseURL}/discover/tv?api_key=${API_KEY}&with_networks=213&language=es-MX`,
    fetchTopRated: `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=es-MX`,
    fetchActionMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=28&language=es-MX`,
    fetchComedyMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=35&language=es-MX`,
    fetchHorrorMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=27&language=es-MX`,
    fetchRomanceMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=10749&language=es-MX`,
    fetchDocumentaries: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=99&language=es-MX`,
  };

export default requests;
