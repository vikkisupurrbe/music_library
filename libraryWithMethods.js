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
             },

  /////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
  printPlaylists: function() {
    for (let playlistId in this.playlists) {
      let playlist = this.playlists[playlistId];
      console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    }
  },

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
  printTracks: function() {

    for (let tracklistId in this.tracks) {
      let tracklist = this.tracks[tracklistId];
      console.log(`${tracklist.name} by ${tracklist.artist} (${tracklist.album})`)
    }
  },
  
// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
  printPlaylist: function(playlistId) {

    let playlist = this.playlists[playlistId];

    if (!playlist) {
      console.log("Playlist not found.");
      return;
    }
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`)

    for (let trackId of playlist.tracks) {
      let track = this.tracks[trackId];
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`)
    }
  },

// adds an existing track to an existing playlist
  addTrackToPlaylist: function(trackId, playlistId) {

    let playlist = this.playlists[playlistId];

    if (!playlist) {
      console.log("Playlist not found.");
      return;
    }

    if (!this.tracks[trackId]) {
      console.log("Track not found.")
      return;
    }

    playlist.tracks.push(trackId);
    console.log(`Track ${trackId} added to playlist ${playlistId}`);
    },

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

// adds a track to the library
  addTrack: function(name, artist, album) {

    let newTracklistId = this.generateUid();

    this.tracks[newTracklistId] = {
      id: newTracklistId,
      name: name,
      artist: artist,
      album: album
    };
    console.log(`New track added: ${name} by ${artist} (Album: ${album})`);
  },

// adds a playlist to the library
  addPlaylist: function(name) {
    let newPlaylistId = this.generateUid();

    library.playlists[newPlaylistId] = {
      id: newPlaylistId,
      name: name,
      tracks: []
    };
    library.playlists[newPlaylistId].tracks.push(this.generateUid());
    console.log(`New playlist named "${name}" added (ID: ${newPlaylistId})`);
  },

};

library.printPlaylists();
library.printTracks();
library.printPlaylist("p01");
library.addTrackToPlaylist("t03", "p01");
library.addTrack("Syntax Solace", "Lofi Gemini", "Code Harmony");
library.addPlaylist("Classical Music");










// STRETCH (optional):
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
//const printSearchResults = function(query) {}