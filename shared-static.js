function toggleMenu() { document.querySelector(".menu-wrapper").classList.toggle("open"); }
document.querySelector(".menu-icon") &&
    (document.querySelectorAll(".menu-icon").forEach(mi => { mi.onclick = toggleMenu }),
        document.querySelector(".side-menu-close-btn").onclick = toggleMenu);

document.querySelector(".menu-wrapper") && 
(document.querySelector(".menu-wrapper").onclick = function (e) { if (e.target.className.includes("menu-wrapper open")) e.target.classList.remove("open") });


if (window.location.href) {
    const p_ = ["CSS-Selectors", "MongoDB-in-ASP", "Support", "About", "Contact", "Services", "Make-QR-Code-Generator",
        "Host-React-App", "Expenses-Manager", "Files", "Convert-Decimal", "Convert-Hex",
        "Font-Generator", "QR-Code-Generator", "Math-Exercises", "Response-Code-List", "Painting-App", "Color-Tools",
        "Notepad-App", "Developer-Job", "Dark-Web", "Cryptocurrency", "Detox-Smoothie", "Resume-Builder"]
    let cP = document.querySelector(".SourceCode_page")

    if (cP) {
        for (let i = 0; i < p_.length; i++) {
            if (window.location.href.includes(p_[i].toLowerCase())) {
                cP.innerHTML = p_[i] === "Expenses-Manager" ? "Money Manager" : p_[i].replaceAll("-", " ")
                cP.href = window.location.href
                cP.classList.add("current")
                break;
            }
        }
    }

    if (document.querySelector(".art-share")) {
        document.querySelectorAll(".art-share").forEach(s=> {
            s.onclick = function () {
            if (navigator.share) {
                navigator.share({
                    title: document.title,
                    text: 'Check this out!',
                    url: window.location.href,
                }).catch(err => console.log('Error sharing:', err));
            } else {
                navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
                    if (result.state === "granted" || result.state === "prompt") {
                        navigator.clipboard.writeText(window.location.href).then(() => {
                            aqyanoosCustomAlert("Copied Successfully", "The page link copied. You can share / send it by pasting on WhatsApp, Messenger, Email,...");
                        }, () => {
                            console.log("*-*-*-Copy failed, please try again!")
                        });
                    }
                });
            }
        }
        })
    }

    // login / logout handler
    document.querySelectorAll(".ic-login").forEach(ic => {
        ic.onclick = function () {
            document.querySelector(".login-menu").classList.toggle("hidden")
        }
    })

    if (document.getElementById("subLogBtn")) {
        document.getElementById("subLogBtn").onclick = function () {
            // login
            const fD = {
                email: document.getElementById("logEmail").value,
                pas: document.getElementById("logPas").value,
                date: dateNum()
            }
            console.log("log in")
            // hide Login and display Log out
            document.getElementById("log-out").classList.remove("hidden")
            document.getElementById("login-btn").classList.add("hidden")
            // Set user name and ID
            setNameLm("Your Name", 123)
            // redirect to the prev page or to the profile page if the user needs to reset the pas: do this based the respond from backend
            if ("PasRes") {
                window.location.href = "/profile?id=" + 123;
            } else {
                if (document.referrer) {
                    window.location.href = document.referrer;
                } else {
                    window.location.href = "/"
                }
            }
        }
    }

    function setNameLm(n_, i_) {
        document.getElementById("name-login").innerHTML = '<a href="/profile?id=' + i_ + '" rel="nofollow">' + n_ + '</a>';
    }


    if (document.getElementById("log-out")) {
        document.getElementById("log-out").onclick = function () {
            // log out the user
            // hide login menu
            console.log("log out")
        }
    }

    document.querySelectorAll(".togLer").forEach(tog => {
        tog.onclick = function (e) {
            document.querySelector("." + e.target.getAttribute("eP")).classList.toggle("hidden")
        }
    })


    // process Req
    const btns = document.querySelectorAll(".sendMsgBtn")
    btns.forEach(b => {
        b.onclick = function (e) {
            e.preventDefault();

            const uIn = bdyObj(e.target.parentElement.parentElement, b)
            uIn["cDate"] = dateNum()

            const res_ = reqH("/api/contact", "POST", uIn, "*");
            res_.then(msg => {
                console.log("Result: ", msg)
                setErr(msg)
            }).catch(e => console.log("Error promise: ", e));

            /*fetch("/api/contact", {
                            method: "POST",
                            body: JSON.stringify(uIn),
                            headers: {
                                "content-type": "application/json;charset=UTF-8"
                            }
                        }).then(r => r.json()).then(r =>
                        // update the UI
                        { console.log("res: ", r) })
                            .catch(e => {
                                // update UI
                                console.log("Error: ", e)
                            })*/
        }
    })

    async function reqH(u, m, b, h) {
        const r_ = await fetch(u, { method: m, body: JSON.stringify(b), headers: { "content-type": "application/json;charset=UTF-8", "authorization": h } });
        if (!r_.ok) {
            console.log("Error happened on " + u + " ,Check the res: ", r_)
            return false;
        }
        return await r_.json();
    }

    function bdyObj(frm, btn) {
        const uIn = {};

        const fD = new FormData(frm, btn);

        for (const [key, value] of fD) {
            uIn[key] = value;
        }
        return uIn;
    }

    function dateNum() {
        const nD = new Date();
        let nDd = nD.getDate(); nDd = nDd < 10 ? "0" + (nDd) : nDd + '';
        let nDm = nD.getMonth() + 1; nDm = nDm < 10 ? "0" + (nDm) : nDm + '';
        return Number((nDd + nDm + nD.getFullYear()));
    }

    function setErr(msg) {
        const erBox = document.querySelector(".erBox");
        erBox.classList.remove(msg.msg ? "red" : "green");
        erBox.classList.add(msg.msg ? "green" : "red");

        erBox.innerHTML = msg.msg || msg.err
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

    function copyToClipboardWeb(txt, ok) {
        navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
            if (result.state === "granted" || result.state === "prompt") {
                navigator.clipboard.writeText(txt).then(() => {
                    aqyanoosShortAlert(ok || "Copied to the clipboard successfully.");
                }, () => {
                    aqyanoosShortAlert("Copy failed, please try again!");
                });
            }
        });
    }

    function aqyanoosShortAlert(txt, err) {
        if (document.querySelector('.custom-alert')) {
            document.querySelector('.custom-alert').remove();
        }

        const secEl = document.createElement('section');
        secEl.className = "custom-alert " + (err ? err : " ");
        secEl.innerHTML = `<div class="ca-container s"><div class="ca-description">${txt}</div></div>`;

        document.body.appendChild(secEl);
        setTimeout(() => { secEl.remove() }, 2000)
    }

    window.copyToClipboardWeb = copyToClipboardWeb;
    window.aqyanoosShortAlert = aqyanoosShortAlert;
}