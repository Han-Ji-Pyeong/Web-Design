window.addEventListener("DOMContentLoaded", function () {
    var video = document.createElement("video");
    video.src = "backgroundhomepage.mp4";
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
  
    var gameFeaturesSection = document.getElementById("game-features-section");
    gameFeaturesSection.insertBefore(video, gameFeaturesSection.firstChild);
  });
  