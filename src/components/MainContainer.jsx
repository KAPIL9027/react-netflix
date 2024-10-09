import React from 'react'
import VideoTitle from './VideoTitle'
import VideoContainer from './VideoContainer'

const MainContainer = ({movies}) => {
    
    if(!movies) return;
    
    const movie = movies[1];
  return (
    <div className="bg-[rgba(0,0,0,0.2)]">
      <div className="absoulte">
      <div className="absolute z-99 w-screen h-screen bg-black opacity-50 cursor-pointer"></div>
      <VideoTitle title={movie?.original_title} description={movie?.overview}/>
      <VideoContainer movieId={movie?.id}/>
    </div>
    </div>
    
  )
}

export default MainContainer
