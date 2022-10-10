import { Outlet } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

//component imports
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';

//context import
import { AppContext } from './context';

function App() {

  const [store, setStore] = useState({
    menu: false,
    destination: 0,
    crew: 0,
    technology: 0,
    close: () => {
      setStore({...store, menu: false})
    }
  });

  return (
    <AppContext.Provider value={{store, setStore}}>
      <div className="App">
        <Navbar />
        <Menu />
        <Outlet />
      </div>
    </AppContext.Provider>
  );
}

export default App;
