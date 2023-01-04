const fy = new Date().getFullYear();

const pages = [
    {
        Name: "Home",
        Path: "/"
    },
    {
        Name: "Source Codes",
        Path: "/views/source-codes/source-codes.html"
    },
    {
        Name: "Questions ?",
        Path: "/views/main/questions.html"
    }, {
        Name: "About",
        Path: "/views/main/about.html"
    }
];

function setNavContent (p_)
{
    const pageTitle = document.title;

    const navEl = document.getElementById("main-nav");
    navEl.innerHTML = "";

    const navContent = document.createElement("nav");
    navContent.classList.add("main-nav-holder");

    p_.forEach(page =>
    {
        const link = document.createElement('a');
        link.setAttribute("href", page.Path);

        link.innerHTML = page.Name;

        if (pageTitle.includes(page.Name))
        {
            link.setAttribute("class", "current");
        }

        if (pageTitle.includes("Data Visualization") || pageTitle.includes("Text / Code Editor"))
        {
            link.setAttribute("class", "current");
        }

        navContent.appendChild(link);
    });

    navEl.appendChild(navContent);
}

setNavContent(pages);

const footerContent = `
<section class="container-footer">
    <section>
        <div>MAIN</div>
        <a href="/">Home</a>
        <a href="/views/source-codes/source-codes.html">Source Codes</a>
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
        <a href="/privacy/privacy_2.html">Privacy Policy</a>
    </section>

</section>
<div class="copyright">
    &copy; aqyanoos.com | <span id="current-year">${fy}</span>
</div>
`;

const footerEl = document.getElementById("main-footer");
footerEl.innerHTML = footerContent;