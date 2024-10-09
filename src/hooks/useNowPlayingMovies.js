import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addNowPlayingMovies,addTrendingMovies,addUpcomingMovies,addPopularMovies } from "../utils/MovieSlice";
import { useEffect } from "react";

export const useNowPlayingMovies = (slug)=>{
    const dispatch = useDispatch()
    const getNowPlayingMovies = async ()=>{
          console.log(slug);
          const data = await fetch(`${process.env.REACT_APP_TMDB_API_URL}/movie/${slug}?language=en-US&page=1`, options)
          const movies = await data.json();
          console.log('movies',movies);
          if(slug === 'now_playing')
          dispatch(addNowPlayingMovies({payload: movies}))
          else if(slug === 'trending')
            dispatch(addTrendingMovies({payload: movies}))
          else if(slug === 'upcoming')
            dispatch(addUpcomingMovies({payload: movies}))
          else if(slug === 'popular')
            dispatch(addPopularMovies({payload: movies}))

    }

    useEffect(()=>{
        getNowPlayingMovies()
    },[])
}