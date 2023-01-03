const fy = new Date().getFullYear();

function setNavContent ()
{
    let navContent = `
        <nav class="main-nav-holder">
                    <a href="/">HOME</a>
                    <a href="/views/source-codes/source-codes.html">Source Codes</a>
                    <a href="/views/main/about.html">ABOUT</a>
                </nav>
        `;

    const pageTitle = document.title;

    const navEl = document.getElementById("main-nav");

    if (pageTitle.includes("About"))
    {
        navContent = `
        <nav class="main-nav-holder">
                    <a href="/">HOME</a>
                    <a href="/views/source-codes/source-codes.html" >Source Codes</a>
                    <a href="/views/main/about.html" class="current">ABOUT</a>
                </nav>
        `;
    }

    if (pageTitle.includes("Data Visualization") || pageTitle.includes("Text / Code Editor") || pageTitle.includes("Source Codes"))
    {
        navContent = `
        <nav class="main-nav-holder">
                    <a href="/">HOME</a>
                    <a href="./source-codes.html" class="current">Source Codes</a>
                    <a href="/views/main/about.html">ABOUT</a>
                </nav>
        `;
    }

    navEl.innerHTML = navContent;
}

setNavContent();

const footerContent = `
<section class="container-footer">
            <section>
                <p>MAIN</p>
                <a href="/">HOME</a>
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
                <a href="/#my-apps">ANDROID APPS</a>
                <a href="/privacy/privacy_2.html">Privacy Policy</a>
            </section>

        </section>
        <p class="copyright">
            &copy; aqyanoos.com | <span id="current-year">${fy}</span>
        </p>
`;

const footerEl = document.getElementById("main-footer");
footerEl.innerHTML = footerContent;