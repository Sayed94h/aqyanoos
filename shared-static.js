
// side menu
function toggleMenu() {
    const menuWrapper = document.querySelector(".menu-wrapper");
    if (menuWrapper)
        menuWrapper.classList.toggle("open");
}

if (document.querySelector(".menu-icon")) {
    document.querySelector(".menu-icon").onclick = toggleMenu;
    document.querySelector(".menu-icon-lg").onclick = toggleMenu;

    document.querySelectorAll(".side-menu-action-btn").forEach(item => {
        item.onclick = toggleMenu;
    });
}

const sideMenuEl = document.querySelector(".menu-wrapper");


if (sideMenuEl) {
    sideMenuEl.addEventListener("click", function (e) {
        if (e.target.className.includes("menu-wrapper open")) {
            e.target.classList.remove("open");
        }
    });
}

// end side menu