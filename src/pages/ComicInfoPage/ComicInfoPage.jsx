import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchComicInfo } from "../../redux/actions/comicInfoActions";
import css from "./ComicInfoPage.module.css";

const ComicInfo = () => {
  const { comicId } = useParams();
  const dispatch = useDispatch();
  const { comicInfo, loading, error } = useSelector((state) => state.comicInfo);

  useEffect(() => {
    dispatch(fetchComicInfo(comicId));
  }, [comicId, dispatch]);

  if (loading) {
    return <div className={css.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={css.error}>Error: {error.message}</div>;
  }

  if (!comicInfo) {
    return <div className={css.error}>Data not available</div>;
  }

  const {
    title,
    issueNumber,
    description,
    pageCount,
    thumbnail,
    collections,
    collectedIssues,
    prices,
    creators,
    characters,
    stories
  } = comicInfo;

  return (
    <div className={css.info}>
      <h1>{title}</h1>
      {thumbnail && (
        <img className={css.thumbnail} src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
      )}
      <p>Issue Number: {issueNumber}</p>
      <p>Description: {description || "Not available"}</p>
      <p>Page Count: {pageCount || "Not available"}</p>
      <h2>Collections:</h2>
      {collections.length > 0 ? (
        <ul>
          {collections.map((collection, index) => (
            <li key={index}>{collection.name || "Not available"}</li>
          ))}
        </ul>
      ) : (
        <p>No collections available</p>
      )}
      <h2>Collected Issues:</h2>
      {collectedIssues.length > 0 ? (
        <ul>
          {collectedIssues.map((issue, index) => (
            <li key={index}>{issue.name || "Not available"}</li>
          ))}
        </ul>
      ) : (
        <p>No collected issues available</p>
      )}
      <h2>Prices:</h2>
      {prices.length > 0 ? (
        <ul>
          {prices.map((price, index) => (
            <li key={index}>{price.type}: {price.price || "Not available"}</li>
          ))}
        </ul>
      ) : (
        <p>No prices available</p>
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
      <h2>Stories:</h2>
      {stories.items.length > 0 ? (
        <ul>
          {stories.items.map((story, index) => (
            <li key={index}>{story.name || "Not available"}</li>
          ))}
        </ul>
      ) : (
        <p>No stories available</p>
      )}
    </div>
  );
};

export default ComicInfo;