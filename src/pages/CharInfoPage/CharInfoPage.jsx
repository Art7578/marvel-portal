import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterInfo } from "../../service";
import css from "../page_css/infoPage.module.css"; 
import Loader from "../../components/Loader/Loader"; 

const CharInfo = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    setLoading(true); 
    const fetchCharacter = async () => {
      try {
        const characterData = await getCharacterInfo(characterId);
        setCharacter(characterData);
      } catch (error) {
        console.error('Error fetching character info:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchCharacter();
  }, [characterId]);

  if (loading) {
    return <Loader />; 
  }

  if (!character) {
    return <div className={css.loading}>Loading...</div>;
  }

  const { name, description, thumbnail, comics, series, stories } = character;

  return (
    <div className={css.info}>
      <h1>{name}</h1>
      <img className={css.thumbnail} src={`${thumbnail.path.replace(/^http:\/\//i, 'https://')}.${thumbnail.extension}`} alt={name} />
      {description ? <p>{description}</p> : <p>No description available.</p>}
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
      <h2>Series</h2>
      <ul>
        {series.items.length > 0 ? (
          series.items.map((serie, index) => (
            <li key={index}>{serie.name}</li>
          ))
        ) : (
          <li>No series available.</li>
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
    </div>
  );
};

export default CharInfo;