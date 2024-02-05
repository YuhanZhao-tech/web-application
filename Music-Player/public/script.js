import AudioMotionAnalyzer from "https://cdn.skypack.dev/audiomotion-analyzer?min";

const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const playButton = document.getElementById("play");
const body = document.getElementById("body");
const trackList = ["retrowave", "morning", "space", "lofi"];

var audioContext = new AudioContext();
var albumElement;
var currentAlbum = 0;
var song;

export function loadAudio() {
  console.log("Hello");
  switch (currentAlbum) {
    case 0:
      song = new Audio("retrowave.mp3");
      break;
    case 1:
      song = new Audio("morning.mp3");
      break;
    case 2:
      song = new Audio("space.mp3");
      break;
    case 3:
      song = new Audio("lofi.mp3");
      break;
    default:
      song = new Audio("retrowave.mp3");
  }
}

const pauseAll = () => {
  const audioElements = document.getElementsByTagName("audio");
  for (const audioElement of audioElements) {
    // audioElement.pause();
    audioElement.currentTime = audioElement.duration;
  }
  const canvas = document.getElementsByTagName("canvas");
  if (canvas[0]) {

    canvas[0].remove();
  }
  
}

nextButton.addEventListener("click", () => {
  if (currentAlbum < 3) {
    currentAlbum++;
    albumElement = document.getElementById(`album${currentAlbum}`);
    albumElement.style.left = 0;
    body.style.backgroundImage = `url('cover${currentAlbum}.jpg')`;
    pauseAll();
  }
});

prevButton.addEventListener("click", () => {
  if (currentAlbum > 0) {
    albumElement = document.getElementById(`album${currentAlbum}`);
    albumElement.style.left = 400 + "px";
    currentAlbum--;
    body.style.backgroundImage = `url('cover${currentAlbum}.jpg')`;
    pauseAll();
  }
});

// playButton.addEventListener("click", () => {
  

//   if (!song.paused) {
//     const canvas = document.getElementsByTagName("canvas");
//     canvas[0].remove();
//     song.pause();
//   } else {
//     song.play();

//     // Instantiate analyzer
//     var audioContext = new AudioContext();
//     const audioElement = document.getElementById("audio1");
//     const audioMotion6 = new AudioMotionAnalyzer(
//       document.getElementById("audio-motion"),
//       {
//         source: audioElement,
//         height: 400,
//         ansiBands: false,
//         showScaleX: false,
//         bgAlpha: 0,
//         overlay: true,
//         mode: 2,
//         frequencyScale: "log",
//         showPeaks: false,
//         smoothing: 0.7,
//       }
//     );
//   }
// });


playButton.addEventListener("click", () => {
  const audioElement = document.getElementById(`audio${currentAlbum}`);
  if (!audioElement.paused) {

    pauseAll();
    
    

  } else {
    audioElement.play();
    const audioMotion = new AudioMotionAnalyzer(
      document.getElementById("audio-motion"),
      {
        source: audioElement,
        height: 400,
        ansiBands: false,
        showScaleX: false,
        bgAlpha: 0,
        overlay: true,
        mode: 2,
        frequencyScale: "log",
        showPeaks: false,
        smoothing: 0.7
      }
    );

    
  }
})



// Get the audio element

// const audioElement = document.getElementById('audio0');

