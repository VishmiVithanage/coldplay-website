//song list
let All_song = [
   {
     name: "Hymn for weekend",
     path: "music/song1.mp3",
     img: "Album_wallpapers/1.jpg",
     singer: "Coldplay"
   },
   {
     name: "A Sky Full Of Stars",
     path: "music/song2.mp3",
     img: "Album_wallpapers/2.jpg",
     singer: "Coldplay"
   },
   {
     name: " Paradise",
     path: "music/song3.mp3",
     img: "Album_wallpapers/3.jpg",
     singer: "Coldplay"
   },
   {
     name: "Orphans",
     path: "music/song4.mp3",
     img: "Album_wallpapers/4.jpg",
     singer: "Coldplay"
   },
   {
     name: "Fix You",
     path: "music/song5.mp3",
     img: "Album_wallpapers/5.jpg",
     singer: "Coldplay"
   },
   {
    name: "Daddy",
    path: "music/song6.mp3",
    img: "Album_wallpapers/6.jpg",
    singer: "Coldplay"
   }
   ,
   {
    name: "Clocks",
    path: "music/song7.mp3",
    img: "Album_wallpapers/7.jpg",
    singer: "Coldplay"
   }
   ,
   {
    name: "The Scientist",
    path: "music/song8.mp3",
    img: "Album_wallpapers/8.jpg",
    singer: "Coldplay"
   }
   ,
   {
    name: "Yellow",
    path: "music/song9.mp3",
    img: "Album_wallpapers/9.jpg",
    singer: "Coldplay"
   }
   ,
   {
    name: "Let Somebody Go",
    path: "music/song10.mp3",
    img: "Album_wallpapers/10.jpg",
    singer: "Coldplay ft Selena Gomez"
   }
   
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/