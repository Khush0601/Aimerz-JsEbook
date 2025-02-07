// Create a function streamMovie(movieName) that simulates streaming a movie.
//  If the movie is unavailable, reject with "Movie not found". Otherwise, resolve with "Streaming [movieName]..."

function streamMovie(movieName) {
    const availableMovies = ["Inception", "Interstellar", "The Matrix"];
 return new Promise((resolve,reject)=>{
   setTimeout(()=>{
    if(availableMovies.includes(movieName)){
        resolve(`Streaming ${movieName}...`);
    }
    else{
        reject('movie not found')
    }
   },2000)
 })
}

// Example Usage
streamMovie("Inception")
  .then(console.log)
  .catch(console.log);