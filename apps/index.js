
const fy = new Date().getFullYear();

const navContent = `
<section class="d-flex nav">
<nav>
  <a href="#home-page" class="current">Home</a>  
  <a href="./views/source-codes/source-codes.html">Tutorials</a>
  <a href="./views/main/about.html">About</a>
</nav>
</section>
<hr>
<section class="d-flex nav">
<nav class="home-second-nav">
  <a href="https://www.youtube.com/@aqyanoos" target="_blank">YouTube</a> <span>|</span>
  <a href="/online-text-editor-online-code-editor-online-notepad.html">Online Text Editor</a> <span>|</span>
  <a href="/how-to-convert-hex-hexadecimal-to-decimal-integer.html">Hex / Decimal Convertor</a>
</nav>
</section>
`;

const navEl = document.getElementById("main-nav");
navEl.innerHTML = navContent;

const footerContent = `
<section class="container-footer">
    <section>
        <div>MAIN</div>
        <a href="/">Home</a>
        <a href="/views/source-codes/source-codes.html">Tutorials</a>
        <a href="/views/main/about.html">About</a>
    </section>
    <section>
        <div>
            CONTACTS
        </div>
        <a href="https://be.linkedin.com/in/sayed-kazimi-0507/" target="_blank">LinkedIn</a>
        <a href="https://github.com/Sayed94h" target="_blank">Github</a>

    </section>
    <section>
        <div>MORE...</div>
        <a href="/#my-apps">Android Apps</a>
        <a href="/views/main/questions.html">Questions ?</a>
        <a href="/privacy/privacy.html?page=cr">Privacy Policy</a>
    </section>

</section>
<div class="copyright">
    &copy; aqyanoos.com | <span id="current-year">${fy}</span>
</div>
`;

const footerEl = document.getElementById("main-footer");
footerEl.innerHTML = footerContent;

// set the age
const ageEl = document.getElementById("age");
ageEl ? ageEl.innerHTML = fy - 1994 : "";

// const today = Date.now();
// const dateNumber = (d) => Math.round((Date.now() - new Date(d)) / 1000 / 60 / 60 / 24);
//new Date(today)

function toYr (d)
{
    const days = Math.round((Date.now() - new Date(d)) / 1000 / 60 / 60 / 24);
    if (days > 364)
    {
        let yr = Math.floor(days / 365);
        yr = yr + " year" + (yr > 1 ? "s" : "");
        let days_ = days % 365;
        days_ = days_ > 0 ? " and " + days_ + " day" + (days_ > 1 ? "s" : "") : "";
        return yr + days_ + " ago";
    } else
    {
        return days > 1 ? days + " days ago" : " Today";
    }
};

document.getElementById("dif-FRhrc").innerHTML = toYr("2022-02-09");

document.getElementById("dif-FRtextEditor").innerHTML = toYr("2022-02-23");

document.getElementById("dif-FRCR").innerHTML = toYr("2023-01-9");

document.getElementById("dif-FRDB").innerHTML = toYr("2023-02-22");


