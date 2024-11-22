import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './style';
import { Navbar, Slider, Studio, Genres, SearchBar, MovieDetail, Profile } from './components';

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
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
