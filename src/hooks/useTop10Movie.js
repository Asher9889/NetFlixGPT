import { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/store/top10MovieSlice";

const useTop10Movie = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        fetchTrendingMovie();
    },[])

    async function fetchTrendingMovie(){
        const res = await fetch("https://api.themoviedb.org/3/trending/movie/day", options)
        const movies = await res.json();
        const filteredMovies = movies?.results?.slice(0,10);
        dispatch(addMovies(filteredMovies));
    }
    
}

export default useTop10Movie;