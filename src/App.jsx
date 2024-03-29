import React from "react";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import CharPage from "./pages/CharPage/CharPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" exact element={<WelcomePage/>} />
        <Route path="/characters" element={<CharPage/>} />
      </Routes>
    </>
  );
}

export default App;