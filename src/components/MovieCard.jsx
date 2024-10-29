import React from 'react'
import styles from '../style'
import { useNavigate } from 'react-router-dom';
import createSlug from '../utils/createSlug'; // Import fungsi createSlug

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"

const MovieCard = ({movieCard}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    const slug = createSlug(movieCard.title);
    navigate(`/movie/${movieCard.id}/${slug}`);
  };

  return (
    <>
        <img onClick={handleClick} src={IMAGE_BASE_URL + movieCard.poster_path} alt="" className='w-[110px] md:w-[200px] rounded-lg hover:scale-110 hover:border-[3px] border-tertiary transition-all duration-300 cursor-pointer ease-in-out shadow-md' />
    </>
  )
}

export default MovieCard