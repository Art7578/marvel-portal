import React from "react";
import CharCard from "../CharCard/CharCard";
import css from './CharList.module.css';

const CharList = ({ characters }) => {
  return (
    <div className={css.char_list}>
      {characters.map((character, index) => (
        <CharCard key={`${character.id}-${index}`} character={character} />
      ))}
    </div>
  );
};

export default CharList;