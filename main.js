const uploadBtn = document.getElementById('upload-btn');
const videoPlayer = document.getElementById('video-player');
const playBtn = document.getElementById('play-btn');
const stopBtn = document.getElementById('stop-btn');
const resumeBtn = document.getElementById('resume-btn');
const MAX_FILE_SIZE_MB = 20; 

uploadBtn.addEventListener('change', function(event) {
  const file = event.target.files[0];

  if (file) {
    const fileSizeMB = file.size / (1024 * 1024); 

    if (fileSizeMB > MAX_FILE_SIZE_MB) {
      alert("File size exceeds 20MB. Please upload a smaller video.");
      uploadBtn.value = ''; 
    } else {
      const fileURL = URL.createObjectURL(file);
      videoPlayer.src = fileURL;
    }
  }
});

playBtn.addEventListener('click', () => {
  videoPlayer.play();
});

stopBtn.addEventListener('click', () => {
  videoPlayer.pause();
  videoPlayer.currentTime = 0; 
});

resumeBtn.addEventListener('click', () => {
  videoPlayer.play();
});
