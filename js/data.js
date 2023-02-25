let search = new URLSearchParams(window.location.search)
let i = search.get(`i`);
let isPlaying = false;
let albums = [
    {
        img: [`bvb_1`, `bvb_2`, `bvb_3`],
        name_of: `Black Veil Brides`,
        titles2: [`Goodbye Agony`, `Scarlet Cross`, `Born Again`, `Torch`, `Rebel Love Song`, `In The End`, `Walk Away`, `Coffin`, `Fallen Angels`],
        times: [`04:08`, `03:37`, `03:39`, `03:37`, `03:57`, `03:48`, `05:57`, `04:15`, `03:44`]

    },

    {
        img: [`ab_1`, `ab_2`],
        name_of: `Andy Black`,
        titles2: [`We Don't Have To Dance`, `Paint It Black`, `Ghost of Ohio`, `Broken Pieces`, `Feast or Famine`, `Ribcage`],
        times: [`03:13`, `04:12`, `03:25`, `03:35`, `03:42`, `03:51`]
    },

    {
        img: [`skz_1`, `skz_2`, `skz_3`],
        name_of: `Stray Kids`,
        titles2: [`Wolfgang`, `Venom`, `God's Menu`, `Super Board`, `Back Door`, `Thunderous`, `Silent Cry`, `Sorry, I Love You`, `Red Lights`],
        times: [`03:10`, `03:14`, `02:47`, `03:06`, `03:09`, `03:03`, `03:29`, `02:57`, `03:09`]

    },

    {
        img: [`r_1`, `r_2`, `r_3`],
        name_of: `Александр Рыбак`,
        titles2: [`Позади`, `Let The Music Guide You`, `Люблю тебя, как раньше`, `Leave Me Alone`, `Небеса Европы`, `Into A Fantasy`, `Magic`, `Котик`, `That's How You Write A Song`],
        times: [`03:37`, `03:02`, `04:05`, `03:30`, `03:38`, `03:28`, `03:52`, `03:37`, `03:00`]
    }
]
if (i > albums.length) { document.querySelector(`#glav`).innerHTML += `Такой альбом не найден` }
for (let j = 0; j < albums[i].img.length; j++) {
    if (j != 0) {
        document.querySelector(`#glav`).innerHTML +=
            `
        <hr><div class="div0">
                <div class="div1">
                    <img src="assets/${albums[i].img[j]}.jpg" width="300" height="300">
                    <div class="div2">
                        <h2>Топ №${j + 1}:</h2>
                        <div>
                            <h3>○ ${albums[i].titles2[0]}</h3>
                            <h3>○ ${albums[i].titles2[1]}</h3>
                            <h3>○ ${albums[i].titles2[2]}</h3>
                        </div>
                    </div>
                </div>
                <div class="div3">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <button class="button play"><img src="assets/play.png" width="50" height="50"></button>
                            <button class="button pause d-none"><img src="assets/pause.png" width="50" height="50"></button>
                            <div class="div4">
                                <h5 class="mb-1">${albums[i].titles2[0]}</h5>
                                <small>${albums[i].name_of}</small>
                                <audio class="audio" src="music/${albums[i].titles2[0]}.mp3"></audio>
                                <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 0%"></div>
                                </div>
                            </div>
                            <p class="time">${albums[i].times[0]}</p>
                        </li>
                        <li class="list-group-item">
                        <button class="button play"><img src="assets/play.png" width="50" height="50"></button>
                        <button class="button pause d-none"><img src="assets/pause.png" width="50" height="50"></button>
                            <div class="div4">
                                <h5 class="mb-1">${albums[i].titles2[1]}</h5>
                                <small>${albums[i].name_of}</small>
                                <audio class="audio" src="music/${albums[i].titles2[1]}.mp3"></audio>
                                <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 0%"></div>
                                </div>
                            </div>
                            <p class="time">${albums[i].times[1]}</p>
                        </li>
                        <li class="list-group-item">
                        <button class="button play"><img src="assets/play.png" width="50" height="50"></button>
                        <button class="button pause d-none"><img src="assets/pause.png" width="50" height="50"></button>
                            <div class="div4">
                                <h5 class="mb-1">${albums[i].titles2[2]}</h5>
                                <small>${albums[i].name_of}</small>
                                <audio class="audio" src="music/${albums[i].titles2[2]}.mp3"></audio>
                                <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 0%"></div>
                                </div>
                            </div>
                            <p class="time">${albums[i].times[2]}</p>
                        </li>
                    </ul>
                </div>
            </div>
        `;
    } else {
        document.querySelector(`#glav`).innerHTML +=
            `   <div class="div0">
                <div class="div1">
                    <img src="assets/${albums[i].img[j]}.jpg" width="300" height="300">
                    <div class="div2">
                        <h2>Топ №${j + 1}:</h2>
                        <div>
                            <h3>○ ${albums[i].titles2[0]}</h3>
                            <h3>○ ${albums[i].titles2[1]}</h3>
                            <h3>○ ${albums[i].titles2[2]}</h3>
                        </div>
                    </div>
                </div>
                <div class="div3">
                    <ul class="list-group">
                        <li class="list-group-item">
                        <button class="button play"><img src="assets/play.png" width="50" height="50"></button>
                        <button class="button pause d-none"><img src="assets/pause.png" width="50" height="50"></button>
                            <div class="div4">
                                <h5 class="mb-1">${albums[i].titles2[0]}</h5>
                                <small>${albums[i].name_of}</small>
                                <audio class="audio" src="music/${albums[i].titles2[0]}.mp3"></audio>
                                <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 0%"></div>
                                </div>
                            </div>
                            <p class="time">${albums[i].times[0]}</p>
                        </li>
                        <li class="list-group-item">
                        <button class="button play"><img src="assets/play.png" width="50" height="50"></button>
                        <button class="button pause d-none"><img src="assets/pause.png" width="50" height="50"></button>
                            <div class="div4">
                                <h5 class="mb-1">${albums[i].titles2[1]}</h5>
                                <small>${albums[i].name_of}</small>
                                <audio class="audio" src="music/${albums[i].titles2[1]}.mp3"></audio>
                                <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 0%"></div>
                                </div>
                            </div>
                            <p class="time">${albums[i].times[1]}</p>
                        </li>
                        <li class="list-group-item">
                        <button class="button play"><img src="assets/play.png" width="50" height="50"></button>
                        <button class="button pause d-none"><img src="assets/pause.png" width="50" height="50"></button>
                            <div class="div4">
                                <h5 class="mb-1">${albums[i].titles2[2]}</h5>
                                <small>${albums[i].name_of}</small>
                                <audio class="audio" src="music/${albums[i].titles2[2]}.mp3"></audio>
                                <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 0%"></div>
                                </div>
                            </div>
                            <p class="time">${albums[i].times[2]}</p>
                        </li>
                    </ul>
                </div>
            </div>
        `;

    } albums[i].titles2.splice(0, 3);
    albums[i].times.splice(0, 3);
};

document.querySelector(`#h1`).innerHTML += albums[i].name_of;


function setupAudio() {
    let trackNodes = document.querySelectorAll(`.list-group-item`);
    for (let i = 0; i < trackNodes.length; i++) {
        let node = trackNodes[i];
        let timeNode = node.querySelector(`.time`)
        let imgPause = node.querySelector(`.pause`);
        let imgPlay = node.querySelector(`.play`);
        let progressBar = node.querySelector(`.progress-bar`);
        let audio = node.querySelector(`.audio`);
        let isPlaying = false;
        node.addEventListener(`click`, function () {
            if (isPlaying) {
                isPlaying = false;
                audio.pause();
                imgPause.classList.add(`d-none`);
                imgPlay.classList.remove(`d-none`);
            } else {
                isPlaying = true;
                audio.play();
                imgPause.classList.remove(`d-none`);
                imgPlay.classList.add(`d-none`);
                updateProgress();
            };
            function updateProgress() {
                let time = getTime(audio.currentTime);
                if (timeNode.innerHTML != time) {
                    timeNode.innerHTML = time;
                    progressBar.style.width = audio.currentTime * 100 / audio.duration + `%`;
                }
                if (isPlaying) {
                    requestAnimationFrame(updateProgress);
                }

            }
        });
    };

};
setupAudio();
function getTime(time) {
    let currentSeconds = Math.floor(time);
    let minutes = Math.floor(currentSeconds / 60);
    let seconds = Math.floor(currentSeconds % 60);

    if (minutes < 10) {
        minutes = `0` + minutes;
    };
    if (seconds < 10) {
        seconds = `0` + seconds;
    };
    return `${minutes}:${seconds}`
}
