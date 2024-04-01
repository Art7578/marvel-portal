import React from "react";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import CharPage from "./pages/CharPage/CharPage";
import Header from "./components/Header/Header";
import CharInfo from "./pages/CharInfoPage/CharInfoPage";
import ComicPage from "./pages/ComicPage/ComicPage";
import ComicInfo from "./pages/ComicInfoPage/ComicInfoPage";
import SeriesPage from "./pages/SeriesPage/SeriesPage";
import SeriesInfoPage from "./pages/SeriesInfoPage/SeriesInfoPage";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" exact element={<WelcomePage/>} />
        <Route path="/characters" element={<CharPage/>} />
        <Route path="/characters/:characterId" element={<CharInfo/>} />
        <Route path="/comics" element={<ComicPage/>} />
        <Route path="/comics/:comicId" element={<ComicInfo/>} />
        <Route path="/series" element={<SeriesPage/>} />
        <Route path="/series/:seriesId" element={<SeriesInfoPage/>} />
      </Routes>
    </>
  );
}

export default App;