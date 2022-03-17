import NavBar from './NavBar';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import SearchPage from './pages/SearchStations';
import RadioPlayer from './controls/RadioPlayer';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from "react-router-dom";
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <BrowserRouter>
        <NavBar />

        <Container text style={{ marginTop: '5em', marginBottom: '7em' }}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/browse' element={<SearchPage />} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </Container>

        <RadioPlayer />
    </BrowserRouter>
  );
}

export default App;
