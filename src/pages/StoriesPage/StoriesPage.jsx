import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStories } from "../../service";
import StoriesList from "../../components/StoriesList/StoriesList";
import Pagination from "../../components/Pagination/Pagination";
import css from '../../components/componenets_css/Page.module.css';

const StoriesPage = () => {
  const dispatch = useDispatch();
  const stories = useSelector(state => state.stories.stories);
  const [offset, setOffset] = useState(() => {
    const savedOffset = localStorage.getItem("offset");
    return savedOffset ? parseInt(savedOffset, 10) : 0;
  });
  const [page, setPage] = useState(1); 
  const [inputPage, setInputPage] = useState(""); 

  useEffect(() => {
    dispatch(getAllStories(offset));
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
      <h1 className={css.title}>Marvel Stories</h1>
      <StoriesList stories={stories} />
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

export default StoriesPage;