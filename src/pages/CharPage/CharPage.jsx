import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters } from "../../service";
import CharList from "../../components/CharList/CharList";

const CharPage = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.characters.characters);
  const [offset, setOffset] = useState(() => {
    const savedOffset = localStorage.getItem("offset");
    return savedOffset ? parseInt(savedOffset, 10) : 0;
  });
  const [page, setPage] = useState(1); // Номер текущей страницы
  const [inputPage, setInputPage] = useState(""); // Состояние для поля ввода

  useEffect(() => {
    dispatch(getAllCharacters(offset));
    window.scrollTo({ top: 0, behavior: "smooth" }); // Прокручиваем страницу вверх после обновления списка
  }, [dispatch, offset]);

  useEffect(() => {
    localStorage.setItem("offset", offset);
    // Вычисляем номер страницы на основе offset и количества элементов на странице
    setPage(Math.floor(offset / 20) + 1);
  }, [offset]);

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + 20);
  };

  const handlePrevPage = () => {
    setOffset((prevOffset) => Math.max(prevOffset - 20, 0));
  };

  const handleChangePage = (e) => {
    setInputPage(e.target.value);
  };

  const handleGoToPage = () => {
    const pageNumber = parseInt(inputPage, 10);
    if (!isNaN(pageNumber) && pageNumber > 0) {
      setOffset((pageNumber - 1) * 20);
      setInputPage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleGoToPage();
    }
  };

  return (
    <div className="char-page">
      <h1>Marvel Characters</h1>
      <CharList characters={characters} />
      <div>
        <button onClick={handlePrevPage} disabled={offset === 0}>
          Prev Page
        </button>
        <span>Page {page}</span>
        <button onClick={handleLoadMore}>Next Page</button>
        <input
          type="text"
          value={inputPage}
          onChange={handleChangePage}
          onKeyDown={handleKeyDown} // Заменяем onKeyPress на onKeyDown
          placeholder="Enter page number"
        />
        <button onClick={handleGoToPage}>Go</button>
      </div>
    </div>
  );
};

export default CharPage;