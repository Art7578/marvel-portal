import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters } from "../../service";
import CharList from "../../components/CharList/CharList";
import Pagination from "../../components/Pagination/Pagination";
import css from '../../components/componenets_css/Page.module.css';

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
      <Pagination
        offset={offset}
        setOffset={setOffset}
        page={page}
        setPage={setPage}
        inputPage={inputPage}
        setInputPage={setInputPage}
        handlePrevPage={handlePrevPage}
        handleLoadMore={handleLoadMore}
        handleGoToPage={handleGoToPage}
        handleKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default CharPage;