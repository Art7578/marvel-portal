import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters } from "../../service";
import CharList from "../../components/CharList/CharList";
import css from './CharPage.module.css';

const CharPage = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.characters.characters);
  const [offset, setOffset] = useState(() => {
    const savedOffset = localStorage.getItem("offset");
    return savedOffset ? parseInt(savedOffset, 10) : 0;
  });
  const [page, setPage] = useState(1); 
  const [inputPage, setInputPage] = useState(""); 

  useEffect(() => {
    dispatch(getAllCharacters(offset));
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  }, [dispatch, offset]);

  useEffect(() => {
    localStorage.setItem("offset", offset);
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
    <div className={css.char_page}>
      <h1 className={css.title}>Marvel Characters</h1>
      <CharList characters={characters} />
      <div className={css.pagination_container}>
        <div className={css.buttons}>
          <button className={css.pagination_button} onClick={handlePrevPage} disabled={offset === 0}>
            Prev Page
          </button>
          <span className={css.page_count}>Page {page}</span>
          <button className={css.pagination_button} onClick={handleLoadMore}>Next Page</button>
        </div>
        <div className={css.input}>
          <input
              type="text"
              value={inputPage}
              onChange={handleChangePage}
              onKeyDown={handleKeyDown} 
              placeholder="Enter page number"
              className={css.page_input}
          />
          <button className={css.go_button} onClick={handleGoToPage}>Go</button>
        </div>
      </div>
    </div>
  );
};

export default CharPage;