import Dataprogram from "./design-system/Components/Ourprograms/Dataprograms";
import Ourprograms from "./design-system/Components/Ourprograms/Ourprograms";
import Datasponsers from "./design-system/Components/OurSponsers/Datasponser";

import { Oursponsers } from "./design-system/Components/OurSponsers/Oursponsers";

import "./design-system/main.css";
function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", gap: "1rem" }}>
        {Datasponsers.map((item) => {
          return <Oursponsers key={item.id} src={item.img} alt={item.alt} />;
        })}
      </div>
    </div>
  );
}
export default App;
