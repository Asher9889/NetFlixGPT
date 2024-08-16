import { useEffect, useState } from "react";
import { options } from "../utils/constant"

const useGPTMovies = (data)=>{

    const [gptMovies, setGPTMovies] = useState(null);

    useEffect(()=>{
        finalData()
    }, [data])
    console.log(data)
    async function searchGPTMovies(title){
       try {
         const movies = await fetch(`https://api.themoviedb.org/3/search/movie?query=${title}`, options)
         return movies.json();
       } catch (error) {
        throw new Error("Server is not responding")
       }
    }

    async function searchAllMovies() {
        
        const moviesPromises = data && data.map((movie) => searchGPTMovies(movie?.title));
        return moviesPromises;
    }

    async function finalData(){
        try {
            const moviesPromises = await searchAllMovies();
            const res = await Promise.all(moviesPromises)
            setGPTMovies(res);
        } catch (error) {
            console.log('error happend in promise call', error)
        }
    }

    return gptMovies;
}

export default useGPTMovies;