// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const mdb = require('moviedb')('a564e5e6ccf05956046bad91fa92f76c');

mainDiv = document.getElementById('main');

function writeMovies (movTitle, movPoster, movDate,movAvg) {
    mainDiv.innerHTML += "<div class=\"card\"><img class=\"card-img\" src=\"" + movPoster + "\"><p class=\"card-title\">" + movTitle + "</p><p class=\"card-sub-title\">" + movDate + "</p><p class=\"card-rate\">" + movAvg + "</p></div>"
}

function searchMovie(searchString) {
    mdb.searchMovie({query: searchString}, (err, movies) => {
        console.log(err);
        if(movies.results==0)
            {
                mainDiv.innerHTML = "*_* No Result Found *_*";
            }
        console.log(movies.results);
        movies.results.forEach(function (movie) {
            var moviePoster = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
            writeMovies(movie.title, moviePoster, movie.release_date,movie.vote_average);
        })
    })
}

function get()
{
    mainDiv.innerHTML = "" ;
    searchString=document.getElementById('in').value;
    searchMovie(searchString);
}


/*
function tell()
{
    var get=document.getElementById('in').value;
    var display=document.getElementById('show_1');
    mdb.searchMovie({ query: get }, (err, res) => {
        console.log(res);
        display.innerText = res.results[0].title + " - " + 
            //res.results[0].poster_path + "-" + 
            res.results[0].release_date + "-" + "Popularity:" +
            res.results[0].popularity + "-" +
            res.results[0].overview;
    });
}

*/
