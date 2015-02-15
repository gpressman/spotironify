/* jshint node: true */
"use strict";

var AlbumClass = require('./album.js');
var TrackClass = require('./track.js');


var albums = []

// $(document).on('click',".track-class",onSongs);

function showAlbums() {
    $(".album-list").empty()
	albums.forEach(function(album){
		$(".album-list").append(
		  `<li> 
			  Title: ${album.title}, <br> <img src="${album.cover}" width="200"  /><br><br>
			  <button class="reveal-songs">songs</button>
			  <ul class="track-class"></ul>
           </li>`
        )
	
    
        var this_li = $(".album-list li:last");
	    
	    this_li.on('click', '.reveal-songs', function(){
            var songsRequest = $.get("https://api.spotify.com/v1/albums/" + album.id) 
            
            songsRequest.done(function (response) {
                album.tracks = []

                response.tracks.items.forEach(function (song){
                	onSongs(this_li, album);
                    var newSong = new TrackClass({
                      title: song.name, 
                      duration: song.duration_ms 
                   
                    })
                
                    album.addTrack(newSong)
                })
            })
			
			
	    })
	})
}


function onSongs(my_album, album) {
	my_album.find(".track-class").html('');
	album.tracks.forEach(function(track){
		my_album.find(".track-class").append(
			`<li>
				<br>
				${track.title}, <br>  duration: ${((track.duration/1000)/60).toFixed(2)} minutes
				<br>
				<br>
			</li>`
	    )
	})
}

$(".button-search-selector").click (function(event){
	event.preventDefault()
	var searchTerm = $(".search-selector-field").val();
    var request = $.get('https://api.spotify.com/v1/search?type=album&query=' + searchTerm)
    request.done(function (response) {
        albums = []
        response.albums.items.forEach(function(album){
            var newAlbum = new AlbumClass ({
                title: album.name,
                cover: album.images[0].url,
                id: album.id
            })
            albums.push(newAlbum);
        })
        showAlbums()
    })
});


	// figure what album should we display

//     albums.forEach(function(album){
//     	album.tracks.forEach(function(track) {
//     		$(".track-class").append(
//     			`<li>
//     			Song title: ${track.title} by ${track.Artists}
//     			</li>` 
//     		)
//     	})
//     });
// }

// album_type: "album"
// available_markets: Array[60]external_urls: Objecthref: "https://api.spotify.com/v1/albums/04uhhcjGVCHodMgZjXOlye"id: "04uhhcjGVCHodMgZjXOlye"images: Array[3]name: "Deltron 3030"
// type: "album"
// uri: "spotify:album:04uhhcjGVCHodMgZjXOlye

