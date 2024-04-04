import React from "react";
import { useSelector } from "react-redux";
import { getAllComics } from "../../service";
import ComicList from "../../components/ComicList/ComicList";
import PageWithSearch from "../../components/PaginatedSearchPage/PaginatedSearchPage";
import ComicSearchForm from "../../components/searchInput/ComicSearchForm";

const ComicPage = () => {
    const comics = useSelector(state => state.comics.comics);

    return (
        <PageWithSearch
            title="Marvel Comics"
            searchFormComponent={ComicSearchForm}
            getData={getAllComics}
            data={comics}
            localStorageKey="comicOffset"
            dataComponent={({data}) => <ComicList comics={data} />}
        />
    );
};

export default ComicPage;