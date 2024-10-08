export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_ACCESS_TOKEN ,
    }
};


export function generateNumber(){
  const number = Math.floor(Math.random() * 20) 

  return number;
}

export const IMDB_BASE_API_URL = "https://api.themoviedb.org/3"
export const IMDB_IMG_URL = "https://image.tmdb.org/t/p/w500"