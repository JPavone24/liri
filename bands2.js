var axios = require("axios");
var artist = process.argv[2];
var userCity = process.argv[3];
console.log(userCity)
// Then run a request with axios to the OMDB API with the movie specified
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
  function(response) {
    console.log("response")
//     for (i = 0; i < response.data.length; i++) {
//    
    // }
 }
 )
console.log("hi")