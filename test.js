const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NmMxYzU3NDYwYTZmODNhOWQ1NzViYTQ0MDEzNDVlYiIsIm5iZiI6MTcyMjc2NDI3OS41MDQzNDEsInN1YiI6IjY2MWUzMzQ1Yjg0Y2RkMDE3ZDY0MGU2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0te5AxmlN0cLX2mFSm5UkMhS9UMHsMFfsI9qraiVZtc" ,
    }
};



    async function fetchs(){
        const res = await fetch("https://api.themoviedb.org/3/movie/now_playing", options) 
        const allMovies = await res.json();
        const data = allMovies.results;
        if(data){

            console.log("data is", data)
        }
    }

    fetchs()