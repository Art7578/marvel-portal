import React from "react";
import { getCharacterByName } from "../../service";
import SearchForm from "./SearchForm";

const CharSearchRorm = ({onSearchResults, onClearResults}) => {
    return (
        <SearchForm
            onSearch={onSearchResults}
            onClear={onClearResults}
            getData={getCharacterByName}
        />
    );
};

export default CharSearchRorm;