import "./App.css";

import Home1 from "./Component/Home1";
import DetailsPage from "./Component/DetailsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
  <Route path="/" element={<Home1 />} />
  <Route path="/DetailsPage" element={<DetailsPage />} />
</Routes>
    </>
  );
}

export default App;
