import React, { useEffect, useState, useRef } from 'react'
import { genres } from '../constants'
import GlobalApi from '../services/GlobalApi'
import styles from '../style'
import { FaAngleLeft, FaAngleRight } from '../assets'
import MovieCard from './MovieCard'
import HrMovieCard from './HrMovieCard'


const GenresMovieList = ({genreId, slice}) => {
  const [movieGenreList, setMovieGenreList]=useState([])
  const elementRef = useRef()

  const sliderRight = (element) => {
    element.scrollLeft += 1000
  }
  const sliderLeft = (element) => {
    element.scrollLeft -= 1000
  }

  useEffect(() => {
    getMovieByGenreId();
  },[genreId])

  const getMovieByGenreId = async () => {
    try {
      const resp = await GlobalApi.getMovieByGenreId(genreId);
      const movieGenre = resp.data.results
      // console.log(movieGenre)
      setMovieGenreList(movieGenre)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='relative group'>
       <div className="absolute top-0 bottom-0 left-0 flex items-center justify-center text-[20px] z-[10] text-tertiary h-full bg-secondary opacity-0 group-hover:opacity-30 hover:!opacity-70 hover:!bg-secondary hover:!text-white hover:!text-[30px] transition-all duration-300 cursor-pointer rounded-tl-lg rounded-bl-lg px-2" onClick={() => sliderLeft(elementRef.current)}>
        <FaAngleLeft />
        </div>
        <div className="absolute top-0 bottom-0 right-0 flex items-center justify-center text-[20px] z-[10] text-tertiary h-full bg-secondary opacity-0 group-hover:opacity-30 hover:!opacity-70 hover:!bg-secondary hover:!text-white hover:!text-[30px] transition-all duration-300 cursor-pointer rounded-tr-lg rounded-br-lg px-2" onClick={() => sliderRight(elementRef.current)}>
        <FaAngleRight />
        </div>
   
      

      <div className='flex overflow-x-auto w-full  scroll-smooth scrollbar-none rounded-lg gap-x-8 py-5 px-3' ref={elementRef}>
      {movieGenreList.map((stat, index) => (
      <>
        {slice % 2 === 0 ? <HrMovieCard movieCard = {stat} /> : <MovieCard movieCard = {stat} /> }
      </>
      ))}
      </div>
    </div>
  )
}

export default GenresMovieList