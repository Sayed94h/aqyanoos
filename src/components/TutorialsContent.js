
export const videoTuto = {
    htmlCode: `
    <header>
        <h1>YouTube Video Player</h1>
        <h2>Create Your Own Video Player</h2>
    </header>
    
    <section class="player-wrapper">
        <section class="video-holder flex flex-center">
            <video src=""></video>
        </section>
    
        <section class="video-controller">
            <div class="controller-container flex flex-col justify-ard">
                <div class="play-bar">
                    <div class="running"></div>
                </div>
                <section class="flex items-center justify-btw">
                    <section class="state-control flex items-center">
                        <span class="material-symbols-rounded icon me-10 play" title="Play">play_arrow</span>
                        <span class="material-symbols-rounded icon me-10 pause hidden" title="Pause">pause</span>
                        <span class="material-symbols-rounded icon me-10 play-next" title="Play Next Video"
                            onclick="handleNext(this)">skip_next</span>
                        <div class="sound flex items-center">
                            <span class="material-symbols-rounded icon mute" title="Mute"
                                onclick="handleMute('m')">volume_up</span>
                            <span class="material-symbols-rounded icon unmute hidden" title="Unmute"
                                onclick="handleMute('um')">volume_off</span>
                            <span class="flex items-center volume-container">
                                <input type="range" min="0" max="1" step="0.05" value="1" class="sound-volume"
                                    title="Volume">
                            </span>
                        </div>
                        <span class="time-stamp ms-10 items-center">
                            <span class="current-time">00:00</span>
                            <span class="separator"> / </span>
                            <span class="total-time">00:00</span>
                        </span>
                    </section>
    
                    <section class="play-options flex items-center">
                        <div class="auto-play auto-play-bar flex items-center justify-end me-10" title="Autoplay"
                            onclick="handleAutoplay(this)">
                            <div class="material-symbols-rounded icon auto-play-switcher">play_arrow</div>
                        </div>
    
                        <span class="material-symbols-rounded icon me-10 grayed-out" onclick="handleSubtitle(this)"
                            title="Subtitle">closed_caption</span>
    
                        <div class="icon-size me-10">
                            <span class="material-symbols-rounded icon" title="Settings"
                                onclick="document.querySelector('.player-options-wrapper').classList.toggle('hidden')">settings</span>
                            <section class="player-options-wrapper hidden">
                                <div>
                                    <div class="flex items-center justify-btw" title="Play Speed">
                                        <div class="flex items-center">
                                            <span class="material-symbols-rounded icon">slow_motion_video</span>
                                            <span class="ms-10">Play Speed</span>
                                        </div>
                                        <div>
                                            <select name="play-speed" id="play-speed" onchange="handlePlaySpeed(this)">
                                                <option value="0.25">0.25</option>
                                                <option value="0.5">0.5</option>
                                                <option value="0.75">0.75</option>
                                                <option value="1" selected>Normal</option>
                                                <option value="1.25">1.25</option>
                                                <option value="1.5">1.5</option>
                                                <option value="1.75">1.75</option>
                                                <option value="2">2</option>
                                            </select>
                                        </div>
                                    </div>
    
                                    <div class="flex items-center justify-btw mt-10" title="Quality">
                                        <div class="flex items-center">
                                            <span class="material-symbols-rounded icon">tune</span>
                                            <span class="ms-10">Quality</span>
                                        </div>
                                        <div>
                                            <select name="quality" id="quality">
                                                <option value="1080">1080p <sup>HD</sup></option>
                                                <option value="720">720p</option>
                                                <option value="480">480p</option>
                                                <option value="360">360p</option>
                                                <option value="240">240p</option>
                                                <option value="auto" selected>Auto(480p)</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <span class="material-symbols-rounded icon me-10" title="Miniplayer"
                            onclick="handlePictureInPicuture()">branding_watermark</span>
                        <span class="material-symbols-rounded icon me-10" title="Theater mode">crop_3_2</span>
                        <span class="material-symbols-rounded icon me-10 fullscreen" title="Full Screen"
                            onclick="handleFullScreen(this)">fullscreen</span>
                        <span class="material-symbols-rounded icon me-10 fullscreen_exit hidden" title="Exit Full Screen"
                            onclick="handleFullScreen()">fullscreen_exit</span>
                    </section>
                </section>
            </div>
        </section>
        <section class="Subtitle-wrapper hidden">
            <section>
                <div>This is an example subtitle</div>
            </section>
        </section>
    </section>
    
    <section class="video-title">
        <h3 class="title">Video Title</h3>
    </section>
                `,
    cssCode: `
    body {
        margin: 0;
        padding: 0;
    }
    
    header {
        padding: 5px 0;
        text-align: center;
        background: #009090;
        color: #fff;
    }
    
    header h1 {
        font-size: 40px;
    }
    
    .material-symbols-rounded {
        font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 48
    }
    
    .icon {
        font-size: 30px;
        color: #fff;
    }
    
    .icon-size {
        width: 30px;
        height: 25px;
        overflow: visible;
    }
    
    .player-wrapper {
        width: 776px;
        height: 437px;
        margin-top: 30px;
        margin-left: 40px;
        color: #fff;
    }
    
    .player-wrapper.full-screen {
        width: 100%;
        height: 100%;
        margin-top: 0;
        margin-left: 0;
        margin: 0;
        padding: 0;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: black;
    }
    
    .video-controller {
        width: 100%;
        height: 70px;
        position: relative;
        top: -70px;
        opacity: 0;
    }
    
    .player-wrapper:hover .video-controller {
        opacity: 1;
        transition: opacity 3s;
    }
    
    .controller-container {
        height: inherit;
    }
    
    .video-holder {
        width: inherit;
        height: inherit;
        background: #000000d9;
    }
    
    video {
        width: auto;
        height: inherit;
    }
    
    .auto-play-bar {
        width: 50px;
        height: 15px;
        border-radius: 10px;
        background: #ffffffa7;
    }
    
    .auto-play-switcher {
        font-size: 20px;
        padding: 1px;
        border-radius: 50%;
        background: #fff;
        color: #000;
    }
    
    .play-bar {
        width: 100%;
        height: 3px;
        background: #ffffffa5;
        cursor: pointer;
    }
    
    .running {
        width: 0%;
        height: inherit;
        background: #f00;
    }
    
    .player-options-wrapper {
        position: relative;
        height: 110px;
        top: -200px;
        left: -160px;
        width: 250px;
        background: #5a56568b;
        padding: 7px;
        border-radius: 10px;
    }
    
    select {
        background: transparent;
        color: #fff;
        border: none;
        outline: none;
    }
    
    select option {
        color: #000;
    }
    
    .video-title {
        margin-top: 20px;
        margin-left: 40px;
        margin-bottom: 90px;
    }
    
    .volume-container {
        display: none !important;
    }
    
    .sound:hover .volume-container {
        display: flex !important;
    }
    
    input[type="range"] {
        width: 50px;
        appearance: none;
        -webkit-appearance: none;
        margin: 0;
        padding: 0;
        background-color: #fff;
        display: block;
        height: 3px;
    }
    
    input[type='range']::-webkit-slider-thumb {
        width: 14px;
        height: 14px;
        appearance: none;
        -webkit-appearance: none;
        background: #fff;
        background-color: #fff;
        border-radius: 9px;
        vertical-align: middle;
    }
    
    .Subtitle-wrapper {
        position: relative;
        top: -150px;
        text-align: center;
    }
    
    sup {
        vertical-align: super;
        font-size: 11px;
    }
    
    
    /* general styles */
    
    .flex {
        display: flex;
    }
    
    .flex-col {
        flex-direction: column;
    }
    
    .items-center {
        align-items: center;
    }
    
    .flex-center {
        justify-content: center;
        align-items: center;
        align-content: center;
    }
    
    .justify-btw {
        justify-content: space-between;
    }
    
    .justify-ard {
        justify-content: space-around;
    }
    
    .justify-end {
        justify-content: flex-end;
    }
    
    .justify-start {
        justify-content: flex-start;
    }
    
    .hidden {
        display: none;
    }
    
    .mt-10 {
        margin-top: 10px;
    }
    
    .ms-10 {
        margin-left: 10px;
    }
    
    .me-10 {
        margin-right: 10px;
    }
    
    .grayed-out {
        color: gray;
    }
    
        `,
    jsCode: `
    'use strict'
    
    const playerWrapper = document.querySelector(".player-wrapper")
    const videoEl = document.querySelector("video")
    const playBtn = document.querySelector(".play")
    const pauseBtn = document.querySelector(".pause")
    const muteBtn = document.querySelector(".mute")
    const unmuteBtn = document.querySelector(".unmute")
    const currentTimeBar = document.querySelector(".running")
    const playBar = document.querySelector(".play-bar")
    const currentTime = document.querySelector(".current-time")
    const totalTime = document.querySelector(".total-time")
    const volume_ = document.querySelector(".sound-volume")
    const videoTitle = document.querySelector(".title")
    const settingsBox = document.querySelector(".player-options-wrapper")
    const playNext_ = document.querySelector(".play-next")
    
    const videoList = [
        "Video 01", // path to the video source
        "Video 02",
        "Video 03",
    ]
    
    const settings = {
        videoIndex: 0,
        autoplay: false,
        playspeedWrapper: null,
        fullscreen: false
    }
    
    videoEl.src = videoList[0] + ".mp4"
    
    function handlePlay() {
        videoEl.play()
        toggleDisplay(playBtn, pauseBtn)
    }
    
    playBtn.addEventListener("click", handlePlay)
    
    pauseBtn.onclick = function () {
        videoEl.pause()
        toggleDisplay(pauseBtn, playBtn)
    }
    
    
    videoEl.onplaying = function () {
        totalTime.innerHTML = videoDuration(videoEl.duration)
    }
    
    videoEl.ontimeupdate = function () {
        currentTime.innerHTML = videoDuration(videoEl.currentTime)
        currentTimeBar.style.width = (videoEl.currentTime / videoEl.duration) * 100 + "%"
    }
    
    function handleMute(m) {
        videoEl.muted = m === "m"
    
        if (m === "m") {
            toggleDisplay(muteBtn, unmuteBtn)
        } else {
            toggleDisplay(unmuteBtn, muteBtn)
        }
    }
    
    volume_.oninput = function () {
        videoEl.volume = volume_.value
    }
    
    function handleNext(el) {
        if (settings.videoIndex < videoList.length - 1) {
            settings.videoIndex++
            videoEl.src = videoList[settings.videoIndex] + '.mp4'
            videoTitle.innerHTML = videoList[settings.videoIndex]
            handlePlay()
    
            if (settings.videoIndex + 1 === videoList.length) {
                el.disabled = true
                el.classList.add('grayed-out')
            }
        }
    }
    
    videoEl.onended = function () {
        if (settings.autoplay) {
            handleNext(playNext_)
        }
    }
    
    function handleAutoplay(el) {
        el.classList.toggle("justify-end")
        let currentText = el.firstElementChild.textContent
        settings.autoplay = !settings.autoplay
    
        if (currentText === "pause") {
            el.firstElementChild.textContent = "play_arrow"
        } else {
            el.firstElementChild.textContent = "pause"
    
        }
    }
    
    function handleSubtitle(el) {
        el.classList.toggle("grayed-out")
        const subtitle_ = document.querySelector(".Subtitle-wrapper")
        subtitle_.classList.toggle("hidden")
    }
    
    function handlePlaySpeed(el) {
        settings.playspeedWrapper = el
        videoEl.playbackRate = el.value
    }
    
    function handlePictureInPicuture() {
        if (document.pictureInPictureElement) {
            document.exitPictureInPicture()
        } else if (document.pictureInPictureEnabled) {
            playerWrapper.classList.add("hidden")
            videoEl.requestPictureInPicture()
        }
    }
    
    videoEl.onleavepictureinpicture = function () {
        playerWrapper.classList.remove("hidden")
    }
    
    function handleFullScreen(f) {
        const fullscreen_exit = document.querySelector(".fullscreen_exit")
        const fullscreen = document.querySelector(".fullscreen")
    
        playerWrapper.classList.toggle('full-screen')
        if (f) {
            toggleDisplay(fullscreen, fullscreen_exit)
            settings.fullscreen = true
        } else {
            toggleDisplay(fullscreen_exit, fullscreen)
            settings.fullscreen = false
        }
    }
    
    function handleSkippingTime(e) {
        let x_ = e.clientX
        const barWidth = playBar.offsetWidth
        if (!settings.fullscreen) {
            x_ = x_ - 40
        }
    
        const c_ = x_ / barWidth
        currentTimeBar.style.width = c_ * 100 + '%'
        videoEl.currentTime = c_ * videoEl.duration
    }
    
    playBar.onclick = handleSkippingTime
    
    function toggleDisplay(hide, display) {
        hide.classList.add("hidden")
        display.classList.remove("hidden")
    }
    
    function videoDuration(d) {
        const sec = Math.round(d % 60)
        const min = Math.round(d / 60)
        const hr = min > 59 ? Math.round(min / 60) : 0
    
        return hr > 0 ? hr + ' : ' + min + ' : ' + sec : min + ' : ' + sec
    }
    
        `,
    info: `
    Paste the HTML code inside "body element", CSS code inside "style element" or external css file,
                            javascript code inside "script element" or external js file.
                            If you use external files, then you need to link your files to your html file by using link tag
                            for css and "script element" for javascript with the right "href" and "src" values. <strong>Do not
                                forget to import the Google Material icon link inside
                                the head element!</strong>
    `
};

export const tEditor = {
    htmlCode: `
            
<section>
    <header>
        <div class="mrgl-8 bold">Text Editor</div>
        <button id="open" class="mrgl-8">Open</button>
        <button id="save" class="mrgl-8">Save</button>
        <button id="new-file" class="mrgl-8">New File</button>
        <div class="mrgl-8"><a href="/">Home</a></div>
    </header>
    <section>
        <textarea name="content" id="content"></textarea>
    </section>
</section>

    `,
    cssCode: `
    body {
        margin: 0;
        padding: 0;
        font-size: 16px;
        overflow: hidden;
    }
    
    header {
        display: flex;
        flex-direction: row;
        align-items: center;
        background: teal;
        width: 100%;
        overflow: visible;
        height: 60px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 60px;
    }
    
    header * {
        color: white;
    }
    
    button {
        background-color: rgba(0, 0, 0, 0.5);
        outline: none;
        border: none;
        padding: 5px 10px;
        font-size: 15px;
        cursor: pointer;
    }
    
    textarea {
        width: calc(100% - 10px);
        height: calc(100vh - 73px);
        padding: 5px;
        outline: none;
        border: none;
        resize: none;
        position: absolute;
        top: 73px;
    }
    
    .hidden {
        display: none;
    }
    
    .mrgl-8 {
        margin-left: 8px;
    }
    
    .bold {
        font-weight: bold;
    }
    `,
    jsCode: `
    
const openBtn = document.getElementById('open');
const saveBtn = document.getElementById('save');
const newFileBtn = document.getElementById('new-file');
const content_ = document.getElementById('content');

let fileName = '';

function readFile (e)
{
    const openFileInput = document.getElementById("openFile");

    openFileInput.click();

    openFileInput.addEventListener('change', function (e)
    {
        const file_ = e.target.files[0];

        fileName = file_.name;

        const reader_ = new FileReader();
        // you can use 'load', 'loadend' as the event type
        reader_.addEventListener('loadend', function (event)
        {
            content_.value = event.target.result;
        });

        reader_.readAsText(file_);

    });
}

function saveFile (e)
{
    if (!fileName)
    {
        newFileName();
    }

    const contentOfFile = content_.value;
    const blob_ = new Blob([contentOfFile], {type: 'text/plain'});
    const url_ = URL.createObjectURL(blob_);
    const aEl = document.createElement('a');
    aEl.href = url_;
    aEl.download = fileName;
    aEl.click();
}

function newFileName (e)
{
    fileName = promptResult();
}

function promptResult ()
{
    // Todo: check if the user has provided any extension for the file or not
    let msg = "Please give a name for the new file and also an extension for it: ";
    let userInput = prompt(msg);
    if (userInput)
    {
        return userInput;
    }

    const askAgian = confirm("You have not given any name for the new file. Would you like to give a name and extension?");
    if (askAgian)
    {
        userInput = prompt(msg);
    if (userInput)
    {
        return userInput;
    }
    }
    alert("You have not given any name and extension for your file, so the default name is Aqyanoos and the default extension is .txt");

    return 'Aqyanoos.txt';
}

newFileBtn.onclick = newFileName;

openBtn.addEventListener('click', readFile);

saveBtn.addEventListener('click', saveFile);

    `,
    info: `
    Paste the HTML code inside "body element", CSS code inside "style element" or external css file,
    javascript code inside "script element" or external js file.
    If you use external files, then you need to link your files to your html file by using link tag
    for css and "script element" for javascript with the right "href" and "src" values. For this project
    there is also a demo or live version
    that you can see and test <a href="/online-text-editor-online-code-editor-online-notepad"
        class="fc-blue">here</a>.
    `
};

export const dV_ = {
    htmlCode: `\n<section id="svg-path">\n\t<section id="card"></section>\n</section>\n`,
    cssCode: `
    section#svg-path {
        margin: 100px;
    }
    
    svg {
        border: 1px solid rgb(48, 46, 46);
    }
    
    path {
        fill: rgba(47, 165, 203, 0.1);
        stroke-width: 2.5;
        stroke: rgb(47, 164, 203);
    }
    
    g#graph-points {
        fill: rgba(33, 165, 175, 0);
        stroke-width: 1;
        stroke: none;
    }
    
    g#graph-lines {
        fill: rgba(53, 55, 58, 0.5);
        stroke: rgb(188, 198, 223);
    }
    
    g#graph-texts {
        fill: black;
        stroke-width: 1;
        stroke: none;
        text-anchor: middle;
        font-size: 20px;
        font-family: 'Times New Roman', Times, serif;
    
    }
    
    line {
        stroke: rgb(188, 197, 219);
    }
    
    #card {
        position: relative;
        width: 150px;
        height: 50px;
        padding: 3px;
        border-radius: 5px;
        font-size: 20px;
        font-weight: bold;
        background-color: rgba(255, 255, 255, 0.932);
        box-shadow: 1px 5px 5px gray;
        color: rgba(0, 0, 0, 0.767);
        display: none;
    }

    `,
    jsCode: `
    const svgPathParent = document.getElementById("svg-path");
    const card = document.getElementById("card");
    //test arrays: uncomment the array you would like to use and comment the rest otherwise you will get error
    //const dataPath2 = [60, 20, 30, 50, 14, 22, 38, 54, 74, 98, 130, 84, 60, 96, 120, 156, 180, 98, 138, 100, 160, 90, 76, 30, 78, 118, 132, 88, 44];
    //const dataPath2 = [180, 60, 90, 150, 42, 66, 114, 162, 222, 294, 390, 252, 180, 288, 360, 468, 540, 294, 414, 300, 480, 270, 228, 90, 234, 354, 396, 264, 132];
    const dataPath2 = [120, 40, 60, 100, 28, 44, 76, 108, 148, 196, 260, 168, 120, 192, 240, 312, 360, 196, 276, 200, 320, 180, 152, 60, 156, 236, 264, 176, 88];
    
    
    function dataVisualization(array, frequency, linecount) {
        const svgElment = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const svgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        const days = array.length;
        const maxVal = Math.max(...array);
        const widthSvg = days * frequency;
        const heightSvg = maxVal + 30;
        const graphLine = maxVal / (linecount - 1);
    
        svgElment.setAttributeNS(null, "width", widthSvg);
        svgElment.setAttributeNS(null, "height", heightSvg);
    
        // g tags for grouping other tags
        const gElCircle = document.createElementNS("http://www.w3.org/2000/svg", "g");
        gElCircle.id = "graph-points";
    
        const gElLine = document.createElementNS("http://www.w3.org/2000/svg", "g");
        gElLine.id = "graph-lines";
    
        const gElText = document.createElementNS("http://www.w3.org/2000/svg", "g");
        gElText.id = "graph-texts";
    
        // base line
        let pathString = "M" + widthSvg + " " + heightSvg + " L" + 0 + " " + widthSvg;
    
        for (let d = 0; d < days; d++) {
            const yValue = heightSvg - dataPath2[d], xValue = d * frequency;
            const newString = " L" + xValue + " " + yValue;
            pathString += newString;
    
            const circleEl = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    
            circleEl.setAttributeNS(null, "cx", xValue);
            circleEl.setAttributeNS(null, "cy", yValue);
            circleEl.setAttributeNS(null, "r", "8");
            circleEl.addEventListener("mouseover", (e) => {`+
                "card.style = `top:${yValue}px; left:${xValue - 75}px; display: block;`;\n" +
                "// generate date\n" +
                'const date_ = new Date(Date.now() - ((days - d) * (24 * 60 * 60 * 1000))).toJSON().split("T")[0];\n' +
                'card.innerHTML = `Views: ${dataPath2[d]} <br>Date: ${date_}`;});\n' +
                'gElCircle.appendChild(circleEl);}\n' + `
    
        const ends = heightSvg - dataPath2[days - 1];
        pathString += " L" + widthSvg + " " + ends;
        pathString += " Z";
        svgPath.setAttributeNS(null, "d", pathString);
    
        // lines and texts
        for (let l = 0; l < linecount; l++) {
            const lineEl = document.createElementNS("http://www.w3.org/2000/svg", "line");
            const textEl = document.createElementNS("http://www.w3.org/2000/svg", "text");
            const yPosition = heightSvg - (l * graphLine);
            lineEl.setAttributeNS(null, "x1", "0");
            lineEl.setAttributeNS(null, "y1", yPosition);
            lineEl.setAttributeNS(null, "x2", widthSvg);
            lineEl.setAttributeNS(null, "y2", yPosition);
            gElLine.appendChild(lineEl);
    
            const txt = l * graphLine;
            textEl.setAttributeNS(null, "dx", "-20");
            textEl.setAttributeNS(null, "x", widthSvg);
            textEl.setAttributeNS(null, "y", yPosition);
            textEl.textContent = txt;
    
            gElText.appendChild(textEl);
    
        }
    
        svgElment.appendChild(gElCircle);
        svgElment.appendChild(gElLine);
        svgElment.appendChild(gElText);
        svgElment.appendChild(svgPath);
    
        // base parent or graph container
        svgPathParent.appendChild(svgElment);
    }
    
    dataVisualization(dataPath2, 50, 3);
    `,
    info: `Paste the HTML code inside "body element", CSS code inside "style element" or external css file,
    javascript code inside "script element" or external js file.
    If you use external files, then you need to link your files to your html file by using link tag
    for css and "script element" for javascript with the right "href" and "src" values.`
};

export const hToD = {
    htmlCode: `
<section>
    <input type="text" placeholder="Please enter hex number" onchange="convertToDecimal(this.value)">
    <button onclick="convertToDecimal(document.querySelector('input').value)">Submit</button>
    <div>
        <h3>Decimal</h3>
        <div id="result"></div>
    </div>
</section>

    `,
    cssCode: `/*No CSS*/`,
    jsCode: `
function convertToDecimal (hexAsText)
{
    const resultEl = document.getElementById("result");

    let decimalNumber = null;
    if (hexAsText)
    {
	    let base = "0x" + hexAsText;
	    decimalNumber = Number(base);
	    if (!decimalNumber)
        {
            alert("Please enter values between 0 - 9 and A-F");
            return;
        }
    }

    resultEl.textContent = decimalNumber;
}
    `,
    info: `
    Paste the HTML code inside "body element", CSS code inside "style element" or external css file,
                    javascript code inside "script element" or external js file.
                    If you use external files, then you need to link your files to your html file by using link tag
                    for css and "script element" for javascript with the right "href" and "src" values. For this project
                    there is also a demo or live version
                    that you can see and test <a href="/how-to-convert-hex-to-decimal"
                        class="fc-blue">here</a>.
    `
};