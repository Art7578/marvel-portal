import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchComicInfo } from "../../redux/actions/comicInfoActions";
import css from '../css/Card.module.css'

const ComicCard = ({ comic }) => {
  const { id, title, thumbnail, detailUrl } = comic;
  const dispatch = useDispatch();

  const handleMoreInfoClick = () => {
    dispatch(fetchComicInfo(id));
  };

  return (
    <li className={css.card}>
      <img className={css.image} src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
      <div className={css.details}>
        <h2 className={css.name}>{title}</h2>
        <Link to={`/comics/${id}`} className={css.info} onClick={handleMoreInfoClick}>More info</Link >
        <a className={`${css.link} ${css.link_comic}`} href={detailUrl} target="_blank" rel="noopener noreferrer">
          Details
        </a>
      </div>
    </li>
  );
};

export default ComicCard;