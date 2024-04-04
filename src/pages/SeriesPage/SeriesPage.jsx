import React from "react";
import { useSelector } from "react-redux";
import { getAllSeries } from "../../service";
import SeriesList from "../../components/SeriesList/SeriesList";
import PageWithSearch from "../../components/PaginatedSearchPage/PaginatedSearchPage";
import SeriesSearchForm from "../../components/searchInput/SeriesSearchForm";

const SeriesPage = () => {
  const series = useSelector(state => state.series.series);

  return (
    <PageWithSearch
      title="Marvel Series"
      searchFormComponent={SeriesSearchForm}
      getData={getAllSeries}
      data={series}
      localStorageKey="seriesOffset"
      dataComponent={({data}) => <SeriesList series={data}/>}
    />
  );
};

export default SeriesPage;