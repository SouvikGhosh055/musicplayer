let progress = document.getElementById("progress");
let Player = document.getElementById("Player");
let ctrlIcon = document.getElementById("ctrlIcon");

Player.onloadeddata = function(){
    progress.max = Player.duration;
    progress.value = Player.currentTime;
}

ctrlIcon.addEventListener('click', () => {
    if(ctrlIcon.classList.contains("fa-pause")){
        Player.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }else{
        Player.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
})

if(Player.play()){
    setInterval( () =>{
progress.value = Player.currentTime;
    },500)
}

progress.addEventListener('click', function () {
    Player.play();
    Player.currentTime = progress.value;
    
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    
}) 

document.addEventListener("DOMContentLoaded",function () {
const musicPlayer = document.getElementsByClassName("musicPlayer");
const playNext = document.querySelector(".fa-forward");

const songs = [
  
    ".music1.mp3",
    ".music2.mp3",
    ".music4.mp3",
    ".music5.mp3",
    ".music6.mp3",
];

let currentSongIndex = 0;

function playNextSong(){
    if(currentSongIndex < songs.length - 1){
        currentSongIndex++;
        // musicPlayer.src = songs[currentSongIndex]
        // musicPlayer.play();
    }else {
     currentSongIndex = 0;
       
    }
    musicPlayer.src = songs[currentSongIndex]
    musicPlayer.play();
}

playNext.addEventListener("click".playNextSong);

});