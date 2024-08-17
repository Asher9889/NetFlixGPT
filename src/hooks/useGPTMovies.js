import { useEffect, useState } from "react";
import { options } from "../utils/constant"

const useGPTMovies = (data)=>{

    const [gptMovies, setGPTMovies] = useState(null);

    useEffect(()=>{
        if(data)finalData()
    }, [data])
    // console.log(data)

    async function searchGPTMovies(title){
       try {
         const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${title}`, options)
         const movies = await res.json();
         return movies;
       } catch (error) {
        throw new Error("Server is not responding")
       }
    }

     function searchAllMovies() {
        
        const moviesPromises = data && data.map((movie) => searchGPTMovies(movie?.title));
        return moviesPromises;
    }

    async function finalData(){
        try {
            const moviesPromises = searchAllMovies();
            const res = await Promise.all(moviesPromises)
            // console.log("Tmdb response for gpt movies", res)
            setGPTMovies(res);
        } catch (error) {
            console.log('error happend in promise call', error)
        }
    }

    return gptMovies;
}

export default useGPTMovies;