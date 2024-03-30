import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterInfo } from "../../service";

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
    return <div>Loading...</div>;
  }

  const { name, description, thumbnail, comics, series, stories } = character;

  return (
    <div>
      <h1>{name}</h1>
      <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
      <p>{description}</p>
      <h2>Comics</h2>
      <ul>
        {comics.items.map((comic, index) => (
          <li key={index}>{comic.name}</li>
        ))}
      </ul>
      <h2>Series</h2>
      <ul>
        {series.items.map((serie, index) => (
          <li key={index}>{serie.name}</li>
        ))}
      </ul>
      <h2>Stories</h2>
      <ul>
        {stories.items.map((story, index) => (
          <li key={index}>{story.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharInfo;