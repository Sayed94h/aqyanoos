function toggleMenu() { 
    const m_ = document.querySelector(".menu-wrapper"); 
    if (m_) m_.classList.toggle("open"); } 
    document.querySelector(".menu-icon") && 
    (document.querySelector(".menu-icon").onclick = toggleMenu, 
    document.querySelector(".menu-icon-lg").onclick = toggleMenu, 
    document.querySelectorAll(".side-menu-action-btn").forEach(e => { e.onclick = toggleMenu })); 
    let sideMenuEl = document.querySelector(".menu-wrapper"); 
    sideMenuEl && sideMenuEl.addEventListener("click", function (e) 
    { if (e.target.className.includes("menu-wrapper open")) e.target.classList.remove("open") });
if (window.location.href) {
    const p_ = ["CSS-Selectors", "MongoDB-in-ASP", "Make-QR-Code-Generator", "Host-React-App", "Expenses-Manager",
        "Font-Generator", "QR-Code-Generator", "Math-Exercises", "Android-Apps", "Response-Code-List", "Painting-App", "Color-Tools",
        "Notepad-App", "Developer-Job", "Dark-Web", "Online-Tools", "Cryptocurrency", "Detox-Smoothie"]
    const cP = document.querySelector(".Tutorials_page")

    if (cP) {
        for (let i = 0; i < p_.length; i++) {
            if (window.location.href.includes(p_[i].toLowerCase())) {
                cP.innerHTML = p_[i] === "Expenses-Manager" ? "Money Manager" : p_[i]
                cP.href = window.location.href
                cP.classList.add("current")
                cP.removeAttribute("rel")
                break;
            }
        }
    }

    if (document.querySelector(".art-share")) {
        document.querySelector(".art-share").onclick = function () {
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
                            aqyanoosCustomAlert("Copied Successfully", "The page link copied to the clipboard. You can share / send it by pasting on WhatsApp, Messenger, Email,...");
                        }, () => {
                            // aqyanoosCustomAlert("Copy failed, please try again!");
                        });
                    }
                });
            }
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

}