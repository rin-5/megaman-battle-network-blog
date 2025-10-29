const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const barrierSound = new Audio('../sounds/Barrier.ogg');
const source = audioCtx.createMediaElementSource(barrierSound);
const gainNode = audioCtx.createGain();

gainNode.gain.value = 5.0;
source.connect(gainNode).connect(audioCtx.destination);

function listenToHomeHeaderMenuIcon() {
    let homeHeaderMenuIcon = document.getElementById("home-header-menu-icon");
    homeHeaderMenuIcon.addEventListener("click", changeColor);

}
function playBarrierSound() {
    barrierSound.currentTime = 0;
    barrierSound.play();
}
listenToHomeHeaderMenuIcon();