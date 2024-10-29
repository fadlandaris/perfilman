import React, { useState, useEffect } from 'react';
import GlobalApi from '../services/GlobalApi';
import { imdb, americaFlag, releaseDate, noPoster, warn } from '../assets';
import { genres } from '../constants';
import { useNavigate } from 'react-router-dom';
import createSlug from '../utils/createSlug';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Inisialisasi useNavigate

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      const fetchResults = async () => {
        if (query.trim() === '') {
          setResults([]);
          return;
        }

        setLoading(true);
        setError(null);

        try {
          const response = await GlobalApi.searchMovies(query);
          setResults(response.data.results);
        } catch (err) {
          console.error('Error fetching data:', err);
          setError('Failed to fetch results');
        } finally {
          setLoading(false);
        }
      };

      fetchResults();
    }, 300);

    return () => clearTimeout(debounceTimeout);
  }, [query]);

  const handleClick = (movie) => {
    const movieSlug = createSlug(movie.title); // Buat slug dari judul film
    navigate(`/movie/${movie.id}/${movieSlug}`); // Redirect ke halaman MovieDetail
  };

  return (
    <div className='relative z-50 top-0'>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder='Search Movies' 
        className='text-tertiary px-6 w-[500px] py-[12px] bg-third rounded-full text-[12px]' 
      />

      {query && (
        <ul className='absolute top-16 bg-third px-6 py-4 w-full rounded-lg h-[500px] overflow-hidden overflow-y-auto scrollbar-none'>
          {results.length > 0 ? (
            results.map((movie) => (
              <li 
                key={movie.id} 
                className='flex justify-start items-start gap-x-4 mb-4 hover:opacity-50 p-2' 
                onClick={() => handleClick(movie)} // Tambahkan onClick handler
              >
                {movie.poster_path ? ( 
                  <img src={IMAGE_BASE_URL + movie.poster_path} alt={movie.title} className='h-32 ' />
                ) : (
                  <div className='text-[12px] text-primary text-center flex flex-col items-center justify-center h-full'>
                  <img src={noPoster} className='w-20 h-10' />
                  <span>No Poster <br /> Available</span>
                  </div>
                )}
                <div className=''>
                  <h2 className="text-[16px] font-semibold mb-4">{movie.title}</h2>
                  <span className={`flex items-center text-[12px] opacity-70 mb-2`}>
                    <img src={imdb} alt="" className='w-[25px] mr-2 rounded-sm'/> 
                    {movie.vote_average.toFixed(1)} · 
                    <img src={americaFlag} className='w-[20px] h-[13px] mx-2 rounded-sm' /> 
                    {movie.original_language}
                  </span>
                  <span className='text-[12px] opacity-70 flex items-center'>
                    <img src={releaseDate} className='w-[15px] mr-2 rounded-sm' /> 
                    {movie.release_date} 
                  </span>
                  <div className='flex gap-x-4'>
                    {movie.genre_ids.slice(0, 3).map((genreId) => {
                      const genre = genres.find(finding => finding.id === genreId.toString());
                      return genre ? (
                        <div key={genreId} className='text-[10px] mt-4 px-6 py-2 bg-secondary rounded-full'>
                          <p>{genre.name}</p>
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
              </li>
            ))
          ) : (
            <li className="text-center text-primary h-[200px] flex items-center  justify-center gap-x-2">
              <img src={warn} alt="" className=' w-[20px]'/>
              <span>No Result Found</span>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
