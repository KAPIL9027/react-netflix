import React, { useEffect, useState } from 'react'
import { options } from '../utils/constants';

const Movie = ({data}) => {
  const [isFocused,setIsFocused] = useState(false);
  const [youtubeKey,setYoutubeKey] = useState('');
 

  const getYotubeKey = async ()=>{
        const res = await fetch(`${process.env.REACT_APP_TMDB_API_URL}//movie/${data?.id}/videos?language=en-US`, options);
        const video = await res.json();
        const youtubeKey = video?.results?.filter((vd)=> (vd.type === 'Trailer'))[0]?.key;
        setYoutubeKey(youtubeKey);
  }
  useEffect(()=>{
    console.log('isFocused',isFocused);
    getYotubeKey()
  },[isFocused])


  console.log('youtube key',youtubeKey);
  
  return (
    <div className='w-52 cursor-pointer' onMouseEnter={()=> setIsFocused(true)} onMouseLeave={()=> setIsFocused(false)}>
      {
        (!isFocused)?
       (
          <img src={`${process.env.REACT_APP_TMDB_IMG_URL}${data?.poster_path}`} className='w-full h-full rounded-md' alt='card-image'/>
        )
        :
        (
         <div>
          <div className='absolute z-20 w-260 h-360 -ml-20 -mt-16 bg-gray-800 p-4 '>
          <iframe
      className="absoulte z-20 w-full"
      src={`https://www.youtube.com/embed/${youtubeKey}?autoplay=1&mute=1&loop=1&frameborder=0`}
      allow="fullscreen;accelerometer; autoplay; loop; mute; frameborder; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
          <div className="text-white text-3xl my-4 w-72">
            {data?.title}
          </div>
          <div className="text-gray-300 text-xl w-72 line-clamp-5">
            {data?.overview}
          </div>
          </div>
         </div>
        )
      }
    </div>
  )
}

export default Movie
