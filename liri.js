// require(".env").config();

var keys = require("./keys.js")

var Spotify = require("node-spotify-api")

var spotify = new Spotify({
    id: "2fcb048a9aa248c8ab24b90dc3f4b221",
    secret: "ce05b0cfa7454b1481447467932197cd"
})

function getSpotify() {
    spotify.search( {
        type: "track",
        query: "King of Alabama",

    },
    function(err, data) {
        if (err) {
            console.log("Error happened:" + err)
            return
        }
        console.log('full data res ===>', data)
        var normalized = []
        var songs = data.tracks.items
        for( var i = 0; i < songs.length; i++){
            normalized.push({
                "song name": songs[i].name
            })
        }
        console.log('Normalized ==>', normalized)
    }
    ) 
}

getSpotify()



// Add the code required to import the keys.js file and store it in a variable.
// You should then be able to access your keys information like so

// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);
// Make it so liri.js can take in one of the following commands:

// my-tweets

// spotify-this-song

// movie-this

// do-what-it-says