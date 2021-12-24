import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onTimeUpdate = function(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds))
}

player.on('timeupdate', throttle(onTimeUpdate, 1000));

let pausedTime = localStorage.getItem("videoplayer-current-time");
    
if (pausedTime) {
    player.setCurrentTime(pausedTime).then(function (seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;

            default:
                // some other error occurred
                break;
        }
    });
};
