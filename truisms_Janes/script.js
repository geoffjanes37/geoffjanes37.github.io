
const videoPlayer = document.getElementById("backgroundVideo");
const textBox = document.getElementById("textBox");

// List of available videos.
const videoSources = [
    "video/truism_2min.mp4",
    "video/truism2_2min540.mp4",
    "video/truism3_2min540.mp4",
    "video/truism4_2min540.mp4",
    "video/truism5_2min540.mp4"
];

// Store playback positions for each video.
let videoTimes = [0, 0, 0, 0, 0];

// The first video starts selected and muted.
let currentVideoIndex = 0;
let isSoundEnabled = false;


// Select a random video that isn't currently playing.
function getRandomIndex() {
    let newIndex;

    do {
        newIndex = Math.floor(Math.random() * videoSources.length);
    } while (newIndex === currentVideoIndex);

    return newIndex;
}


// Switch to a randomly selected video.
function toggleVideo() {

    if (isSoundEnabled === false) {
        videoPlayer.muted = false;
        isSoundEnabled = true;
    }

    // Save the current video's playback position.
    videoTimes[currentVideoIndex] = videoPlayer.currentTime;

    // Select a random video.
    currentVideoIndex = getRandomIndex();

    // Load the newly selected video.
    videoPlayer.src = videoSources[currentVideoIndex];
    videoPlayer.load();

    // Restore the new video's previous playback position.
    videoPlayer.currentTime = videoTimes[currentVideoIndex];

    // Resume playback.
    videoPlayer.play();
}


// Clicking the textbox switches videos.
textBox.addEventListener("click", toggleVideo);


// Keyboard support: Enter or Space switches videos.
textBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleVideo();
    }
});

videoPlayer.loop = true;