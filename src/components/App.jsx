import NavBar from './NavBar';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import SearchPage from './pages/SearchStations';
import RadioPlayer from './controls/RadioPlayer';

function App() {
  return (
    <BrowserRouter>
      <div className='root'>
        <NavBar />
        
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/browse' element={<SearchPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>

        <RadioPlayer />
      </div>
    </BrowserRouter>
  );
}

export default App;
