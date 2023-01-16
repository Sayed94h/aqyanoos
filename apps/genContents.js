const fy = new Date().getFullYear();

const pages = [
    {
        Name: "Home",
        Path: "/"
    },
    {
        Name: "Tutorials",
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
    const queryString = window.location.href;
    const pageType = queryString.split("?")[1];
    let pt = "cr";
    if (pageType)
    {
        //console.log('query string: ', pageType);
        const type_ = pageType.split("=")[1];
        if (type_)
        {
            pt = type_;
            const appName = document.querySelectorAll(".app_name");
            if (type_ === "cr")
            {
                appName.forEach(el =>
                {
                    el.innerHTML = "Color Reference";
                });
            }

            if (type_ === "db")
            {
                appName.forEach(el =>
                {
                    el.innerHTML = "Dream Board";
                });
            }

            if (type_ === "cw")
            {
                appName.forEach(el =>
                {
                    el.innerHTML = "Color World";
                });
            }
        }
    }

    const tutorialListEl = document.getElementById("tutorial-list");
    if (tutorialListEl)
    {
        tutorialListEl.innerHTML = `
        <a href="./data-visualization-part01.html" class="tl-item dvp1">Data Visualization Part 1</a><br> <br>
        <a href="./text-editor-js.html" class="tl-item tejs">Text Editor JS</a> <br> <br>
        <a href="./hex-to-decimal.html" class="tl-item chtd">Convert Hex to decimal</a>        

        `;
    }

    const navEl = document.getElementById("main-nav");
    if (navEl)
    {
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

            if (page.Name === "Tutorials" && pageTitle.includes("Data Visualization"))
            {
                link.setAttribute("class", "current");
                document.querySelector(".dvp1").classList.add("b-current");
            }

            if (page.Name === "Tutorials" && pageTitle.includes("Text / Code Editor"))
            {
                link.setAttribute("class", "current");
                document.querySelector(".tejs").classList.add("b-current");
            }

            if (page.Name === "Tutorials" && pageTitle.includes("Convert Hex to Decimal"))
            {
                link.setAttribute("class", "current");
                document.querySelector(".chtd").classList.add("b-current");
            }

            navContent.appendChild(link);
        });

        navEl.appendChild(navContent);
    }

    setFooterContent(pt);
}

setNavContent(pages);

function setFooterContent (qs)
{
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
        <a href="/privacy/privacy.html?page=${qs}">Privacy Policy</a>
    </section>

</section>
<div class="copyright">
    &copy; aqyanoos.com | <span id="current-year">${fy}</span>
</div>
`;

    const footerEl = document.getElementById("main-footer");
    footerEl.innerHTML = footerContent;
}