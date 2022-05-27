let song

function preload() {
    song = loadSound('everglow.mp3')
}

function setup() {
    createCavas(windowWidth, windowHeight);
}

function draw() {
    background(0)
}

function mouseClicked() {
    if (song.isPlaying()) {
        song.pause()
    } else {
        song.play()
    }
}