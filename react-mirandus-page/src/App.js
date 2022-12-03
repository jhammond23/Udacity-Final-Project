import './mirandushub/mirandushub.css';
import TopNavBar from './components/TopNavBar';
import { BubblesIn, BubblesOut, Humans, humans } from './components/Humans';
import { Dwarves, dwarves } from './components/Dwarves';
import DisplayBubbles from './components/DisplayBubbles';
import DisplayRace from './components/DisplayRace';

function App() {
  return (
    <div>
      <div>
        <DisplayRace />
      </div>
    </div>
  );
}

export default App;
