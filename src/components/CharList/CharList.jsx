import React from "react";
import CharCard from "../CharCard/CharCard";

const CharList = ({ characters }) => {
  return (
    <div className="char-list">
      {characters.map((character, index) => (
        <CharCard key={`${character.id}-${index}`} character={character} />
      ))}
    </div>
  );
};

export default CharList;