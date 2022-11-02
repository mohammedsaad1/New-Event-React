import { CreativeSpeaker } from "./design-system/Components/CreativeSpeaker/CreativeSpeaker";
import data from "./design-system/Components/CreativeSpeaker/Data";
function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        {data.map((card) => {
          return (
            <CreativeSpeaker
              name={card.name}
              alt={card.alt}
              key={card.id}
              img={card.img}
              jop={card.jop}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
