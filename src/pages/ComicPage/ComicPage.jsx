import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllComics } from "../../service";
import ComicList from "../../components/ComicList/ComicList";
import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";
import ComicSearchForm from "../../components/searchInput/ComicSearchForm";
import css from '../page_css/Page.module.css';

const ComicPage = () => {
    const dispatch = useDispatch();
    const comics = useSelector(state => state.comics.comics);
    const [offset, setOffset] = useState(() => {
        const savedOffset = localStorage.getItem("comicOffset");
        return savedOffset ? parseInt(savedOffset, 10) : 0;
    });
    const [page, setPage] = useState(1); 
    const [inputPage, setInputPage] = useState(""); 
    const [loading, setLoading] = useState(true);
    const [searchResults, setSearchResults] = useState(null); 
    const [showPagination, setShowPagination] = useState(false);
  
    useEffect(() => {
        setLoading(true); 
        dispatch(getAllComics(offset))
        .then(() => setLoading(false)) 
        .catch(() => setLoading(false)); 
        window.scrollTo({ top: 0, behavior: "smooth" }); 
    }, [dispatch, offset]);

    useEffect(() => {
        localStorage.setItem("comicOffset", offset);
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
          <h1 className={css.title}>Marvel Comics</h1>
          <ComicSearchForm onSearchResults={handleSearchResults} onClearResults={handleClearResults} /> 
          {loading ? (
              <Loader /> 
          ) : (
                <>
                    {searchResults !== null && searchResults.length === 0 ? (
                        <div className={css.no_found}>No comics found.</div>
                    ) : (
                        <>
                            <ComicList comics={searchResults !== null ? searchResults : comics} /> 
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

export default ComicPage;