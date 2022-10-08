import { Outlet } from 'react-router-dom';
import './App.css';

//component imports
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
