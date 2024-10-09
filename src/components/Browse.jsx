import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { useSelector } from 'react-redux'

const Browse = () => {
  const movies = useSelector((state)=> state?.movies?.nowPlayingMovies?.payload)?.results;
  useNowPlayingMovies('now_playing')
  return (
    <div className="bg-black">
      <Header/>
      <MainContainer movies={movies}/>  
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
