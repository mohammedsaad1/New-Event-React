import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dataprogram from "./design-system/Components/Ourprograms/Dataprograms";
import Ourprograms from "./design-system/Components/Ourprograms/Ourprograms";
import Datasponsers from "./design-system/Components/OurSponsers/Datasponser";

import { Oursponsers } from "./design-system/Components/OurSponsers/Oursponsers";

import "./design-system/main.css";
import Home from "./Pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
