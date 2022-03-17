import NavBar from './NavBar';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import SearchPage from './pages/SearchStations';
import RadioPlayer from './controls/RadioPlayer';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/browse' element={<SearchPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>

      <RadioPlayer />
    </BrowserRouter>
  );
}

export default App;
