const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {

  for (let playlistId in library.playlists) {
    let playlist = library.playlists[playlistId];
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
  }

}
printPlaylists();

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {

  for (let tracklistId in library.tracks) {
    let tracklist = library.tracks[tracklistId];
    console.log(`${tracklist.name} by ${tracklist.artist} (${tracklist.album})`)
  }

}
printTracks();

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {

    let playlist = library.playlists[playlistId];

    if (!playlist) {
      console.log("Playlist not found.");
      return;
    }
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`)

    for (let trackId of playlist.tracks) {
      let track = library.tracks[trackId];
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`)
    }
  };
printPlaylist("p01");

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {

  let playlist = library.playlists[playlistId];

  if (!playlist) {
    console.log("Playlist not found.");
    return;
  }

  if (!library.tracks[trackId]) {
    console.log("Track not found.")
    return;
  }

  playlist.tracks.push(trackId);
  console.log(`Track ${trackId} added to playlist ${playlistId}`);
}
addTrackToPlaylist("t03", "p01");

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library
const addTrack = function(name, artist, album) {

  let newTracklistId = generateUid();

  library.tracks[newTracklistId] = {
    id: newTracklistId,
    name: name,
    artist: artist,
    album: album
  };

  console.log(`New track added: ${name} by ${artist} (Album: ${album})`);

}
addTrack("Syntax Solace", "Lofi Gemini", "Code Harmony");

// adds a playlist to the library
const addPlaylist = function(name) {
  let newPlaylistId = generateUid();

  library.playlists[newPlaylistId] = {
    id: newPlaylistId,
    name: name,
    tracks: []
  };
  library.playlists[newPlaylistId].tracks.push(generateUid());
  
  console.log(`New playlist named "${name}" added (ID: ${newPlaylistId})`);
}
addPlaylist("Classical Music");


// STRETCH (optional):
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
//const printSearchResults = function(query) {}