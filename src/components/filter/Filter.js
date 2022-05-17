import React from "react";
import { FormControl } from "react-bootstrap";
import StarRatings from "react-star-ratings/build/star-ratings";
import "./Filter.css";

const Filter = ({ setTitleSearch, ratingSearche, setRatingSearche }) => {
  return (
    <div className="filter">
      <form>
        <FormControl
          type="search"
          className="input_add"
          placeholder="Search movie by title"
          onChange={(e) => setTitleSearch(e.target.value)}
        />
      </form>

      <StarRatings
        rating={ratingSearche}
        starRatedColor="#fe0"
        changeRating={(newRating) => {
          setRatingSearche(newRating);
        }}
        numberOfStars={5}
        starDimension="24px"
        name="rating"
      />
    </div>
  );
};

export default Filter;
