import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Header from "../Header/Header";
import "../default.css";
import "./detail.css";


const DetailPresenter = ({ isLoading, results, error }) => (
  <section className="container">
    <>
    <Header />
    { isLoading 
      ? (
      <>
      <Helmet><title>Loading || Ramflix</title></Helmet>
      <div className="loader"><span className="loader_text">"Loading..." </span></div>
      </>
      ) : (              
          <div className="DetailSection">
            <Helmet><title>{ results.original_title } || Ramflix</title></Helmet>
            <img src={`https://image.tmdb.org/t/p/original${results.backdrop_path}`}></img>
            <span></span>
            <div className="content">
              <img src={`https://image.tmdb.org/t/p/original${results.poster_path}`}></img>             
              <div className="data">
                <h1>{`${results.original_title}`}</h1>
                <span>{`${results.release_date}`} | </span>
                <span>{`${results.runtime}`} min | </span>
                <span>
                  {results.genres && 
                    results.genres.map((genre, index) => 
                      index === results.genres.length - 1 ? genre.name : `${genre.name} / `
                    )
                  }
                </span>
                <p>{ results.overview }</p>
              </div>
            </div>
          </div>
        ) 
    }
    </>
  </section>
);

DetailPresenter.propTypes = {
  isLoading: PropTypes.bool,
  results: PropTypes.object,
  error: PropTypes.string,
}
  
export default DetailPresenter;