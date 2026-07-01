const video = document.getElementById("myVideo");

const totalVideos = 6;

let currentVideo = 1;

function playVideo() {
    video.src = `videos/HAWC${currentVideo}.mp4`;

    video.load();

    video.play().catch(error => {
        console.log("Autoplay prevented:", error);
    });
}

playVideo();

video.addEventListener("ended", () => {

    currentVideo++;
    
    if (currentVideo > totalVideos) {
        currentVideo = 1;
    }

    playVideo();

});