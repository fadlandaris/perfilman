import React, { useEffect, useRef, useState } from 'react'
import styles from '../style'
import GlobalApi from '../services/GlobalApi'
import { FaAngleLeft, FaAngleRight } from '../assets'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
const screenWidth = window.innerWidth
const screenResult = screenWidth - 46.5 //550 px

const Slider = () => {
  const [movieList, setMovieList]=useState([])
  const elementRef = useRef()

  useEffect(()=> {
    getTrendingMovies()
  },[])

  const getTrendingMovies = async () => {
    try {
      const resp = await GlobalApi.getTrendingVideos();
      const movieTrending = resp.data.results
      // console.log(movieTrending)
      setMovieList(movieTrending)
    } catch (error) {
      console.error(error);
    }
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenResult 
  }
  const sliderLeft = (element) => {
    element.scrollLeft -= screenResult
  }

  return (
    <div className='relative z-0 '>
      <div className='hidden md:block text-white text-[30px] absolute top-1/2 -translate-y-1/2 left-10 cursor-pointer hover:text-white duration-500 hover:bg-primary bg-gray-300 p-2 rounded-full opacity-50 hover:opacity-100' onClick={() => sliderLeft(elementRef.current)} >
        <FaAngleLeft />
      </div>
      <div className='hidden md:block text-white text-[30px] absolute top-1/2 -translate-y-1/2 right-10 cursor-pointer hover:text-white duration-500 hover:bg-primary bg-gray-300 opacity-50 hover:opacity-100 p-2 rounded-full' onClick={() => sliderRight(elementRef.current)}>
        <FaAngleRight  />
      </div>
    
    <div className='flex overflow-x-auto w-full scroll-smooth scrollbar-none rounded-lg' ref={elementRef}>
      {movieList.map((item) => (
        <img key={item.id} src={IMAGE_BASE_URL + item.backdrop_path} className='min-w-full md:h-[450px] object-cover object-top rounded-lg mr-5 hover:border-[4px] border-tertiary transition-all duration-100 cursor-pointer ease-in-out' />
        // <span>text</span>
      ))}
    </div>
  </div>
   
  )
}

export default Slider