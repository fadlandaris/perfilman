import React from 'react';
import { useNavigate } from 'react-router-dom';
import createSlug from '../utils/createSlug'; // Import fungsi createSlug
import styles from '../style';
import { imdb, americaFlag, releaseDate } from '../assets';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const HrMovieCard = ({ movieCard }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const slug = createSlug(movieCard.title);
    navigate(`/movie/${movieCard.id}/${slug}`);
  };

  return (
    <section className='group ' key={movieCard.id} onClick={handleClick}>
      <div className='rounded-lg bg-third hover:opacity-50 border-tertiary transition-all duration-30 cursor-pointer ease-in-out group'>
        <img src={IMAGE_BASE_URL + movieCard.backdrop_path} alt="" className='w-full rounded-tl-lg rounded-tr-lg transition-all duration-100 cursor-pointer ease-in-out shadow-md relative object-center' />
        <div className='py-6 px-6 text-tertiary h-[200px]'>
          <h2 className='md:w-[260px] font-semibold text-[20px] mb-4'>{movieCard.title}</h2>
          <span className={`flex items-center text-[12px] opacity-70 mb-2`}><img src={imdb} alt="" className='w-[25px] mr-2 rounded-sm'/> {movieCard.vote_average.toFixed(1)} · <img src={americaFlag} className='w-[20px] h-[13px] mx-2 rounded-sm' /> {movieCard.original_language}glish </span>
          <span className='text-[12px] opacity-70 flex items-center'><img src={releaseDate} className='w-[15px] mr-2 rounded-sm' /> {movieCard.release_date} </span>
        </div>
      </div>
    </section>
  );
};

export default HrMovieCard;
