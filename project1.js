const personalMovieDb = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDb.count = +prompt("How much films have you seen", "0");
    while (
      personalMovieDb.count == "" ||
      personalMovieDb.count == null ||
      isNaN(personalMovieDb.count)
    ) {
      personalMovieDb.count = +prompt("How much films have you seen", "0");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const filmName = prompt("One of the last films you seen", ""),
        score = +prompt("Mark it", "");
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
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDb.count < 10) {
      console.log("You have seen a few films");
    } else if (personalMovieDb >= 10 && personalMovieDb.count < 30) {
      console.log("Youre normal guy");
    } else if (personalMovieDb.count >= 30) {
      console.log("You have seen a lot of films");
    } else {
      console.log("Error");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDb);
    }
    showMyDB(personalMovieDb.privat);
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let a = prompt(`Input your favorite genre in order ${i}`).toLowerCase();
      if (a != "" && a != null) {
        personalMovieDb.genres[i - 1] = a;
      } else {
        console.log("Incorrect data");
        i--;
      }
    }

    personalMovieDb.genres.forEach((item, i) => {
      console.log(`Your favorite genre # ${i + 1} is ${item}`);
    });
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDb.privat != false) {
      personalMovieDb.privat = false;
    } else {
      personalMovieDb.privat = true;
    }
  },
};
//personalMovieDb.start();
// console.log(personalMovieDb.privat);
// personalMovieDb.toggleVisibleMyDB();
// console.log(personalMovieDb.privat);
personalMovieDb.writeYourGenres();
