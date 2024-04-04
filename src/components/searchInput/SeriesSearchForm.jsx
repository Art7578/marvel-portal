import React from "react";
import {getSeriesByTitle} from "../../service";
import SearchForm from "./SearchForm";

const SeriesSearchForm = ({onSearchResults, onClearResults}) => {
    return (
        <SearchForm
            onSearch={onSearchResults}
            onClear={onClearResults}
            getData={getSeriesByTitle}
        />
    );
};

export default SeriesSearchForm;