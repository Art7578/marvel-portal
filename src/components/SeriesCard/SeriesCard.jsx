import React from "react";
import css from '../css/Card.module.css';

const SeriesCard = ({ series }) => {
  const { title, thumbnail, urls } = series;

  return (
    <li className={css.card}>
      <img className={css.image} src={`${thumbnail.path.replace(/^http:\/\//i, 'https://')}.${thumbnail.extension}`} alt={title} />
      <div className={css.details}>
        <h3 className={css.name}>{title}</h3>
        <button className={css.info}>More info</button>
        {urls && urls.map((url, index) => (
          <a className={`${css.link} ${css.link_series}`} key={index} href={url.url} target="_blank" rel="noopener noreferrer">{url.type}</a>
        ))}
      </div>
    </li>
  );
};

export default SeriesCard;