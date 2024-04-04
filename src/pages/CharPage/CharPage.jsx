import React from "react";
import { useSelector } from "react-redux";
import { getAllCharacters } from "../../service";
import CharList from "../../components/CharList/CharList";
import CharSearchForm from "../../components/searchInput/CharSearchForm";
import PageWithSearch from "../../components/PaginatedSearchPage/PaginatedSearchPage";

const CharPage = () => {
  const characters = useSelector(state => state.characters.characters);

  return (
    <PageWithSearch
      title="Marvel Characters"
      searchFormComponent={CharSearchForm}
      getData={getAllCharacters}
      data={characters}
      localStorageKey="offset"
      dataComponent={({data}) => <CharList characters={data}/>}
    />  
  );
};

export default CharPage;