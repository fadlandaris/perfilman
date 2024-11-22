import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GlobalApi from '../services/GlobalApi';
import styles from '../style';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieDetail = () => {
  const { id, slug } = useParams(); 
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await GlobalApi.getMovieById(id);
        setMovieDetail(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (!movieDetail) return <div>Loading...</div>;
  console.log(movieDetail);

  // const roundedPercentage = Math.round((movieDetail.vote_average / 10) * 100);
  const roundedPercentage = 70

  return (
    <div className='relative'>
       <section className='w-full'>
        <img src={IMAGE_BASE_URL + movieDetail.backdrop_path} alt={movieDetail.title} className='w-full h-[650px] object-top object-cover'/>
        <div className="absolute top-0 left-0 w-full h-full bg-secondary opacity-[0.85] "></div>
    
        <div className={`absolute top-0 left-0 right-0 flex h-full ${styles.boxWidth} mx-auto p-6`}>
          <img src={IMAGE_BASE_URL + movieDetail.poster_path} alt={movieDetail.original_title} className='rounded-lg mr-6 object-cover  '/>

          <div className='p-2 w-full'>

            <div>
              <h1 className="text-tertiary text-[30px] font-semibold">{movieDetail.original_title} <span className='font-light opacity-70'>({movieDetail.release_date.substring(0, 4)})</span></h1>
              <div>
                <span>{movieDetail.release_date} · </span>
                {movieDetail.genres.map((genre, index) => (
                  <span key={index}>
                    {genre.name}{index < movieDetail.genres.length - 1 && ', '}
                  </span>
                ))}
                <span> · {Math.floor(movieDetail.runtime / 60)}h {movieDetail.runtime % 60}m</span>
                <p className='mt-10'>{movieDetail.overview}</p>
              </div>
            </div>

            <div className='mt-12'>
              <div className='flex items-center'>
                <div className={`w-[70px] h-[70px] rounded-full flex items-center text-tertiary bg-secondary ${roundedPercentage < 50 ? ' text-red-500 border-4 border-red-500' : roundedPercentage < 70 ? 'text-yellow-500 border-4 border-yellow-500' : 'text-green-500 border-4 border-green-500'}`}>
                  <span className='mx-auto text-[17px] font-bold'>{roundedPercentage}%</span>
                </div>
                <span className='font-semibold ml-2'>User <br /> Score</span>
              </div>
            
            </div>
            
          </div>

        </div>
  </section>
</div>

  );
};

export default MovieDetail;
