import React from "react";
import css from './Pagination.module.css';

const Pagination = ({ offset, setOffset, page, setPage, inputPage, setInputPage, handlePrevPage, handleLoadMore, handleGoToPage, handleKeyDown }) => {
  return (
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
            onChange={(e) => setInputPage(e.target.value)}
            onKeyDown={handleKeyDown} 
            placeholder="Enter page number"
            className={css.page_input}
        />
        <button className={css.go_button} onClick={handleGoToPage}>Go</button>
      </div>
    </div>
  );
};

export default Pagination;