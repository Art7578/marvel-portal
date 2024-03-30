import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCharacterInfo } from "../../redux/actions/characterInfoActions";
import css from './CharCard.module.css';

const CharCard = ({ character }) => {
  const { id, name, thumbnail, homepage, wiki } = character;
  const dispatch = useDispatch();

  const handleMoreInfoClick = () => {
    dispatch(fetchCharacterInfo(id));
  };

  return (
    <li className={css.char_card}>
      <img className={css.char_image} src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
      <div className={css.char_details}>
        <h2 className={css.char_name}>{name}</h2>
        <Link to={`/characters/${id}`} className={css.char_info} onClick={handleMoreInfoClick}>More info</Link>
        <div className={css.char_links}>
          <a className={css.char_link} href={homepage} target="_blank" rel="noopener noreferrer">
            Homepage
          </a>
          <a className={css.char_link} href={wiki} target="_blank" rel="noopener noreferrer">
            Wiki
          </a>
        </div>
      </div>
    </li>
  );
};

export default CharCard;