import React from "react";
import StoriesCard from "../StoriesCard/StoriesCard";
import css from '../componenets_css/List.module.css';

const StoriesList = ({ stories }) => {
  return (
    <div className={css.list}>
      {stories.map((story, index) => (
        <StoriesCard key={`${story.id}-${index}`} story={story} />
      ))}
    </div>
  );
};

export default StoriesList;