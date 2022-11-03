import Dataprogram from "./design-system/Components/Ourprograms/Dataprograms";
import Ourprograms from "./design-system/Components/Ourprograms/Ourprograms";

import "./design-system/main.css";
function App() {
  return (
    <div className="App">
      {Dataprogram.map((item) => {
        return (
          <Ourprograms
            key={item.id}
            img={item.img}
            time={item.time}
            title={item.title}
            description={item.description}
            name={item.name}
            alt={item.alt}
            roomnumber={item.roomnumber}
          />
        );
      })}
    </div>
  );
}
export default App;
