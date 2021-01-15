import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Movie from "./Movie";
import { movieApi } from "./api";


class Detail extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    error: null
  };

  /* getMovies = async () => {
    const { data: { data : { movies }}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  } */

  async componentDidMount() {
    try {
      const { data : { data : { movies }}} = await movieApi.movieDetail();
    } catch {
      this.setState({ error: "Can't find Movie information"})
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        <>
        <Header />
        { isLoading 
          ? ( <div className="loader"><span className="loader_text">"Loading..." </span></div>
          ) : (
              <Link to="">
                <div className="movies">
                  <h3>Movie List by ranking</h3>
                  <div className="movieBox">
                    {movies.map(movie => (
                      <Movie
                        key={movie.id}
                        id={movie.id}
                        year={movie.year}
                        title={movie.title}
                        summary={movie.summary}
                        poster={movie.medium_cover_image}
                        genres={movie.genres}
                        rating={movie.rating}
                      />
                    ))}
                  </div>
                </div>
              </Link>  
            ) 
        }
        </>
      </section>
    );
  };
};

export default Detail;