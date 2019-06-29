require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require ('node-spotify-api');
var spotify = new Spotify(keys.spotify);
// var spotify = new Spotify({
//     id: SPOTIFY_ID=your-spotify-id,
//     secret: SPOTIFY_SECRET=your-spotify-secret
// })

// concert-this
// spotify-this-song
// movie-this
// do-what-it-says

var action = process.argv[2]
var something = process.argv.splice(3).join(" ")
