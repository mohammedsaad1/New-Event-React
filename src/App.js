import { Overview } from "./design-system/Components/Overview/Overview";
import DataView from "./design-system/Components/Overview/Data";
function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        {DataView.map((item) => {
          return (
            <Overview
              icon={item.icon}
              title={item.title}
              Children={item.description}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
