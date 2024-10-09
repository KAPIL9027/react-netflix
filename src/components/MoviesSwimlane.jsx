import React, { useEffect, useState } from 'react'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import { useSelector } from 'react-redux';
import Movie from './Movie';

const MoviesSwimlane = ({title,slug}) => {
    const[page,setPage] = useState(0);
    const reducerName = slug === 'now_playing' ? 'nowPlayingMovies' : (slug === 'trending') ? 'trendingMovies' : (slug === 'popular') ? 'popularMovies' : 'upcomingMovies';
    const movies = useSelector((state)=> state?.movies[reducerName]?.payload)?.results;
    const maxPages = Math.ceil(movies?.length / 5);
    useNowPlayingMovies(slug)
    if(!movies) return;
    const handleLeftClick = ()=>{
      if(page > 0){
        setPage(page - 1);
      }
    }

    const handleRightClick = ()=>{
      if(page < maxPages - 1){
        setPage(page + 1);
      }
    }
  return (
    <div className="flex flex-col gap-4 text-white p-2 w-[100vw]">
      <h2 className='font-medium text-[2vw]  px-24 py-2'>{title}</h2>
      <div className='flex'>
        {
          page !== 0 && <button onClick={()=> handleLeftClick()} className="absolute left-0 z-50 w-[8rem] h-[20rem] text-white bg-transparent hover:bg-[rgba(0,0,0,0.5)]">{"<"}</button>
        }
      <div style={{
        '--page-index': page
      }} className={`w-full px-24 flex gap-12 nav`}>
      
      {movies?.map((movie,idx)=>{
        return <div>
             {
             <Movie data={movie}/>
      }
                </div>
      })
    }
    
      </div>
      <button onClick={()=> handleRightClick()} className="absolute right-0 z-50 h-[20rem] w-[8rem] text-white bg-transparent hover:bg-[rgba(0,0,0,0.5)]">{">"}</button>
      </div>
      
      
    </div>
    
  )
}

export default MoviesSwimlane
