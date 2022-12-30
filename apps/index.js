
const fy = new Date().getFullYear();

const navContent = `
<section class="d-flex nav">
<nav>
  <a href="#home-page" class="current">HOME</a>
  <a href="./views/main/about.html">ABOUT</a>
  <a href="./views/source-codes/source-codes.html">Source Codes</a>
</nav>
</section>
<hr>
<section class="d-flex nav">
<nav>
  <a href="/online-text-editor-online-code-editor-online-notepad.html">Text Editor</a>
</nav>
</section>
`;

const navEl = document.getElementById("main-nav");
navEl.innerHTML = navContent;

const footerContent = `
<section class="container-footer">
      <section>
        <p>MAIN</p>
        <a href="#home-page">HOME</a>
        <a href="/views/source-codes/source-codes.html">Source Codes</a>
        <a href="/views/main/about.html">ABOUT</a>
      </section>
      <section>
        <p>
          CONTACTS
        </p>
        <a href="https://be.linkedin.com/in/sayed-kazimi-0507/" target="_blank">LINKEDIN</a>
        <a href="https://github.com/Sayed94h" target="_blank">GITHUB</a>

      </section>
      <section>
        <p>MORE...</p>
        <a href="#my-apps">ANDROID APPS</a>
        <!-- <a href="/views/main/eula_textEditor.html">EULA Text Editor</a> -->
      </section>

    </section>
    <p class="copyright">
      &copy; aqyanoos.com | <span id="current-year">${fy}</span>
    </p>
`;

const footerEl = document.getElementById("main-footer");
footerEl.innerHTML = footerContent;

// set the age
const ageEl = document.getElementById("age");
ageEl ? ageEl.innerHTML = fy - 1994 : "";

const today = Date.now();
//new Date(today)
const difFRhrc = Math.round((today - (new Date("2022-02-09"))) / 1000 / 60 / 60 / 24);
document.getElementById("dif-FRhrc").innerText = difFRhrc + " Days ago";

const difFRtextEditor = Math.round((today - (new Date("2022-02-23"))) / 1000 / 60 / 60 / 24);
document.getElementById("dif-FRtextEditor").innerText = difFRtextEditor + " Days ago";

const difFRColorWorld = Math.round((today - (new Date("2022-12-28"))) / 1000 / 60 / 60 / 24);
document.getElementById("dif-FRCW").innerText = difFRColorWorld + " Days ago";


