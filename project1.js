const numberOfFilms = +prompt("How much films have you seen", "0");
//const numberOfFilms = 5;
const personalMoviDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
console.log(personalMoviDb);
let filmName = prompt("One of the last films you seen", ""),
  score = prompt("Mark it", "");

personalMoviDb.movies[filmName] = score;
console.log(personalMoviDb);
