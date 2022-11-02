import { Overview } from "./design-system/Components/Overview/Overview";
import {
  faUserGroup,
  faMicrophone,
  faMap,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <Overview
        icon={faUserGroup}
        title="650 Participant"
        Children=" Quisque libero sapien. Integer tellus nisal, efficitur sed dolor at,
      vehicula finibus massa. sed tincidunt metus sed eleifend suscipit"
      />
      <Overview
        icon={faMap}
        title="24 Program"
        Children=" Quisque libero sapien. Integer tellus nisal, efficitur sed dolor at,
      vehicula finibus massa. sed tincidunt metus sed eleifend suscipit"
      />
      <Overview
        icon={faMicrophone}
        title="11 Speakers"
        Children=" Quisque libero sapien. Integer tellus nisal, efficitur sed dolor at,
      vehicula finibus massa. sed tincidunt metus sed eleifend suscipit"
      />
    </div>
  );
}
export default App;
