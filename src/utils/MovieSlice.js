import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trendingMovies: null,
        upcomingMovies: null,
        popularMovies: null,
        videoKey: null
    },
    reducers: {
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addTrendingMovies: (state,action)=>{
            state.trendingMovies = action.payload
        },
        addPopularMovies: (state,action)=>{
            state.popularMovies = action.payload
        },
        addUpcomingMovies: (state,action)=>{
            state.upcomingMovies = action.payload
        },
        addVideoKey: (state,action)=>{
            state.videoKey = action.payload
        }
    }
})

export const {addNowPlayingMovies,addTrendingMovies,addPopularMovies,addUpcomingMovies,addVideoKey} = moviesSlice.actions;
export default moviesSlice.reducer