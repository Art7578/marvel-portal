import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSeriesInfo } from "../../redux/actions/seriesInfoActions";
import css from '../css/Card.module.css';

const SeriesCard = ({ series }) => {
  const { id, title, thumbnail, urls } = series;
  const dispatch = useDispatch();

  const handleMoreInfoClick = () => {
    dispatch(fetchSeriesInfo(id));
  };

  return (
    <li className={css.card}>
      <img className={css.image} src={`${thumbnail.path.replace(/^http:\/\//i, 'https://')}.${thumbnail.extension}`} alt={title} />
      <div className={css.details}>
        <h3 className={css.name}>{title}</h3>
        <Link to={`/series/${id}`} className={css.info} onClick={handleMoreInfoClick}>More info</Link>
        {urls && urls.map((url, index) => (
          <a className={`${css.link} ${css.link_series}`} key={index} href={url.url} target="_blank" rel="noopener noreferrer">{url.type}</a>
        ))}
      </div>
    </li>
  );
};

export default SeriesCard;