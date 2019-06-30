// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created

// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");

// Grab the movieName which will always be the third node argument.
var entype = process.argv[2]
var query = process.argv[3];
var query2 = process.argv[4];
console.log("===================================")
// console.log("you asked for " + query + "!");
console.log("----------------" + query + "----------------")


if (entype === "OMDB") {
// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + query + "&y=&plot=short&apikey=trilogy";


// This line is just to help us debug against the actual URL.
// console.log(queryUrl);

if (query2 === "everything") {
    axios.get(queryUrl).then( 
      function(response) {
          console.log(response.data)
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



