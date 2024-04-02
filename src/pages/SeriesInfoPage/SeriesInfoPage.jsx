import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSeriesInfo } from "../../redux/actions/seriesInfoActions";
import css from "../page_css/infoPage.module.css";
import Loader from "../../components/Loader/Loader"; 

const SeriesInfoPage = () => {
  const { seriesId } = useParams();
  const dispatch = useDispatch();
  const seriesInfo = useSelector(state => state.seriesInfo.seriesInfo);
  const [dataLoading, setDataLoading] = useState(true); 

  useEffect(() => {
    setDataLoading(true); 
    dispatch(fetchSeriesInfo(seriesId))
      .then(() => setDataLoading(false)) 
      .catch(() => setDataLoading(false));
  }, [dispatch, seriesId]);

  if (dataLoading) {
    return <Loader/>;
  }

  if (!seriesInfo) {
    return <div className={css.error}>Failed to load series information.</div>;
  }

  const { title, description, startYear, endYear, rating, thumbnail, comics, stories, characters, creators } = seriesInfo;

  return (
    <div className={css.info}>
      <h1>{title}</h1>
      <img className={css.thumbnail} src={`${thumbnail.path.replace(/^http:\/\//i, 'https://')}.${thumbnail.extension}`} alt={title} />
      <p>Description: {description ? description : "No description available."}</p>
      <p>Start Year: {startYear}</p>
      <p>End Year: {endYear}</p>
      <p>Rating: {rating}</p>
      <h2>Comics</h2>
      <ul>
        {comics.items.length > 0 ? (
          comics.items.map((comic, index) => (
            <li key={index}>{comic.name}</li>
          ))
        ) : (
          <li>No comics available.</li>
        )}
      </ul>
      <h2>Stories</h2>
      <ul>
        {stories.items.length > 0 ? (
          stories.items.map((story, index) => (
            <li key={index}>{story.name}</li>
          ))
        ) : (
          <li>No stories available.</li>
        )}
      </ul>
      <h2>Characters</h2>
      <ul>
        {characters.items.length > 0 ? (
          characters.items.map((character, index) => (
            <li key={index}>{character.name}</li>
          ))
        ) : (
          <li>No characters available.</li>
        )}
      </ul>
      <h2>Creators</h2>
      <ul>
        {creators.items.length > 0 ? (
          creators.items.map((creator, index) => (
            <li key={index}>{creator.name} - {creator.role}</li>
          ))
        ) : (
          <li>No creators available.</li>
        )}
      </ul>
    </div>
  );
};

export default SeriesInfoPage;