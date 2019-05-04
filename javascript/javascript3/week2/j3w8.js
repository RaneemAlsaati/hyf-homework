fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then((movies) => {
        const badMovies = movies.filter(movies => movies.rating <7)
        console.log(badMovies);
        let badMoviesSince2000 = movies.filter(movie => movie.rating < 7 && movie.year >= 2000);
        console.log(badMoviesSince2000); 
        const  titlesOfTheBadMoviesSince2000 = badMoviesSince2000.map(movie => movie.title);
        console.log(titlesOfTheBadMoviesSince2000);
    });
     //
     function exercies (resolveAfter){
        return new Promise ((resolve) => {
            setTimeout  (()=> {
        resolve ("I am called asynchronously")
            }, 6000);
        });
    }
     
    exercies(6)

    .then (exercies=>{
        console.log(exercies)
    }

    )
    // Rewrite time
    function setTimeoutPromise(){ 
        return new Promise((resolve) => {
    
        setTimeout(() => {
          resolve("resolved");
        }, 4000);
    })
}
    
      setTimeoutPromise(4)
      .then((setTimeout) => {

    console.log('Called after 3 seconds');
    
    });   

function getCurrentLocation(){
return new Promise((resolve, reject) =>{
    navigator.geolocation.getCurrentPosition(resolve,reject)
    setTimeout(() =>{
        reject ("position");

    }, 2000);
})
}
getCurrentLocation()
  .then(position => {
    // called when the users position is found
    console.log(position);
  })
  .catch(error => {
    // called if there was an error getting the users location
    console.log(error);
  });
  // Fetching and waiting
  fetch ('http://api.open-notify.org/astros.json')
  .then(response => response.json())
    .then((astronauts) => {
    return new Promise((resolve) => {
    
        setTimeout(() => {
          resolve(astronauts);
        }, 3000);
    })   



    })

    .then (astronauts=>{
        console.log(astronauts.people)
    })

    // Visual promise

    