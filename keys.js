console.log ("This is loaded");

//Get the API keys! All the API keys!
// var twitterKeys = {
//     consumer_key:"",
//     consumer_secret:"",
//     access_token_key: "",
//     access_token_secret:""
// }

var spotifyKeys = {
    id:"26ab6333662742b6a4f1cbf5a1ddff03",
    secret:"3d6e76e65bbf4024b9ced22b1cfdcca0"
}

var omdbKey = {
    key: "trilogy"
}

//Exporting key variables to liri.js
module.exports =  {
    // twitterKeys: twitterKeys,
    spotifyKeys: spotifyKeys,
    omdbKey: omdbKey.key
}