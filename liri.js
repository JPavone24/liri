require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api')
var axios = require("axios");
var spotify = new Spotify(keys.spotify);
var util = require('util');

// console.log(keys.spotify);

var entype = process.argv[2]
var query = process.argv[3]
var query2 = process.argv[4];


//================================================================================================================
//                          SPOTIFY
//================================================================================================================

if (entype === "spotify"){
    
spotify.search({ type: 'track', query: query }, function (err, bob) {
    if (err) {
        console.log('Error occurred: ' + err);
        return;
    }

    console.log("===================================================")
    console.log("you searched for the song : " + bob.tracks.items[0].name);
    console.log("this song is from the album : " + bob.tracks.items[0].album.name);
    console.log("this song was written by: " + bob.tracks.items[0].album.artists[0].name);
    console.log("===================================================")
    
    const fs = require('fs');

    fs.appendFile('response.txt', util.inspect(bob, { showHidden: false, depth: 3 }), function (err) {
        if (err) throw err;
        // console.log('Saved!');
    });
});


}

//==========================================================================================================
//                                    BANDS IN TOWN
//==========================================================================================================


if (entype === "bandsInTown") {
    // Then run a request with axios to the OMDB API with the movie specified
    axios.get("https://rest.bandsintown.com/artists/" + query + "/events?app_id=codingbootcamp").then(
      function(response) {
        console.log("-------------first 5 cities-----------------")
        for (i = 0; i < 5; i++) {
          console.log(response.data[0].venue.city);
        }
        console.log("-------------first 5 cities-----------------")
        
        for (i = 0; i < 5; i++) {
        if (query2 === response.data[i].venue.city) {
          //displays the venue info and dates for that city//
          console.log(response.data[i].venue)
        }
        }
     }
     )
    }
//========================================================================================================
//                                                OMDB
//========================================================================================================

if (entype === "OMDB") {
    // Then run a request with axios to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + query + "&y=&plot=short&apikey=trilogy";
    
    
    // This line is just to help us debug against the actual URL.
    // console.log(queryUrl);
    
    if (query2 === "everything") {
        axios.get(queryUrl).then( 
          function(response) {
            console.log("==================================================")
            console.log("The movie's name is : " + response.data.Title);
            console.log("The movie's rating on metascore is : " + response.data.Metascore);
            console.log("The movie's IMBD rating is: " + response.data.imdbRating);
             console.log("The movie was produced in: " + response.data.Country);
            console.log("The movie's language is : " + response.data.Language);
            console.log("The movie was made in : " + response.data.Year);
             console.log("The movie is staring : " + response.data.Actors);
            console.log("The movie was rated : " + response.data.Rated);
            console.log("The movie's genre was: " + response.data.Genre);
            console.log("The movie's runtime was : " + response.data.Runtime);
            console.log("The movie's plot was : " + response.data.Plot);
            console.log("==================================================")
          
          }
        )};
    
        if (query2 === "rating") {
            axios.get(queryUrl).then( 
                function(response) {
                console.log("==================================================")
                console.log("The movie's rating is: " + response.data.imdbRating);
                console.log("==================================================")
                
                }
            )};
    
        if (query2 === "year") {
            axios.get(queryUrl).then( 
              function(response) {
                console.log("==================================================") 
                console.log("The movie was made in : " + response.data.Year);
                console.log("==================================================")
              
              }
            )};
    
        if (query2 === "rated") {
            axios.get(queryUrl).then( 
                function(response) {
                console.log("==================================================")
                // console.log("The movie's rating is: " + response.data.imdbRating);
                // console.log("The movie was made in : " + response.data.year);
                console.log("The movie was rated : " + response.data.Rated);
                // console.log("The movie's genre was: " + response.data.Genre);
                // console.log("The movie's runtime was : " + response.data.Runtime);
                // console.log("The movie's plot was : " + response.data.Plot);
                console.log("==================================================")
                
                }
            )};
    
            if (query2 === "genre") {
                axios.get(queryUrl).then( 
                    function(response) {
                    console.log("==================================================")
                    // console.log("The movie's rating is: " + response.data.imdbRating);
                    // console.log("The movie was made in : " + response.data.year);
                    // console.log("The movie was rated : " + response.data.Rated);
                    console.log("The movie's genre was: " + response.data.Genre);
                    // console.log("The movie's runtime was : " + response.data.Runtime);
                    // console.log("The movie's plot was : " + response.data.Plot);
                    console.log("==================================================")
                    
                    }
                )};
    
        if (query2 === "runtime") {
            axios.get(queryUrl).then( 
                function(response) {
                console.log("==================================================")
                // console.log("The movie's rating is: " + response.data.imdbRating);
                // console.log("The movie was made in : " + response.data.year);
                // console.log("The movie was rated : " + response.data.Rated);
                // console.log("The movie's genre was: " + response.data.Genre);
                console.log("The movie's runtime was : " + response.data.Runtime);
                // console.log("The movie's plot was : " + response.data.Plot);
                console.log("==================================================")
                
                }
            )};
    
        if (query2 === "plot") {
            axios.get(queryUrl).then( 
                function(response) {
                console.log("==================================================")
                // console.log("The movie's rating is: " + response.data.imdbRating);
                // console.log("The movie was made in : " + response.data.year);
                // console.log("The movie was rated : " + response.data.Rated);
                // console.log("The movie's genre was: " + response.data.Genre);
                // console.log("The movie's runtime was : " + response.data.Runtime);
                console.log("The movie's plot was : " + response.data.Plot);
                console.log("==================================================")
                
                }
            )};
            
            }
    
// Exporting the function which we will use in main.js
//module.exports = mySpotify;