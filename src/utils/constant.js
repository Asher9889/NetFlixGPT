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


generateNumber()