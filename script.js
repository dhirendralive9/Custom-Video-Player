const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


// Play and pause video 

toggleVideoStatus = () =>{
    if(video.paused)
{
     video.play();
} else {
     video.pause();
}
  }
//update play pause icon
updatePlayIcon = () =>{
  if(video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  }
      else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
      } 
  
}

//update progress & timestamp

updateProgress = () =>true 

//set video time to process 

setVideoProgress = () =>{
    return true;
}

//stop video 

stopVideo = () =>{
  video.currentTime =0;
  video.pause();
}


//Event listeners 

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);