import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSeries } from "../../service";
import SeriesList from "../../components/SeriesList/SeriesList";
import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";
import SeriesSearchForm from "../../components/searchInput/SeriesSearchForm";
import css from '../page_css/Page.module.css';

const SeriesPage = () => {
  const dispatch = useDispatch();
  const series = useSelector(state => state.series.series);
  const [offset, setOffset] = useState(() => {
    const savedOffset = localStorage.getItem("seriesOffset");
    return savedOffset ? parseInt(savedOffset, 10) : 0;
  });
  const [page, setPage] = useState(1); 
  const [inputPage, setInputPage] = useState(""); 
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState(null); 
  const [showPagination, setShowPagination] = useState(false);

  useEffect(() => {
    setLoading(true); 
    dispatch(getAllSeries(offset))
    .then(() => setLoading(false))
    .catch(() => setLoading(false)); 
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  }, [dispatch, offset]);

  useEffect(() => {
    localStorage.setItem("seriesOffset", offset);
    setPage(Math.floor(offset / 20) + 1);
    setShowPagination(searchResults === null);
  }, [offset, searchResults]);

  const handleLoadMore = () => {
    setLoading(true);
    setOffset((prevOffset) => prevOffset + 20);
  };

  const handlePrevPage = () => {
    setLoading(true);
    setOffset((prevOffset) => Math.max(prevOffset - 20, 0));
  };

  const handleGoToPage = () => {
    const pageNumber = parseInt(inputPage, 10);
    if (!isNaN(pageNumber) && pageNumber > 0) {
      setLoading(true);
      setOffset((pageNumber - 1) * 20);
      setInputPage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleGoToPage();
    }
  };

  const handleSearchResults = (results) => {
    setSearchResults(results);
    setShowPagination(false); 
};

const handleClearResults = () => {
    setSearchResults(null); 
    setShowPagination(true); 
};

  return (
    <div className={css.page}>
      <h1 className={css.title}>Marvel Series</h1>
      <SeriesSearchForm onSearchResults={handleSearchResults} onClearResults={handleClearResults}/>
      {loading ? (
        <Loader /> 
      ) : (
        <>
          {searchResults !== null && searchResults.length === 0 ? (
            <div className={css.no_found}>No series found</div>
          ) : (
            <>
              <SeriesList series={searchResults !== null ? searchResults : series} />
              {showPagination && <Pagination
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
              />}
            </>
          )} 
        </>
      )}
    </div>
  );
};

export default SeriesPage;