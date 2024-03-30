import React from "react";
import ComicCard from "../ComicCard/ComicCard";
import css from '../css/List.module.css';

const ComicList = ({ comics }) => {
  return (
    <div className={css.list}>
      {comics.map((comic, index) => (
        <ComicCard key={`${comic.id}-${index}`} comic={comic} />
      ))}
    </div>
  );
};

export default ComicList;