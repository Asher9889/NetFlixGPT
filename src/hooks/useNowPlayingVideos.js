import { useEffect } from "react";
import { addNowPlayingMoviesVideos } from "../utils/store/nowPlayingSlice";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";


const useNowPlayingVideos = (id)=>{
    
    const dispatch = useDispatch();

    useEffect(()=>{
        fetchVideos()
    },[])

    async function fetchVideos() {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/" + id + "/videos",
          options
        );
        const data = await res.json();
        dispatch(addNowPlayingMoviesVideos(data.results));
    }
}

export default useNowPlayingVideos;