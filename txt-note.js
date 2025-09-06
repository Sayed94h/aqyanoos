"use strict";
let onlineTE_FN = '';
const content_ = document.getElementById('content');

function readFile(e) {
    const openFileInput = document.getElementById("openFile");

    openFileInput.click();

    openFileInput.addEventListener('change', function (e) {
        const file_ = e.target.files[0];
        onlineTE_FN = file_.name;
        //  igT = ["pdf", "image", "video", "audio"], igX = [".docx", ".pptx", ".xlsx", ".accdb", ".mdb"]
        if (file_ && !file_.type.includes("pdf") && !file_.type.includes("image") &&
            !file_.type.includes("video") && !file_.type.includes("audio") && !file_.type.includes("officedocument")) {

            document.querySelector(".oTeFnD").innerHTML = onlineTE_FN;

            const reader_ = new FileReader();
            // you can use 'load', 'loadend' as the event type
            reader_.addEventListener('loadend', function (event) {
                content_.value = event.target.result;
                localStorage.setItem("te_content", event.target.result);
                openFileInput.value = ""
            });

            reader_.readAsText(file_);
        } else {
            aqyanoosCustomAlert("Warning", "PDF, Image, Video, Audio, MS Office Files and EXE Files are not supported.")
        }
    });
}

function saveFile() {
    if (!onlineTE_FN) {
        newFileName("save");
    }

    const supportedExtensions = {
        "txt": "text/plain",
        "java": "application/java",
        "js": "application/javascript",
        "json": "application/json",
        "cpp": "application/cpp",
        "css": "text/css",
        "html": "text/html",
        "cshtml": "text/cshtml",
        "csv": "text/csv",
        "php": "application/x-httpd-php",
        "ts": "application/typescript",
    };


    const fNa = onlineTE_FN.split(".");
    let t_p = fNa.length > 1 ? (supportedExtensions[fNa[fNa.length - 1]] || onlineTE_FN) : supportedExtensions["txt"];

    const contentOfFile = content_.value;
    const blob_ = new Blob([contentOfFile], { type: t_p });
    const url_ = URL.createObjectURL(blob_);
    const aEl = document.createElement('a');
    aEl.href = url_;
    aEl.download = onlineTE_FN;
    aEl.click();
}


function newFileName(origin_) {
    const name = promptResult(origin_);
    if (name) {
        onlineTE_FN = name.includes(".") ? name : name + ".txt";

        document.querySelector(".oTeFnD").innerHTML = onlineTE_FN;
    }

    if (origin_ === "save-as" && name) {
        saveFile();
    }

}

function saveAs_() {
    newFileName("save-as");
}

function promptResult(origin_) {
    // Todo: check if the user has provided any extension for the file or not
    let msg = "Please give a name for the new file and also an extension: ";
    let userInput = window.prompt(msg);
    if (userInput) {
        return userInput;
    } else {
        const askAgain = window.confirm("You have not given any name for the new file. Would you like to give a name and an extension?");
        if (askAgain) {
            userInput = window.prompt(msg);
            if (userInput) {
                return userInput;
            }
        }
    }

    if (origin_ === "save-as") {
        aqyanoosCustomAlert("Warning", "Could not save a copy of your file because you did not provide any name. Try again.");
        return null;
    } else {
        aqyanoosCustomAlert("Warning", "You did not provide any name, so we gave a default name(aqyanoos.com.txt)");
        return 'aqyanoos.com.txt';
    }
}

// for backup feature and settings
const defaultSettings = {
    textBold: "",
    textItalic: "",
    textUnderlined: "",
    textColor: "#000000",
    textSize: 16,
    backgroundColor: "#d3d6d6",
    paddingTop: 5,
    paddingRL: 10,
    paddingBottom: 20,
    fontFamily: "Arial",
    customFontFamily: null,
    textDirection: "ltr",
    textAlign: "left",
    lineHeight: 27,
    letterSpacing: 1
};

// on page load
let newSettings = defaultSettings;

if (content_) {
    // add events
    document.querySelector(".teSmIc").onclick = function () {
        document.getElementById("teWordC").innerHTML = content_.value.trim().replaceAll("\n", " ").split(/\s+/).filter(w=> w.length > 0).length;
        document.getElementById("teCharC").innerHTML = content_.value.length;
        togM()
    }

    document.querySelector(".teSmX").onclick = togM;

    document.querySelector(".te-side-menu").onclick = function (e) {
        if (e.target.className.includes("te-side-menu open")) e.target.classList.remove("open")
    }

    document.getElementById("te-open").onclick = function() {togM();readFile();};
     
    document.getElementById("te-save").onclick = function() {togM();saveFile();};
    document.getElementById("te-save-as").onclick = function() {togM();saveAs_();};

    const checkB = ["textBold", "textItalic", "textUnderlined"]
    document.querySelectorAll(".txtStl-xyz").forEach(e => {
        e.addEventListener("click", function (e) {
            if (checkB.includes(e.target.getAttribute("name"))) {
                // e.target.classList.toggle("style-selected");
                let ssT = localStorage.getItem("te_settings") ? JSON.parse(localStorage.getItem("te_settings")) : newSettings;

                ssT[e.target.getAttribute("name")] = e.target.className.includes("style-selected") ? "" : e.target.getAttribute("value")
                backupApply(ssT)
            }
        })
    })

    // do not show the hdr popup on every reload
    if (localStorage.getItem("te_hdr_shown")) {
        document.querySelector(".te-page-header").classList.add("hidden")
    } else {
        document.querySelector(".te-x-hdr").onclick = function () {
            document.querySelector(".te-page-header").classList.add("hidden")
            localStorage.setItem("te_hdr_shown", "y")
        }
    }

    // apply settings on the Editor
    let teSettings = localStorage.getItem("te_settings") ? JSON.parse(localStorage.getItem("te_settings")) : defaultSettings;

    // convert old settings
    if (teSettings["padding"] && Object.keys(teSettings["padding"])) {
        newSettings.textBold = teSettings["textStyle"] === "bold" ? "bold" : "";
        newSettings.textItalic = teSettings["textStyle"] === "italic" ? "italic" : "";

        newSettings["paddingTop"] = teSettings["padding"]["top"];
        newSettings["paddingBottom"] = teSettings["padding"]["bottom"];
        newSettings["paddingRL"] = teSettings["padding"]["rightLeft"];

        for (const i of Object.keys(newSettings)) {
            if (teSettings[i]) {
                newSettings[i] = teSettings[i]
            }
        }

        teSettings = newSettings
        localStorage.setItem("te_settings", teSettings)
    }

    applySettings(teSettings);

    content_.oninput = function (e) {
        localStorage.setItem("te_content", e.target.value);
    };

    content_.value = localStorage.getItem("te_content");

    // populate shortcut settings and add event listener
    const shortSetSlctEl = document.querySelectorAll(".te-short-settings select");
    shortSetSlctEl.forEach(e => {
        handleShortS_(e, teSettings, true)
    })

    const shortSetInEl = document.querySelectorAll(".te-short-settings input");
    shortSetInEl.forEach(e => {
        handleShortS_(e, teSettings, true)
    })

    document.getElementById("te-settings-submit").onclick = function (e) {
        // set settings, store in local storage, apply them and close the settings
        e.preventDefault();

        const form_ = document.getElementById("te-style-form"), submitter_ = e.target;

        const fD = new FormData(form_, submitter_);

        for (const [key, value] of fD) {
            newSettings[key] = value
        }

        const teStl = document.querySelectorAll(".st-checks-b input")
        teStl.forEach(e => {
            newSettings[e.name] = e.checked ? e.id : "";
        })

        // populate settings for short settings
        shortSetSlctEl.forEach(e => {
            handleShortS_(e, newSettings)
        })

        shortSetInEl.forEach(e => {
            handleShortS_(e, newSettings)
        })

        document.querySelector(".te-settings").classList.add("hidden");
        backupApply(newSettings)
    };

    // populate settings to UI
    document.querySelector(".settings-trigger").onclick = function () {
        let backupSettings = localStorage.getItem("te_settings") ? JSON.parse(localStorage.getItem("te_settings")) : defaultSettings;

        const generalInputNames = ["textColor", "backgroundColor", "textSize", "fontFamily", "customFontFamily",
            "paddingTop", "paddingBottom", "paddingRL", "lineHeight", "letterSpacing"];

        const checkRadio = ["textDirection", "textAlign", "textBold", "textItalic", "textUnderlined"]
        document.querySelectorAll(".te-style-form input").forEach(input => {

            if (checkRadio.includes(input.name)) {
                if (backupSettings[input.name] === input.id) {
                    input.checked = true;
                }
            }

            if (generalInputNames.includes(input.name)) {
                input.value = backupSettings[input.name];
            }

        });

        document.querySelectorAll(".te-style-form select").forEach(selectEl => {
            selectEl.value = backupSettings[selectEl.name];
        });


        document.querySelector(".te-settings").classList.remove("hidden");
        togM()
    };

    document.querySelector(".te-clz-set").onclick = function (e) {
        addRemoveClass("te-settings", "hidden", "add")
    };

    document.getElementById("te-settings-cancel").onclick = function (e) {
        addRemoveClass("te-settings", "hidden", "add")
    };

    document.getElementById("te-settings-reset").onclick = function (e) {
        const confirm_ = window.confirm("Are you sure you want to reset the settings?");
        if (confirm_) {
            localStorage.removeItem("te_settings");
            window.location.reload();
        }
    };
}

function togM() { document.querySelector(".te-side-menu").classList.toggle("open"); }
function applySettings(s_) {
    let ff = s_.customFontFamily ? s_.customFontFamily : s_.fontFamily;
    const u_ = s_.textUnderlined ? "underline" : "none";
    const i_ = s_.textItalic ? "italic" : "normal";
    const b_ = s_.textBold ? "bold" : "normal";

    content_.style = "color: " + s_.textColor + ";font-size: " + s_.textSize + "px;background:" + s_.backgroundColor +
        ";font-style:" + i_ + ";padding: " + s_.paddingTop + "px " + s_.paddingRL + "px " + s_.paddingBottom + "px " + s_.paddingRL + "px" +
        ";direction: " + s_.textDirection + ";text-align: " + s_.textAlign + ";font-family: " + ff + ";font-weight:" + b_ +
        ";line-height: " + s_.lineHeight + "px;letter-spacing: " + s_.letterSpacing + "px;text-decoration:" + u_ + ";";

    document.querySelectorAll(".txtStl-xyz").forEach(e => {
        const child_ = e.children;

        for (const c_ of child_) {
            if (s_[c_.getAttribute("name")] === c_.getAttribute("value")) {
                c_.classList.add("style-selected")
            } else {
                c_.classList.remove("style-selected")
            }
        }
    });
}

function handleShortS_(el, tempSettings, addEv) {
    if (el.name) {
        // in what settings obj to save
        // what obj to backup? will it destroy the previous backup?
        el.value = tempSettings[el.name];
        if (addEv) {
            el.addEventListener("change", function (ev) {
                const ss_ = localStorage.getItem("te_settings") ? JSON.parse(localStorage.getItem("te_settings")) : newSettings;
                ss_[ev.target.name] = ev.target.value
                backupApply(ss_)
            })
        }
    }
}

function backupApply(s_) {
    localStorage.setItem("te_settings", JSON.stringify(s_));
    applySettings(s_);
}

function addRemoveClass(elementClass, classToAddRemove, add_) {
    const e = document.querySelector("." + elementClass)
    if (e) {
        if (add_ === "add") {
            e.classList.add(classToAddRemove)
        } else {
            e.classList.remove(classToAddRemove)
        }
    } else {
        aqyanoosCustomAlert("Warning", "Something went wrong, please try again!")
    }
}

function aqyanoosCustomAlert(title, description) {
    if (document.querySelector('.custom-alert')) {
        document.querySelector('.custom-alert').remove();
    }

    const secEl = document.createElement('section');
    secEl.className = "custom-alert";
    secEl.innerHTML = `
    <section class="ca-container">
            <div class="ca-title">${title}</div>
            <hr>
            <div class="ca-description">${description}</div>
            
            <div class="ca-ok" onclick="document.querySelector('.custom-alert').remove()">OK</div>
        </section>
    `;

    document.body.appendChild(secEl);
}
