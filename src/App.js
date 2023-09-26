import "./App.css";
import Cleaning from "./Component/Cleaning";

import Home from "./Component/Home";
// import DetailsPage from "./Component/DetailsPage";
import { Routes, Route } from "react-router-dom";
import Painting from "./Component/painting";
import Header from "./Component/Header";
import MiniServices from "./Component/MiniServices";
import CommercialServices from "./Component/CommercialServices";
import WellcomePage from "./Component/WellcomePage";
// import Home from "./Component/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Cleaning" element={<Cleaning />} />
        <Route path="/painting" element={<Painting />} />
        <Route path="/MiniServices" element={<MiniServices />} />
        <Route path="/CommercialServices" element={<CommercialServices />} />
        <Route path="/WellcomePage" element={<WellcomePage />} />        
      </Routes>
    </>
  );
}

export default App;
