import React from 'react'
import { genres } from '../constants'
import styles from '../style'
import GenresMovieList from './GenresMovieList'

const Genres = () => {
  return (
    <div className='mt-10'>
      {genres.map((genre, index) => index <= 5 && (
        <div key={index}>
          <div className='flex items-center gap-x-12 mt-10 mb-2 cursor-pointer'>
            <a href='' className='capitalize text-[16px] font-semibold text-tertiary hover:opacity-50 hover:text-tertiary duration-300 transition-all'>{genre.name} Movies</a>
            <div className='w-[25px] h-[10px] bg-primary rounded-full'/>
          </div>
          <GenresMovieList genreId={genre.id} slice={index}/>
        </div>
      ))}
    </div>
  )
}

export default Genres