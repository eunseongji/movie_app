import React, { Component } from "react";
import "./Rankinglist.scss";
import axios from "axios";
import RankinglistItem from "./RankinglistItem";
class Rankinglist extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  componentDidMount() {
    axios
      .get(
        "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=e047c2ef1e69765974722e6fda75e84c&targetDt=20200901"
      )
      .then((response) => {
        const { data } = response;
        console.log(data);

        this.setState({
          isLoading: false,
          movies: data.boxOfficeResult.dailyBoxOfficeList,
        });
      });
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="ranking_list_box">
        <h2 className="list_title">현재 상영작 순위</h2>
        <div className="list_movies">
          {movies.map((movie) => {
            console.log(movie);
            return (
              <RankinglistItem
                key={movie.rnum}
                id={movie.rnum}
                title={movie.movieNm}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Rankinglist;
