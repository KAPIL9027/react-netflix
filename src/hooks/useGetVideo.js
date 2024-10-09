import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addVideoKey } from "../utils/MovieSlice";


export const useGetVideo = (movieId)=>{
    const dispatch = useDispatch()
    const getVideo = async ()=>{
        const res = await fetch(`${process.env.REACT_APP_TMDB_API_URL}//movie/${movieId}/videos?language=en-US`, options);
        const video = await res.json();
        const youtubeKey = video?.results?.filter((vd)=> (vd.type === 'Trailer'))[0]?.key;
        dispatch(addVideoKey({payload: youtubeKey}))
    }

    useEffect(()=>{
        getVideo()
    },[])
      
      
}