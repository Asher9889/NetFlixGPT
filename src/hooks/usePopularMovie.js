import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/store/popularMovieSlice"
import { useEffect } from "react";

const usePopularMovie = ()=>{
    
    const dispatch = useDispatch();

    useEffect(()=>{
        fetchMovie()
    }, [])
    
    async function fetchMovie(){
        const res = await fetch("https://api.themoviedb.org/3/movie/top_rated", options) 
        const data = await res.json();
        dispatch(addMovies(data.results))
    }
}

export default usePopularMovie;