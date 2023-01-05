import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home/Home';
import City from './pages/City/City';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:city" element={<City />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
