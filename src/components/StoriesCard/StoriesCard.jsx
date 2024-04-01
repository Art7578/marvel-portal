import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStoriesInfo } from "../../redux/actions/storiesInfoActions";
import defaultImage from "../img/default-image.jpg"
import css from '../componenets_css/Card.module.css';

const StoriesCard = ({ story }) => {
  const { id ,title, thumbnail, resourceURI } = story;
  const dispatch = useDispatch();

  const handleMoreInfoClick = () => {
    dispatch(fetchStoriesInfo(id));
  };

  const imageSrc = thumbnail ? `${thumbnail.path}.${thumbnail.extension}` : defaultImage;

  return (
    <li className={css.card}>
      <img className={css.image} src={imageSrc} alt={title} />
      <div className={css.details}>
        <h2 className={css.name}>{title}</h2>
        <Link to={`/stories/${id}`} className={css.info} onClick={handleMoreInfoClick}>More info</Link>
        <p className={css.link}>{resourceURI}</p>
      </div>
    </li>
  );
};

export default StoriesCard;