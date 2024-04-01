import React from "react";
import SeriesCard from "../SeriesCard/SeriesCard";
import css from '../componenets_css/List.module.css';

const SeriesList = ({ series }) => {
  return (
    <div className={css.list}>
      {series.map((series, index) => (
        <SeriesCard key={index} series={series} />
      ))}
    </div>
  );
};

export default SeriesList;