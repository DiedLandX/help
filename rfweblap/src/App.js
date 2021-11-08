import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pizzak from './pages/Pizzak';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>  
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pizza" element={<Pizzak/>}/>
          <Route path="/bejelentkezes" element={<Contact/>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
