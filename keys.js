console.log ("This is loaded");

// Get the API keys! All the API keys!
var twitterKeys = {
    consumer_key:"BhwNvyWjNVmdozMopTVAbcr6K",
    consumer_secret:"S7rdaP2czl97p2dQ8yq9dOZB8LRYcu31sgnEN9bB0AzR0zcC5l",
    access_token_key: "852216024955068425-KESbPMURGK3KtI6Fj6v5OxXSX88dJhJ",
    access_token_secret:"IMX0WULxo59YaQrkRke82C3JYNOPxmNmRQRvCpngPtFon"
}

var spotifyKeys = {
    id:"26ab6333662742b6a4f1cbf5a1ddff03",
    secret:"3d6e76e65bbf4024b9ced22b1cfdcca0"
}

var omdbKey = {
    key: "trilogy"
}

//Exporting key variables to liri.js
module.exports =  {
    twitterKeys: twitterKeys,
    spotifyKeys: spotifyKeys,
    omdbKey: omdbKey.key
}