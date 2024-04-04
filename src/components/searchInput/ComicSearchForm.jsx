import React from "react";
import { getComicByTitle } from "../../service";
import SearchForm from "./SearchForm";

const ComicSearchForm = ({onSearchResults, onClearResults}) => {
    return (
        <SearchForm
            onSearch={onSearchResults}
            onClear={onClearResults}
            getData={getComicByTitle}
        />
    );
};

export default ComicSearchForm;