import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchStoriesInfo } from "../../redux/actions/storiesInfoActions";
import defaultImage from "../../components/img/default-image.jpg"
import css from "../page_css/infoPage.module.css";

const StoriesInfo = () => {
  const { storyId } = useParams();
  const dispatch = useDispatch();
  const { storiesInfo, loading, error } = useSelector((state) => state.storiesInfo);

  useEffect(() => {
    dispatch(fetchStoriesInfo(storyId));
  }, [storyId, dispatch]);

  if (loading) {
    return <div className={css.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={css.error}>Error: {error.message}</div>;
  }

  if (!storiesInfo) {
    return <div className={css.error}>Data not available</div>;
  }

  const {
    title,
    description,
    type,
    thumbnail,
    comics,
    series,
    characters,
    creators
  } = storiesInfo;

  const imageSrc = thumbnail ? `${thumbnail?.path}.${thumbnail?.extension}` : defaultImage;

  return (
    <div className={css.info}>
      <h1>{title}</h1>
      <img className={css.thumbnail} src={imageSrc} alt={title} />
      <p>Description: {description || "Not available"}</p>
      <p>Type: {type || "Not available"}</p>
      <h2>Comics:</h2>
      {comics.items.length > 0 ? (
        <ul>
          {comics.items.map((comic, index) => (
            <li key={index}>{comic.name || "Not available"}</li>
          ))}
        </ul>
      ) : (
        <p>No comics available</p>
      )}
      <h2>Series:</h2>
      {series.items.length > 0 ? (
        <ul>
          {series.items.map((series, index) => (
            <li key={index}>{series.name || "Not available"}</li>
          ))}
        </ul>
      ) : (
        <p>No series available</p>
      )}
      <h2>Characters:</h2>
      {characters.items.length > 0 ? (
        <ul>
          {characters.items.map((character, index) => (
            <li key={index}>{character.name || "Not available"}</li>
          ))}
        </ul>
      ) : (
        <p>No characters available</p>
      )}
      <h2>Creators:</h2>
      {creators.items.length > 0 ? (
        <ul>
          {creators.items.map((creator, index) => (
            <li key={index}>{creator.name} ({creator.role || "Not available"})</li>
          ))}
        </ul>
      ) : (
        <p>No creators available</p>
      )}
    </div>
  );
};

export default StoriesInfo;