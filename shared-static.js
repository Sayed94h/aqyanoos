function toggleMenu(){const m_=document.querySelector(".menu-wrapper");if(m_)m_.classList.toggle("open");}document.querySelector(".menu-icon")&&(document.querySelector(".menu-icon").onclick=toggleMenu,document.querySelector(".menu-icon-lg").onclick=toggleMenu,document.querySelectorAll(".side-menu-action-btn").forEach(e=>{e.onclick=toggleMenu}));let sideMenuEl=document.querySelector(".menu-wrapper");sideMenuEl&&sideMenuEl.addEventListener("click",function(e){if(e.target.className.includes("menu-wrapper open"))e.target.classList.remove("open")});
if(window.location.href) {
    const p_ = ["CSS-Selectors", "MongoDB-in-ASP", "Make-QR-Code-Generator", "Host-React-App", "Expenses-Manager", 
        "Font-Generator", "QR-Code-Generator", "Math-Exercises", "Android-Apps", "Response-Code-List","Painting-App", "Color-Tools",
    "Notepad-App", "Developer-Job"]
    const cP = document.querySelector(".Tutorials_page")
    
    for(let i = 0; i < p_.length;i++) {
        if(window.location.href.includes(p_[i].toLowerCase())) {
            if (cP) {
                cP.innerHTML = p_[i] === "Expenses-Manager" ? "Money Manager" : p_[i]
                cP.href = window.location.href
                cP.classList.add("current")
                cP.removeAttribute("rel")
                break;
            }
        }
    }
}