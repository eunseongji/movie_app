import React from "react";
import PropTypes from "prop-types";
import "./RankinglistItem.scss";

function RankinglistItem({ id, title }) {
  return (
    <div className="ranking_list">
      <ul className="list_box">
        <li className="ranking">{id}</li>
        <li className="moive_name">{title}</li>
      </ul>
    </div>
  );
}

RankinglistItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default RankinglistItem;
