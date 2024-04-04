import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import Pagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";
import css from "../../pages/page_css/Page.module.css"

const PageWithSearch =({title, searchFormComponent, getData, data, localStorageKey, dataComponent}) => {
    const dispatch = useDispatch();
    const [offset, setOffset] = useState(() => {
        const savedOffset = localStorage.getItem(localStorageKey);
        return savedOffset ? parseInt(savedOffset, 10) : 0;
    });
    const [page, setPage] = useState(1);
    const [inputPage, setInputPage] = useState("");
    const [loading, setLoading] = useState(true);
    const [searchResults, setSearchResults] = useState(null);
    const [showPagination, setShowPagination] = useState(false);

    useEffect(() => {
        setLoading(true);
        dispatch(getData(offset))
            .then(() => setLoading(false))
            .catch(() => setLoading(false));
    }, [dispatch, getData, offset]);

    useEffect(() => {
        localStorage.setItem(localStorageKey, offset);
        setPage(Math.floor(offset / 20) + 1);
        setShowPagination(searchResults === null);
    }, [offset, searchResults, localStorageKey]);

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
            <h1 className={css.title}>{title}</h1>
            {searchFormComponent({onSearchResults: handleSearchResults, onClearResults: handleClearResults})}
            {loading ? (
                <Loader/>
            ) : (
                <>
                    {searchResults !== null && searchResults.lenght === 0 ? (
                        <div className={css.no_found}>No characters found</div>
                    ) : (
                        <>
                            {dataComponent({data: searchResults !== null ? searchResults : data})}
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

export default PageWithSearch;