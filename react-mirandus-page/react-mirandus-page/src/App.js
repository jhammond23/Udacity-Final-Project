import './mirandushub/mirandushub.css';
import TopNavBar from './components/TopNavBar';
import { BubblesIn, BubblesOut, Humans, humans } from './components/Humans';
import { Dwarves, dwarves } from './components/Dwarves';
import DisplayBubbles from './components/DisplayBubbles';
import DisplayRace from './components/DisplayRace';
import Navbar from './components/ReactNavBar';
import DisplayBuildings from './components/pages/DisplayBuildings';
import DisplayDeeds from './components/pages/DisplayDeeds';
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home';
import DropdownNavbar from './components/DropdownNavbar';
import Dropdown from './components/Dropdown';

function App() {

  return (
    <div>
      <DropdownNavbar />
      <div className='down80'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exemplars' element={<DisplayRace />} />
          <Route path='/deeds' element={<DisplayDeeds />} />
          <Route path='/buildings' element={<DisplayBuildings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
