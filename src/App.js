import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.scss";
import Menu from "./Menu";
import Search from "./Search";
import Rankinglist from "./Rankinglist";

class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  async componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 6000);

    const {
      //data.data.movies
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );

    this.setState({ movies, isLoading: false });
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="page">
            <header className="header">
              <h1 class="website-title">Eun's Movie</h1>
              <Search />
            </header>
            <div className="menu">
              <Menu />
            </div>
            <div className="movies">
              {movies.map((movie) => {
                console.log(movie);
                return (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
                );
              })}
            </div>
            <div className="rank_list">
              <Rankinglist />
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default App;
