let htmlCode = '<!DOCTYPE html>\n<html lang="en">';
htmlCode += `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="easy-qrcode.js"></script>
    <title>QR Code Generator Website</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-size: 16px;
            background: #fff;
            font-family: Verdana, Tahoma, Arial;
        }

        .container {
            position: relative;
            width: 70%;
            right: 15%;
            left: 15%;
            top: 15px;
            box-shadow: 0 0 5px 8px #ddd;
            padding: 10px 15px;
            border-radius: 10px;
            background: #eee;
            margin-bottom: 70px;
        }

        #qrcode {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .flex {
            display: flex;
        }

        .mt-10 {
            margin-top: 10px;
        }

        #qrcodeText {
            width: 100%;
            height: 30px;
            min-height: 30px;
            resize: vertical;
            margin-top: 5px;
        }

        label {
            font-weight: bold;
        }

        input[type='number'] {
            width: 100px;
            text-align: center;
        }

        input[type='checkbox'] {
            width: 20px;
            height: 20px;
        }

        .info {
            background: #e99d04;
            color: #fff;
            font-style: italic;
            padding: 5px;
        }

        .btn {
            padding: 7px 20px;
            background: #059505;
            color: #fff;
            outline: none;
            border: none;
            box-shadow: 0 0 2px 3px #068506;
            border-radius: 5px;
            cursor: pointer;
            width: 100%;
            font-size: 18px;
        }

        #download-btn {
            background: #0084ff;
            box-shadow: 0 0 2px 3px #0274df;
        }

        #generate-btn {
            margin-top: 20px;
            margin-bottom: 10px;
        }

        .italic {
            font-style: italic;
        }

        .hidden {
            display: none;
        }

    </style>
</head>

<body>
    <section class="container">
        <header>
            <h1>QR Code Generator Website</h1>
        </header>
        <div>
            <div id="qrcode">
                <img src="test-qr-code.png" alt="QR-Code-Generator">
            </div>
            <div class="hidden mt-10 download-btn-container">
                <div class="mt-10 italic">Your QR Code is ready to be downloaded.</div>
                <button id="download-btn" class="btn mt-10">Download</button>
            </div>

            <section>
                <h2>Customize Your QR Code</h2>
                <form action="#" id="qrcode-settings">
                    <div>
                        <label for="qrcodeText">Enter Your Text</label>
                    </div>
                    <textarea id="qrcodeText" name="text">https://aqyanoos.com</textarea>

                    <div class="mt-10">
                        <label for="bgColor">Background Color</label>
                        <input type="color" id="bgColor" name="bgColor" value="#ffffff">
                    </div>

                    <div class="mt-10">
                        <label for="txtColor">Text Color</label>
                        <input type="color" id="txtColor" name="txtColor" value="#000000">
                    </div>

                    <div class="mt-10">
                        <label for="qrcodeWidth">QR Code Width and Height</label>
                        <input type="number" id="qrcodeWidth" name="qrcodeWidth" value="256">
                    </div>

                    <div class="mt-10">
                        <label for="customLogo">Your Logo</label>
                        <input type="file" id="customLogo" name="customLogo">
                    </div>

                    <div class="mt-10">
                        <label for="logoWidth">Logo Width and Height</label>
                        <input type="number" id="logoWidth" name="logoWidth" value="70">
                    </div>

                    <div class="flex mt-10">
                        <label for="isTransparent">Logo Transparent: </label>
                        <input type="checkbox" id="isTransparent" name="isTransparent" checked>
                    </div>

                    <p class="info">
                        If Checked, the logo background color will not have any effect.
                    </p>
                    <div class="mt-10">
                        <label for="logoBg">Logo Background </label>
                        <input type="color" id="logoBg" name="logoBg">
                    </div>

                    <div class="mt-10">
                        <button id="generate-btn" type="submit" class="btn">Generate</button>
                    </div>
                </form>

            </section>
        </div>
    </section>`;
htmlCode += '<script src="script.js"></script>\n</body>\n</html>';
const jsCode = `

const qrCodeSettings = document.getElementById("qrcode-settings"),
    qrcodeContainer = document.getElementById("qrcode"),
    generateBtn = document.getElementById("generate-btn"),
    downloadBtn = document.getElementById("download-btn"),
    downloadBtnContainer = document.querySelector(".download-btn-container");

qrCodeSettings.onsubmit = function (e) {
    e.preventDefault()

    qrcodeContainer.innerHTML = ""
    const formData_ = new FormData(qrCodeSettings, generateBtn)

    const userInputs = {}

    for (const [key, value] of formData_) {
        userInputs[key] = value
    }

    const settings = {
        text: userInputs.text,
        width: userInputs.qrcodeWidth,
        height: userInputs.qrcodeWidth,
        typeNumber: 4,
        colorDark: userInputs.txtColor,
        colorLight: userInputs.bgColor,
        quietZone: 10,
        quietZoneColor: userInputs.bgColor,
    }

    if (userInputs.customLogo.name) {
        settings.logo = URL.createObjectURL(userInputs.customLogo)
        settings.logoBackgroundColor = userInputs.logoBg
        settings.logoBackgroundTransparent = userInputs.isTransparent
        settings.logoWidth = userInputs.logoWidth
        settings.logoHeight = userInputs.logoWidth
    }
    console.log("user inputs: ", userInputs, settings)
    const qrcode_ = new QRCode(qrcodeContainer, settings)
    downloadBtnContainer.classList.remove("hidden")
}

downloadBtn.onclick = function(){
    const qrcodeImage = document.querySelector("#qrcode canvas")
    const data = qrcodeImage.toDataURL("image/png"),
    aEl = document.createElement("a")
    aEl.href = data
    aEl.download = new Date().toLocaleDateString() + ".png"

    aEl.click()
}`;
const injectContent = (e, target) => {
    const t = e.target || target;
    const rawCodeHolder = document.querySelector(".raw-code");

    const currents_ = document.querySelector(".c");
    currents_.classList.remove("c");

    t.classList.add("c");

    switch (t.id) {
        case "html-btn":
            rawCodeHolder.value = htmlCode.trim();
            break;
        case "js-btn":
            rawCodeHolder.value = jsCode;
            break;
        default:
            break;
    }
};

injectContent(false, document.getElementById("html-btn"))

// for demo
const qrCodeSettings = document.getElementById("qrcode-settings"),
    qrcodeContainer = document.getElementById("qrcode"),
    generateBtn = document.getElementById("generate-btn"),
    downloadBtn = document.getElementById("download-btn"),
    downloadBtnContainer = document.querySelector(".download-btn-container");

qrCodeSettings.onsubmit = function (e) {
    e.preventDefault()

    qrcodeContainer.innerHTML = ""
    const formData_ = new FormData(qrCodeSettings, generateBtn)

    const userInputs = {}

    for (const [key, value] of formData_) {
        userInputs[key] = value
    }

    const settings = {
        text: userInputs.text,
        width: userInputs.qrcodeWidth,
        height: userInputs.qrcodeWidth,
        typeNumber: 4,
        colorDark: userInputs.txtColor,
        colorLight: userInputs.bgColor,
        quietZone: 10,
        quietZoneColor: userInputs.bgColor,
    }

    if (userInputs.customLogo.name) {
        settings.logo = URL.createObjectURL(userInputs.customLogo)
        settings.logoBackgroundColor = userInputs.logoBg
        settings.logoBackgroundTransparent = userInputs.isTransparent
        settings.logoWidth = userInputs.logoWidth
        settings.logoHeight = userInputs.logoWidth
    }
    // console.log("user inputs: ", userInputs, settings)
    const qrcode_ = new QRCode(qrcodeContainer, settings)
    downloadBtnContainer.classList.remove("hidden")
}

downloadBtn.onclick = function(){
    const qrcodeImage = document.querySelector("#qrcode canvas")
    const data = qrcodeImage.toDataURL("image/png"),
    aEl = document.createElement("a")
    aEl.href = data
    aEl.download = new Date().toLocaleDateString() + ".png"

    aEl.click()
}