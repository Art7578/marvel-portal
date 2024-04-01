import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCharacterInfo } from "../../redux/actions/characterInfoActions";
import css from '../componenets_css/Card.module.css';

const CharCard = ({ character }) => {
  const { id, name, thumbnail, homepage, wiki } = character;
  const dispatch = useDispatch();

  const handleMoreInfoClick = () => {
    dispatch(fetchCharacterInfo(id));
  };

  return (
    <li className={css.card}>
      <img className={css.image} src={`${thumbnail.path.replace(/^http:\/\//i, 'https://')}.${thumbnail.extension}`} alt={name} />
      <div className={css.details}>
        <h2 className={css.name}>{name}</h2>
        <Link to={`/characters/${id}`} className={css.info} onClick={handleMoreInfoClick}>More info</Link>
        <div className={css.links}>
          <a className={css.link} href={homepage} target="_blank" rel="noopener noreferrer">
            Homepage
          </a>
          <a className={css.link} href={wiki} target="_blank" rel="noopener noreferrer">
            Wiki
          </a>
        </div>
      </div>
    </li>
  );
};

export default CharCard;