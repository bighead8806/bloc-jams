 var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };
 
 // Another Example Album
 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

var albumAdamMohrbacher = {
    title: 'Adams Greatest Hits',
    artist: 'Adam Mohrbacher',
    label: 'A Fantastic Label, Believe Me',
    year: '2050',
    albumArtUrl:'assets/images/album_covers/Paris_2050_(No_Title)',
    songs: [ 
    {title: 'I like you!', duration:'20:25'},
    {title: 'I really, really like you', duration:'90:30'},
    {title: 'I like you too much', duration:'100:00'},
    {title: 'Seriously, I need help regarding how much I like you!', duration:'30:45'}
]
};

 var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '<td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     return template;
 };

var albumTitle = document.getElementsByClassName('album-view-title')[0];
     var albumArtist = document.getElementsByClassName('album-view-artist')[0];
     var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
     var albumImage = document.getElementsByClassName('album-cover-art')[0];
     var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
 
var setCurrentAlbum = function(album) {
     albumTitle.firstChild.nodeValue = album.title;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);
 
     albumSongList.innerHTML = '';
 
     for (var i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
     }
 };

var songListContainer = document.getElementsByClassName('album-view-song-list')[0];
         
var songRows = document.getElementsByClassName('album-view-song-item');
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
    
window.onload = function() {
     setCurrentAlbum(albumPicasso);
<<<<<<< HEAD
     
songListContainer.addEventListener('mouseover', function(event) {
        
var songRows = document.getElementsByClassName('album-view-song-item');
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';

if (event.target.parentElement.className === 'album-view-song-item') {
=======
    
songListContainer.addEventListener('mouseover', function(event) {
    if (event.target.parentElement.className === 'album-view-song-item') {
>>>>>>> checkpoint-12-dom-scripting-play/pause-part-1
    event.target.parentElement.querySelector('.song-item-number').innerHTML = playButtonTemplate;
    }
    
});
    
for (var i = 0; i < songRows.length; i++) {
    songRows[i].addEventListener('mouseleave', function(event) {
    this.children[0].innerHTML = this.children[0].getAttribute('data-song-number');
    });
}
     
var myAlbums = [albumMarconi, albumPicasso, albumAdamMohrbacher];
     var image = 1; //changed this based on watching the video
     albumImage.addEventListener("click", swapAlbums);
     function swapAlbums(){ //This seems like it should work, even though its a little different from the video. Am I wrong?
         setCurrentAlbum(myAlbums[index]);
         index++;
         if (index == myAlbums.length){
             index = 0; //added this based on watching the video
         }
      }
    }