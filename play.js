function play() {
    var pausebutton = "<i class=\"fas fa-pause\"></i>";
    if (document.getElementById('ramesh').paused) {
        document.getElementById('ramesh').play();
        document.getElementById('ramu').innerHTML = pausebutton;
    }

    else {
        var playbutton = "<i class=\"fas fa-play\"></i>";
        document.getElementById('ramesh').pause();
        document.getElementById('ramu').innerHTML = playbutton;
    }

}

function jump(amount) {
    var sound = document.getElementById('ramesh');
    sound.currentTime += amount;
}

function stop() {

    document.getElementById('ramesh').pause();
    document.getElementById('ramesh').currentTime = 0
}
