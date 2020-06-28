const fs = require('fs');

let masVotadas = {
db:'./data/movies.json',
titulo: "Mas Votadas",
leerJSON: function(){
    let moviesJSON = fs.readFileSync(this.db,'utf-8');
    let movies = JSON.parse(moviesJSON);
    return movies
},
cantidad: function(){
    return this.leerJSON().total_movies
},
listarPelis: function(){ 
    let movies = this.leerJSON().movies;
    let masVotadas = movies.filter((pelicula) =>{
        return pelicula.vote_averange >= 7
    })
    return masVotadas
},
ratingPromedio: function(){
} 
};
module.exports = masVotadas