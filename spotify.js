require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotify);
var util = require('util');

// console.log(keys.spotify);


// node liri.js spotify-this-song '<song name here>'


// This will show the following information about the song in your terminal/bash window

// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from

var entype = process.argv[2]
var query = process.argv[3]

if (entype === "spotify"){
    
spotify.search({ type: 'track', query: query }, function (err, bob) {
    if (err) {
        console.log('Error occurred: ' + err);
        return;
    }


    console.log(bob.tracks.items[0].name);
    console.log(bob.tracks.items[0].album.name);
    console.log(bob.tracks.items[0].album.artists[0].name);
    
    const fs = require('fs');

    fs.appendFile('response.txt', util.inspect(bob, { showHidden: false, depth: 3 }), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
});


}


// Exporting the function which we will use in main.js
//module.exports = mySpotify;