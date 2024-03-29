import React from "react";

const CharCard = ({ character }) => {
  const { name, thumbnail, homepage, wiki } = character;

  return (
    <div className="char-card">
      <img src={thumbnail.path + "." + thumbnail.extension} alt={name} />
      <div className="char-details">
        <h2>{name}</h2>
        <button>More info</button>
        <div className="char-links">
          <a href={homepage} target="_blank" rel="noopener noreferrer">
            Homepage
          </a>
          <a href={wiki} target="_blank" rel="noopener noreferrer">
            Wiki
          </a>
        </div>
      </div>
    </div>
  );
};

export default CharCard;