import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterInfo } from "../../service";
import css from "./CharInfo.module.css"; // Предполагается, что у вас есть модуль CSS для этого компонента

const CharInfo = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const characterData = await getCharacterInfo(characterId);
        setCharacter(characterData);
      } catch (error) {
        console.error('Error fetching character info:', error);
      }
    };

    fetchCharacter();
  }, [characterId]);

  if (!character) {
    return <div className={css.loading}>Loading...</div>;
  }

  const { name, description, thumbnail, comics, series, stories } = character;

  return (
    <div className={css.char_info}>
      <h1>{name}</h1>
      <img className={css.thumbnail} src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
      {description ? <p>{description}</p> : <p>No description available.</p>}
      <h2>Comics</h2>
      <ul className={css.comics_list}>
        {comics.items.length > 0 ? (
          comics.items.map((comic, index) => (
            <li key={index} className={css.comic}>{comic.name}</li>
          ))
        ) : (
          <li>No comics available.</li>
        )}
      </ul>
      <h2>Series</h2>
      <ul className={css.series_list}>
        {series.items.length > 0 ? (
          series.items.map((serie, index) => (
            <li key={index} className={css.serie}>{serie.name}</li>
          ))
        ) : (
          <li>No series available.</li>
        )}
      </ul>
      <h2>Stories</h2>
      <ul className={css.stories_list}>
        {stories.items.length > 0 ? (
          stories.items.map((story, index) => (
            <li key={index} className={css.story}>{story.name}</li>
          ))
        ) : (
          <li>No stories available.</li>
        )}
      </ul>
    </div>
  );
};

export default CharInfo;