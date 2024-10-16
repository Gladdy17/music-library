const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three",
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003",
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952",
    },
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] },
  },


/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
printPlaylists: function () {
  let playlists = library.playlists;
  for (let key in playlists) {
    let playlist = playlists[key];
    console.log(`${key}: ${playlist.name} - ${playlist.tracks} tracks`);
  }
},

//console.log(printPlaylists());

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
printTracks: function () {
  let printTrack = library.tracks;
  for (let key in printTrack) {
    let track = printTrack[key];
    console.log(`${key}: ${track.name} by ${track.artist} (${track.album})`);
  }
},

//console.log(printTracks());

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
 printPlaylist: function (playlistId) {
  let playlist = library.playlists[playlistId];
  if (playlist) {
    console.log(`${playlistId}: ${playlist.name} - ${playlist.tracks.length}`);
    for (i = 0; i < playlist.tracks.length; i++) {
      let trackId = playlist.tracks[i];
      let track = library.tracks[trackId];
      console.log(
        `t0${i + 1}: ${track.name} by ${track.artist} (${track.album})`
      );
    }
  } else {
    console.log(`Playlist not found ${playlistId}`);
  }
},
//printPlaylist("p01");

// adds an existing track to an existing playlist
addTrackToPlaylist: function (trackId, playlistId) {
  const playlist = library.playlists[playlistId];
  if (!playlist) {
    console.log("Playlist does not exist");
    return;
  }
  const track = library.tracks[trackId];
    if (!track) {
      console.log("Track does not exist");
     return;
    }
   if (!playlist.tracks.includes(trackId)) {
      playlist.tracks.push(trackId);
     console.log(`Track ${trackId} added to playlist ${playlistId}`);
    } else {
      console.log(`Track ${trackId} is already there !!`);
    }
  },
//addTrackToPlaylist("t03", "p01");

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
  const generateUid = function () {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

// adds a track to the library
  addTrack: function (name, artist, album) {
    const newTrack = {
     name: "I want to break free",
      artist: "Queen",
     album: "1980",
   };
  library.tracks.push(newTrack);
  },


// adds a playlist to the library
  addPlaylist: function (name) {
    const newPlaylist = {
     name: "Hobbie",
    };
  },

};
