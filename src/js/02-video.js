import throttle from "lodash.throttle";

   
const iframe = document.querySelector('#vimeo-player');

const player = new Vimeo.Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

const listener = function (data) {
localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
console.log(localStorage)
}

player.on('timeupdate', throttle(listener, 1000))

const theme = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(theme)

console.log(localStorage)