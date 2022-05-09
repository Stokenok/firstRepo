const numberOfFilms = +prompt("How much films have you seen", "0");
//const numberOfFilms = 5;
const personalMovieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
console.log(personalMovieDb);

for (let i = 0; i < 2; i++) {
  const filmName = prompt("One of the last films you seen", ""),
    score = +prompt("Mark it", "");

  //console.log(personalMovieDb);
  if (
    filmName != null &&
    score != null &&
    filmName.length < 50 &&
    filmName != "" &&
    score != ""
  ) {
    personalMovieDb.movies[filmName] = score;

    console.log("everything is good");
  } else {
    console.log("You are input something wrong");
    i--;
  }
  //  console.log(filmName.length);
}
if (personalMovieDb.count < 10) {
  console.log("You have seen a few films");
} else if (personalMovieDb >= 10 && personalMovieDb.count < 30) {
  console.log("Youre normal guy");
} else if (personalMovieDb.count >= 30) {
  console.log("You have seen a lot of films");
} else {
  console.log("Error");
}
