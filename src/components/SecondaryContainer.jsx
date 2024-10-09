import React from 'react'
import MoviesSwimlane from './MoviesSwimlane'

const SecondaryContainer = () => {
  return (
    <div className="absolute flex flex-col gap-[4vw] bg-black">
      <div className="-mt-[55vh]">
      <MoviesSwimlane title={'Now Playing'} slug={'now_playing'}/>
      </div>
      
      <MoviesSwimlane title={'Upcoming'} slug={'upcoming'}/>
      <MoviesSwimlane title={'Trending'} slug={'trending'}/>
      <MoviesSwimlane title={'Popular'} slug={'popular'}/>
    </div>
  )
}

export default SecondaryContainer
