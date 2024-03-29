import React from "react";
import css from './CharCard.module.css';

const CharCard = ({ character }) => {
  const { name, thumbnail, homepage, wiki } = character;

  return (
    <li className={css.char_card}>
      <img className={css.char_image} src={thumbnail.path + "." + thumbnail.extension} alt={name} />
      <div className={css.char_details}>
        <h2 className={css.char_name}>{name}</h2>
        <button className={css.char_info}>More info</button>
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