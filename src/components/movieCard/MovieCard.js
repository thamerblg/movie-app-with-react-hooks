import React from "react";
import "./MovieCard.css";
import { FaShareAlt, FaHeart, FaCommentAlt } from "react-icons/fa";
import StarRatings from "react-star-ratings/build/star-ratings";
import { FaClock, FaCalendarAlt } from "react-icons/fa";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie_card">
      <div className="info_section">
        <div className="movie_header">
          <img className="locandina" src={movie.posterUrl} alt="img-movie" />
          <h1>{movie.title}</h1>
          <div className="movie_detail">
            <p>
              <FaCalendarAlt size="22px" /> {movie.releaseDate}
            </p>
            <p className="minutes">
              <FaClock size="22px" /> {movie.duration}
            </p>
            <p>{movie.genre}</p>
          </div>
          <div className="movie_rating">
            <StarRatings
              size={24}
              rating={movie.average}
              starRatedColor="yellow"
              starDimension="24px"
              starSpacing="0px"
            />
          </div>
        </div>
        <div className="movie_desc">
          <p className="text">{movie.description}</p>
        </div>

        <div className="movie_social">
          <ul>
            <li>
              <FaShareAlt className="material-icons" />
            </li>
            <li>
              <FaHeart className="material-icons" />
            </li>
            <li>
              <FaCommentAlt className="material-icons" />
            </li>
          </ul>
        </div>
      </div>
      <div
        className="blur_back"
        style={{ background: `url(${movie.backdropPath})` }}
      />
    </div>
  );
};

export default MovieCard;
