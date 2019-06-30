// // Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");
var artist = process.argv[2];
var userCity = process.argv[3];
console.log(userCity)
console.log(artist)
// // Then run a request with axios to the OMDB API with the movie specified
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
  function(response) {
    console.log(response.data)
  })
//     console.log("-------------first 5 cities-----------------")
//     for (i = 0; i < response.data.length; i++) {
//       console.log(response.data[0].venue.city);
//     }
//     console.log("-------------first 5 cities-----------------")
    
//     for (i = 0; i < response.data.length; i++) {
//     if (userCity === response.data[i].venue.city) {
//       //displays the venue info and dates for that city//
//       console.log(response.data[i].venue)
//     }
//     }
//  }
//  )

console.log("hello")
