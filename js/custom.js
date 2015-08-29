(function() 
{
  var video = document.getElementById("small-video"),
      play  = document.getElementById("play-btn")   
      
  play.addEventListener( "click", function(e) 
  {
    e.preventDefault();
    if (video.paused) 
    {
      video.play();
      play.innerHTML = "<i class='fa fa-pause'></i>";
    } 
    else 
    {
      video.pause();
      play.innerHTML = "<i class='fa fa-play'></i>";
    }
  });
})();