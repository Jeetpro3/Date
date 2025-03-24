function moveRandomEl(elm) {
    elm.style.position = "absolute"; // Fixed "postion" to "position"
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%"; // Changed top to left for random movement
}

const moveRandom = document.querySelector('#move-ramdom'); // Keep ID same as HTML

moveRandom.addEventListener('mouseenter', function(e) { // Changed "mousecenter" to "mouseenter"
    moveRandomEl(e.target);
});
