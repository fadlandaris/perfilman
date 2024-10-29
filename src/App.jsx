import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './style';
import { Navbar, Slider, Studio, Genres, SearchBar, MovieDetail } from './components';

function App() {
  return (
    <Router>
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route path="/" element={
          <div className={`${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Slider />
              <Studio />
              <Genres />
            </div>
          </div>
        } />
        
        <Route path="/movie/:id/:slug" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
