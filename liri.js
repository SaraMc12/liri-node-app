require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require ('node-spotify-api');
var spotify = new Spotify(keys.spotify);
// var spotify = new Spotify({
//     id: SPOTIFY_ID=your-spotify-id,
//     secret: SPOTIFY_SECRET=your-spotify-secret
// })

