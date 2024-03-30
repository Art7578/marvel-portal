import React from "react";
import css from '../css/Card.module.css'

const ComicCard = ({ comic }) => {
  const {  title, thumbnail, detailUrl } = comic;

  return (
    <li className={css.card}>
      <img className={css.image} src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
      <div className={css.details}>
        <h2 className={css.name}>{title}</h2>
        <button className={css.info}>More info</button>
        <a className={`${css.link} ${css.link_comic}`} href={detailUrl} target="_blank" rel="noopener noreferrer">
          Details
        </a>
      </div>
    </li>
  );
};

export default ComicCard;