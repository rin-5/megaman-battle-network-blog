const AUDIO_CTX = new (window.AudioContext || window.webkitAudioContext)();
const BARRIER_SOUND = new Audio('../sounds/Barrier.ogg');
const SOURCE = AUDIO_CTX.createMediaElementSource(BARRIER_SOUND);
const GAIN_NODE = AUDIO_CTX.createGain();

GAIN_NODE.gain.value = 5.0;
SOURCE.connect(GAIN_NODE).connect(AUDIO_CTX.destination);

function listenToHomeHeaderMenuIcon() {
    let homeHeaderMenuIcon = document.getElementById("home-header-menu-icon");
    homeHeaderMenuIcon.addEventListener("click", playBarrierSound);

}
function playBarrierSound() {
    if (AUDIO_CTX.state === "suspended") {
        AUDIO_CTX.resume();
    }
    BARRIER_SOUND.currentTime = 0;
    BARRIER_SOUND.play();
}
listenToHomeHeaderMenuIcon();