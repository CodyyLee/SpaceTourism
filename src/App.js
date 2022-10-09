import { Outlet } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

//component imports
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';

function App() {

  const [menu, setMenu] = useState(false);

  return (
    <div className="App">
      <Navbar menu={menu} setMenu={setMenu} />
      <Menu setMenu={setMenu} menu={menu} />
      <Outlet />
    </div>
  );
}

export default App;
