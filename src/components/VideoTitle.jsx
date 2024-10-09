import React from 'react'

const VideoTitle = ({title,description}) => {
  return (
    <div className="z-20 absolute left-[5.5vw] top-[15vh]">
      <h1 className="text-bold text-[2.44vw] text-white mb-2">{title}</h1>
      <p className="text-medium text-[1.44vw] text-justify w-[30vw]  text-white mb-2 line-clamp-4">{description}</p>
      <div className="flex flex-row gap-2">
        <button className="p-2 rounded flex gap-1 bg-white"><span><img src="/play.svg" alt="play-button"/></span>Play Now</button>
        <button className="p-2 rounded flex gap-1 text-white bg-gray-300"><span><img src="/info.svg" alt="info-icon"/></span>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
