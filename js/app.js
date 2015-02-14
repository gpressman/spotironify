/* jshint node: true */
"use strict";

var AlbumClass = require('./album.js');
var TrackClass = require('./track.js');

// var firstAlbum = new AlbumClass({
//     title: 'Run the Jewels',
//     duration: 3258,
//     price: 10,
//     cover: "http://upload.wikimedia.org/wikipedia/en/thumb/2/20/Run_the_jewels_ep_album_cover.jpg/220px-Run_the_jewels_ep_album_cover.jpg"
// });

// var secondAlbum = new AlbumClass({
//     title: 'Both Sides of the Brain',
//     duration: 7342,
//     price: 10,
//     cover: "https://i.scdn.co/image/9ca072901841019491b64995f15b3a56298ebe54"
// });



// var firstTrack = new TrackClass({
//     title: 'Run the Jewels',
//     duration: 330,
//     price: 0.99
// });
// var secondTrack = new TrackClass({
//     title: 'Banana Clipper',
//     duration: 251,
//     price: 0.99
// });
// var firstTrack = new TrackClass({
//     title: '36" chain  ',
//     duration: 252,
//     price: 0.99
// });
// var firstTrack = new TrackClass({
//     title: 'DDFH',
//     duration: 305,
//     price: 0.99
// });
// var firstTrack = new TrackClass({
//     title: 'Sea Legs',
//     duration: 340,
//     price: 0.99
// });
// var firstTrack = new TrackClass({
//     title: 'Job Well Done',
//     duration: 259,
//     price: 0.99
// });
// var firstTrack = new TrackClass({
//     title: 'No Come Down',
//     duration: 328,
//     price: 0.99
// });
// var firstTrack = new TrackClass({
//     title: 'Get It',
//     duration: 300,
//     price: 0.99
// });
// var firstTrack = new TrackClass({
//     title: 'Twin Hype Back',
//     duration: 312,
//     price: 0.99
// });
// var firstTrack = new TrackClass({
//     title: 'A Christmas Fucking Miracle',
//     duration: 421,
//     price: 0.99
// });




//  var thirdTrack = new TrackClass({
//     title: 'Time is too expensive',
//     duration: 447,
//     price: 1.10
// });

// var fourthTrack = new TrackClass({
//     title: 'If you Must',
//     duration: 345,
//     price: 1.10
// });

// var fifthTrack = new TrackClass({
//     title: 'Jaw Gymnastics',
//     duration: 344,
//     price: 1.10
// });

// var sixthTrack = new TrackClass({
//     title: 'Pet Peeves',
//     duration: 710,
//     price: 1.10
// });

// var seventhTrack = new TrackClass({
//     title: 'Press Rewind',
//     duration: 437,
//     price: 1.10
// });

// var eighthTrack = new TrackClass({
//     title: 'Offspring',
//     duration: 420,
//     price: 1.10
// });
// var ninthTrack = new TrackClass({
//     title: 'Style Police',
//     duration: 354,
//     price: 1.10
// });
// var tenthTrack = new TrackClass({
//     title: 'Fake as Fuck',
//     duration: 420,
//     price: 1.10
// });
// var eleventhTrack = new TrackClass({
//     title: "BM's",
//     duration: 415,
//     price: 1.10
// });
// var twelfthTrack = new TrackClass({
//     title: 'Skull & Crossbones',
//     duration: 416,
//     price: 1.10
// });
// var thirteenthTrack = new TrackClass({
//     title: 'Soopa Feen',
//     duration: 523,
//     price: 1.10
// });
// var fourteenthTrack = new TrackClass({
//     title: 'Disastrous',
//     duration: 319,
//     price: 1.10
// });
// var fifteenthTrack = new TrackClass({
//     title: 'Signature Slogans',
//     duration: 422,
//     price: 1.10
// });
// var sixteenthTrack = new TrackClass({
//     title: 'Catch All This',
//     duration: 405,
//     price: 1.10
// });
// var seventeenthTrack = new TrackClass({
//     title: 'Phony Phranchise',
//     duration: 338,
//     price: 1.10
// });
// var eighteenthTrack = new TrackClass({
//     title: 'Proto Culture',
//     duration: 413,
//     price: 1.10
// });
// var nineteenthTrack = new TrackClass({
//     title: 'Stay on your Toes',
//     duration: 327,
//     price: 1.10
// });





// firstAlbum.addTrack(secondTrack);
// firstAlbum.addTrack(firstTrack);
// secondAlbum.addTrack(thirdTrack);
// secondAlbum.addTrack(fourthTrack);
// secondAlbum.addTrack(fifthTrack);
// secondAlbum.addTrack(sixthTrack);
// secondAlbum.addTrack(seventhTrack);
// secondAlbum.addTrack(eighthTrack);
// secondAlbum.addTrack(ninthTrack);
// secondAlbum.addTrack(tenthTrack);
// secondAlbum.addTrack(eleventhTrack);
// secondAlbum.addTrack(twelfthTrack);
// secondAlbum.addTrack(thirteenthTrack);
// secondAlbum.addTrack(fourteenthTrack);
// secondAlbum.addTrack(fifteenthTrack);
// secondAlbum.addTrack(sixteenthTrack);
// secondAlbum.addTrack(seventeenthTrack);
// secondAlbum.addTrack(eighteenthTrack);
// secondAlbum.addTrack(nineteenthTrack);



// albums.push(secondAlbum)
// albums.push(firstAlbum)

// console.log('Album: ', firstAlbum);
// console.log('Artists: ', firstAlbum.getArtists());
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
                    response.forEach(function (song){
                        var newSong = new TrackClass({
                        title: song.name, 
                        duration: song.duration_ms
})
                    })
                })
				onSongs(this_li, album);
			})
	})
}


function onSongs(my_album, album) {
	my_album.find(".track-class").html('');
	album.tracks.forEach(function(track){
		my_album.find(".track-class").append(
			`<li>
				<br>
				Song name: ${track.title}, <br>  duration: ${track.duration}
				<br>
				<br>
			</li>`)
			
		}
			)
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

