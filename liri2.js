// create .env
require("dotenv").config();
var fs= require("fs")
// link key page and APIs
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios")
// var bandsIntown = (what do I put in here i dont have an api)
var moment = require("moment")
// variables for person to enter a movie, song or band, and variable for searching.
var userInput = process.argv[2]
var userSearch = process.argv.splice(3).join(" ");
// execute the function search
Search();
// Create a function that allows multiple search opions, using else if or switch (I'm gonna try a switch) 
function Search() {
    switch (userInput) {
        case "spotify-this-song":
            spotifyThisSong();
            break;
        case "movie-this":
            movieThis();
            break;
        case "concert-this":
            concertThis();
            break;
        case "do-what-it-says":
                doWhatItSays();
            break;
    }

}
function spotifyThisSong() {
    console.log("spofity")
    spotify.search({ type: 'track', query: userSearch }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("here is our data: ", data.tracks.items[0]);
        console.log("artist: ", data.tracks.items[0].artists[0].name);
        console.log("song title: ", data.tracks.items[0].name);
        console.log("link: ", data.tracks.items[0].album.uri);
        console.log("album title: ", data.tracks.items[0].album.name);


    });
}
function movieThis() {
    console.log("movie-this")
    var queryURL = "http://www.omdbapi.com/?t=" + userSearch + "&y=&plot=full&tomatoes=true&apikey=trilogy";
    axios.get(queryURL).then(function (response) {

        console.log("title: ", response.data.Title);
        console.log("Year: ", response.data.Year);
        console.log("IMDB Rating : ", response.data.imdpRatings);
        console.log("Rotten tomatoe rating: ", response.data.tomatoRating);
        console.log("Country: ", response.data.Country);
        console.log("Language: ", response.data.Language);
        console.log("Plot: ", response.data.Plot);
        console.log("Actors: ", response.data.Actors);


    })


}

function concertThis() {

    var queryURL = "https://rest.bandsintown.com/artists/" + userSearch + "/events?app_id=codingbootcamp";
    axios.get(queryURL).then(function (response) {
        console.log(JSON.stringify(response.data, null, 2))

        console.log("Name of the venue: ", response.data[0].venue.name)
        console.log("Venue Locations: ", response.data[0].venue.city)
        console.log("Date of event: ",moment(response.data[0].datetime).format("MM/DD/YYYY"))
    });
}

function doWhatItSays() {
    fs.readFile("random.txt","utf8", function(err,data){
        var array=data.split(",")
        userInput=array[0]
        userSearch=array[1]
        Search();

    })
    // request(?);
    // Response.this
}
