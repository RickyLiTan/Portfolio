const videos = document.querySelectorAll('.active');

videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });
  
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});

const videos2 = document.querySelectorAll('.hidden');

videos2.forEach(video => {
  video.play();
});