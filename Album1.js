console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
    {songName: "Pillow Talk", filePath: "song/1.mp3", coverPath: 'covers/1.jpg'},
    {songName: "Pillow Talk", filePath: "song/1.mp3", coverPath: 'covers/1.jpg'},
    {songName: "Pillow Talk", filePath: "song/1.mp3", coverPath: 'covers/1.jpg'},
    {songName: "Pillow Talk", filePath: "song/1.mp3", coverPath: 'covers/1.jpg'},
    {songName: "Pillow Talk", filePath: "song/1.mp3", coverPath: 'covers/1.jpg'},
    {songName: "Pillow Talk", filePath: "song/1.mp3", coverPath: 'covers/1.jpg'},
    {songName: "Pillow Talk", filePath: "song/1.mp3", coverPath: 'covers/1.jpg'},

]
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle')
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
