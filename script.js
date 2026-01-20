// Floating hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 20) + "px";
    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => { heart.remove(); }, 6000);
}
setInterval(createHeart, 400);

// Music Button
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
let isPlaying = false;

musicBtn.addEventListener("click", () => {
    if (!isPlaying) {
        bgMusic.play();
        musicBtn.innerHTML = "⏸";
        isPlaying = true;
    } else {
        bgMusic.pause();
        musicBtn.innerHTML = "🎵";
        isPlaying = false;
    }
});


